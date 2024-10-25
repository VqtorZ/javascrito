let senha = "secreta8";

if (senha.length >= 8 && /\d/.test(senha)) {
    console.log("Sua senha está disponível")
} else {
    console.log("Sua senha é muito fraca")
};

let nota1 = 5;
let nota2 = 7;
let nota3 = 9;
let notalot = nota1 + nota2 + nota3;
let total = notalot / 3;

if (total >= 7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
};

let ano = 2100;

if (ano % 100 !== 0 && ano % 4 === 0 ) {
    console.log("ano bissexto")
} else {
    console.log("não é bissexto")
};

