//exemplo de default parameters
function multiply(a, b = 1) { //aqui b tem um valor default de 1
    return a * b;
}
console.log(multiply(5)); //retorna 5, pois b é 1
console.log(multiply(5, 2)); //retorna 10, pois b é 2

// Desafio 13: O Porteiro Educado (Default Parameters)
// Crie uma função chamada darBoasVindas que receba o parâmetro nome. Use o Default Parameter para que, se a função for chamada sem nenhum nome, a variável nome receba o valor "Visitante". A função deve imprimir no console a mensagem: "Bem-vindo(a), [nome]!".

function darBoasVindas(nome = "Visitante") {
    console.log(`Bem-vindo(a), ${nome}!`);
}

console.log(darBoasVindas("João")); // Bem-vindo(a), João!
console.log(darBoasVindas()); // Bem-vindo(a), Visitante!