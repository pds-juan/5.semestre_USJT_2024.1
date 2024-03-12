// Prof. Anderson Sanches

var linguagem = "JavaScript";
console.log("Aprendendo " + linguagem);
// pode ser redeclarado
var linguagem = "Java";
console.log("Aprendendo, " + linguagem);

// escopo não restrito a um bloco
var idade = 18;

// a variável já existe aqui, só não teve um valor atribuído
console.log(`Olá, ${nome}`);
if (idade >= 18) {
    var nome = "Juan";
    console.log(`Parabéns, ${nome}. Você pode dirigir!`);
}

// ainda existe aqui
console.log(`Até mais, ${nome}.`);