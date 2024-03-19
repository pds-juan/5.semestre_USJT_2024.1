function calculoRapidinho(numero) {
    return numero >= 0 ? Promise.resolve((numero * (numero + 1)) / 2) : Promise.reject("Somente valores positivos, por favor");
}

calculoRapidinho(10)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((erro) => {
        console.log(erro);
    });

calculoRapidinho(-1)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((erro) => {
        console.log(erro);
    })

console.log("Esperando...");