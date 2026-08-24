// ### Exercícios de Fixação (Módulos e Classes)

// **Desafio 19: O Arquiteto de Arquivos (Módulos)**
// Como não temos arquivos físicos, vamos simular:
// 1. Escreva como você faria para exportar (usando `export default`) uma função chamada `calcularFrete` em um arquivo chamado `frete.js`.
// 2. Escreva como você faria o `import` dessa função dentro de um arquivo principal chamado `app.js`.

// **Desafio 20: A Fábrica de Objetos (Classes)**
// 1. Crie uma classe chamada `Produto` baseada no exemplo do documento.
// 2. O `constructor` dela deve receber dois parâmetros: `nome` e `preco`. Dentro do constructor, guarde esses valores usando `this.nome = nome;` e `this.preco = preco;`.
// 3. Fora da classe, crie uma variável chamada `meuProduto` e instancie a classe passando valores (ex: `new Produto("Teclado", 150)`). Imprima `meuProduto` no console.

function calcularFrete(peso) {
    const valorFrete = peso * 10;
    return valorFrete;
}

//export default calcularFrete;

//import calcularFrete from './frete.js';

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

const meuProduto = new Produto("Teclado", 150);
console.log(meuProduto);