// Script para demonstrar o uso de objetos em JavaScript
const pessoa = {  //observe que o objeto é definido usando chaves {} e contém informações de uma coisa ou pessoa
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    saudacao: function() { //observe que a função é definida como uma propriedade do objeto, usando a palavra-chave function. aqui ela apenas gera uma saudação com base nas propriedades do objeto.
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
};

// Desafio
// Crie um objeto chamado carro com as propriedades marca (string), modelo (string) e ano (number). Em seguida, acesse a propriedade ano e altere o valor dela para 2024. Imprima o objeto completo no console para verificar a alteração.
const carro = { // Criação do objeto carro com as propriedades marca, modelo e ano
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};
carro.ano = 2024;
console.log(carro);