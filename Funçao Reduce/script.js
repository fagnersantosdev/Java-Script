
// Funçao reduce = reduzir um array

let numero = [5,3,2];

let total = numero.reduce((acumulador, numero, indice, original)=>{
    console.log(`${acumulador} - total ate o momento`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - indice atual`);
    console.log(`${original} - array original`);
    console.log(`____________________________________`)

    return acumulador += numero;
})

console.log("Total do Reduce " + total);

// Imagine que você está criando um jogo e o jogador tem o seguinte histórico de pontos nas últimas partidas:
// const pontos = [5, 12, 8, 20];

// Usando o reduce(), crie uma variável chamada pontuacaoTotal que some todos esses pontos. Imprima o resultado no console.

const pontos = [5, 12, 8, 20];

const pontuacaoTotal = pontos.reduce((acumulador, pontoAtual) => {
    return acumulador + pontoAtual;
}, 0);

console.log("Pontuação Total: " + pontuacaoTotal);