//*FUNÇAO DIRETA*
// function acao(){
//     document.write("Carregando... <br>");
// }

// setInterval(acao, 2000);

//*FUNÇAO ANÔNIMA*
// setInterval(() => {
//     document.write("Carregando... <br>");
// }, 1000);

//*FUNÇAO DENTRO DE UMA VARIÁVEL*
//(Possibilita a chamada da variável no console para parar a execuçao. Usa-se clearInterval(Nome da variável).)
//var timer= setInterval(() =>{
//    document.write("Carregando... <br>");
//}, 1000);

//*SETTIMEOUT: usado para exercutar a funçao e parar logo após ser executada.*
// setTimeout(() => {
//     document.write("Carregando... <br>");
// }, 2000);

//DESAFIO
// Você está criando um sistema de tags para um blog. O usuário digitou as seguintes tags:
// const tagsDigitadas = ["javascript", "react", "node", "javascript", "react", "html"];

// Crie uma variável chamada tagsLimpas.

// Use o truque do new Set() junto com o Spread Operator (...) e colchetes ([]) para transformar essa lista cheia de repetições em um novo array apenas com palavras únicas.

// Imprima tagsLimpas no console.

let TagDigitais = ["javascript", "react", "node", "javascript", "react", "html"];
let tagsLimpas = [...new Set(TagDigitais)];
console.log(tagsLimpas);