// Prof. Anderson Sanches

// npm install axios
const axios = require("axios");

// chave da api
const appid = "6ec5a834c3a2e1e723cb6b090f56c3f2";

// local desejado
const q = "São Paulo";

// unidade de medida da temperatura
const units = "metric";

// idioma
const lang = "pt_BR";

// quantidade de resultados
const cnt = "10";

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

console.log(url);
// abrindo a url gerada no console pelo navegador Microsoft Edge, o JSON aparece organizado sem necessidade de plugin ou extensão

// faz a requisição
axios
    .get(url)
    .then((res) => {
        // mostra o resultado e devolve apenas a parte de interesse
        console.log("\nInício do primeiro .then")
        console.log(res);
        console.log("Fim do primeiro .then\n\n")
        return res.data;
    })
    .then((res) => {
        // mostra o total e devolve o resultado
        console.log("\nInício do segundo .then")
        console.log(res.cnt);
        console.log("Fim do segundo .then\n\n")
        return res;
    })
    .then((res) => {
        // devolve somente a lista de previsões
        console.log("\nInício do terceiro .then")
        console.log("aqui", res);
        console.log("Fim do terceiro .then\n\n")
        return res["list"];
    })
    .then((res) => {
        // para cada resultado, mostra algumas informações
        console.log("\nInício do quarto .then")
        for (let previsao of res) {
            console.log(`
            ${new Date(+previsao.dt * 1000).toLocaleDateString()},
            ${'Min: ' + previsao.main.temp_min}\u00B0C,
            ${'Max: ' + previsao.main.temp_max}\u00B0C,
            ${'Hum: ' + previsao.main.humidity}%,
            ${previsao.weather[0].description}
            `);
        }
        console.log("Fim do quarto .then\n\n")
        return res;
    })
    .then((res) => {
        // verifica quantas previsões têm percepção humana de temperatura acima de 30 graus
        console.log("\nInício do último .then")
        const lista = res.filter(r => r.main.feels_like >= 30);
        console.log(`${lista.length} previsões têm percepção humana de temperatura acima de 30 graus`)
        console.log("Fim do último .then\n\n")
    })