const hello = () => console.log("Hello");
hello();

const dobro = (valor) => valor * 2;
console.log(dobro(10));

const triplo = (valor) => {
    return valor * 3;
}
console.log(triplo(10));

const ehPar = (n) => {
    // n % 2 === 0; // precisa do return
    return n % 2 === 0;
}
console.log(ehPar(10));

// ou pode fazer assim também
// const ehPar = (n) => n % 2 === 0;
// console.log(ehPar(10));