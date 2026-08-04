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

// Desafio 12: O Mestre da Desestruturação e Espalhamento (Destructuring e Spread)
// Siga os passos abaixo em um único bloco de código:

// Crie um objeto chamado dev com as propriedades nome e linguagem.

// Use o destructuring para extrair a propriedade linguagem para uma variável solta e imprima essa variável no console.

// Use o spread operator (...) para criar um novo objeto chamado devSenior. Esse novo objeto deve conter tudo que o objeto dev tem, mas adicione uma nova propriedade chamada experiencia com o valor "10 anos". Imprima devSenior no console.

const dev = { // Criação do objeto dev com as propriedades nome e linguagem
    nome: "Ana",
    linguagem: "JavaScript"
};
const { linguagem } = dev; // Destructuring para extrair a propriedade linguagem do objeto dev
console.log(linguagem);

const devSenior = { ...dev, experiencia: "10 anos" }; // Spread operator para criar um novo objeto devSenior que contém todas as propriedades do objeto dev e adiciona a propriedade experiencia
console.log(devSenior);