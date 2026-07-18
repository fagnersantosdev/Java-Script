// Operadore aritmeticos
let x = 10;
let y = 5;
let a = 20;
let b = 10;
let soma = (a, b) => a + b;

console.log(soma(a, b));

// Usando uma função para somar dois números
function soma2(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}
//Usando arrow function para somar dois números
let multiplicacao = (a, b) => a * b;
let divisao = (a, b) => a / b;
let modulo = (a, b) => a % b;

console.log(soma2(a, b));
console.log(subtracao(a, b));
console.log(subtracao(a, b));
console.log(multiplicacao(a, b));
console.log(divisao(a, b));
console.log(modulo(a, b));

// If e Else
let idade = 20;

if (idade >= 18) {
    console.log("Entrada liberada");
} else {
    console.log("Entrada bloqueada");
}

// Switch
let statusDoPedido = "enviado";

switch (statusDoPedido) {
    case "enviado":
        console.log("Pedido enviado");
        break;
    case "pendente":
        console.log("Pedido pendente");
        break;
    case "entregue":
        console.log("Pedido entregue");
        break;
    default:
        console.log("Status do pedido não reconhecido");
}