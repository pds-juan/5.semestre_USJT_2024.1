async function hello(nome) {
    return "Olá, " + nome + "!";
}

const boasVindas = hello("Juan");

console.log(boasVindas);
boasVindas.then((res) => console.log(res));