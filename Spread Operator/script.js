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