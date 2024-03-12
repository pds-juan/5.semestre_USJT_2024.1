function hello() {
    console.log('Oi')
}
hello()
// aqui redefinimos a função sem parâmetros
function hello(nome) {
    console.log('Olá, ' + nome)
}
hello('Juan')

function soma(a, b) {
    return a + b;
}
const res = soma(2, 3)
console.log(res)