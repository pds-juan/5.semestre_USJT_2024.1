function enviar() {
    const pergunta = document.getElementById("prompt").value;
    axios.post('http://localhost:4000/pergunte-ao-chatgpt', { prompt: pergunta })
        .then(res => {
            document.getElementById("completion").value = res.data.completion;
        })
        .catch(erro => {
            console.log(erro);
        })
}