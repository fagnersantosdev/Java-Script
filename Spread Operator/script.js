//Spread Operator
// EXEMPLO 1
let primeiros =[1,2,3];

let numeros = [...primeiros, 4,5,6];

console.log(numeros);

//EXEMPLO 2

let pessoa = {
    nome: "Fagner",
    idade: 23,
    sobrenome: "Isaac"
};

let novaPessoa = {
    ...pessoa, 
    empresa: "Chok"
}
console.log(novaPessoa);

// Com o Spread Operator, podemos acrescentar itens em um Array ou Objeto. Basta apenas cria-mos um novo array ou objeto, e colocarmos (...) antes do array ou objeto anterior!

//Desafio
//Juntando Arrays: Crie um array turmaA = ["Ana", "Bia"] e outro turmaB = ["Carlos", "Daniel"]. Crie um terceiro array chamado todasTurmas usando o Spread para juntar os dois em um só. Imprima no console.

let turmaA = ["Ana", "Bia"];
let turmaB = ["Carlos", "Daniel"];
let todasTurmas = [... turmaA, "Carlos", "Daniel"];
console.log(todasTurmas);

//Atualizando Objeto: Crie um objeto produto = { nome: "Monitor", preco: 800, estoque: 10 }. Usando o Spread Operator, crie uma variável chamada produtoVendido que copie tudo de produto, mas altere o estoque para 9. Imprima no console.

let produto = {
    nome: "Monitor",
    preco: 800,
    estoque: 10,
};

let produtoVendido = {... produto, estoque:9};
console.log(produtoVendido);