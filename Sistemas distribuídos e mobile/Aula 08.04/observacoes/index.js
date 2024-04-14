const express = require('express');

// npm install uuid
const { v4: uuvid4 } = require('uuid');

const app = express();
app.use(express.json());

const observacoesPorLembreteId = {};

// :id é um placeholder
// exemplo => /lembretes/123456.../observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuvid4();
    const { texto } = req.body;
    // req.params dá acesso à lista de parâmetros da URL
    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || [];
    observacoesDoLembrete.push({ id: idObs, texto });
    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete;
    res.status(201).send(observacoesDoLembrete);
});

app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || []);
});

app.listen(5000, () => {
    console.log('Observações. Porta 5000.')
});