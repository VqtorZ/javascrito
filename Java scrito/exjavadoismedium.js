const nome = "Victor";
let idade = 18;

console.log (nome);
if (idade >= 18) {
    console.log("É maior de idade")
} else {
    console.log("Não é maior de idade")
};
//ex1 medio


let valor1 = 10;
let valor2 = 11;

if (valor1 > valor2) {
    console.log(valor1)
} else {
    console.log(valor2)
};
//ex2 medio


let texto = "cinco";

if (texto.length >= 5) {
    console.log("Maior que 5 caracteres")
} else {
    console.log("Menos que 5 caracteres")
}
//ex3 medio


let nmr1 = 2;
let nmr2 = 8;

if (nmr1 % 2 === 0 && nmr2 % 2 === 0) {
    console.log("Ambos são pares")
} else {
    console.log("Não são pares")
};
//ex4 medio


const palavra = "JavaScript é uma linguagem de programação"

if (palavra.includes ("JavaScript")) {
    console.log("Contém a palavra JS")
} else {
    console.log("Não contém a palavra JS")
}
//ex5 medio


let salario = 2000;

if (salario >= 2000) {
    console.log("Igual ou acima de 2000")
} else {
    console.log("Abaixo de 2000")
}
//ex6 medio