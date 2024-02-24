// Prof. Rodrigo Bossini

var idade = 18
console.log(`Oi, ${nome}`) // içada/hoist -> como se tivesse sido declarada aqui
if (idade >= 18) {
    var nome = "Juan" // ela foi içada (do inglês 'hoist')
    // let nome = "Juan" // vemos a diferença na execução ao substituir var por let
    console.log("Parabéns, " + nome + ". Você pode dirigir!")
}
console.log("Até mais " + nome + "!")