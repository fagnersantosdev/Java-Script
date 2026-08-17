//Rest Operator

function testandoRest(a,b, ...extras){
    console.log(a, b, extras); // 1 2[3,4,5]
}

testandoRest(1,2,3,4,5);

// Utilizando o Rest nesse exemplo, é possível perceber que os índices 1 e 2 refere-se as letras A e B. Ao executar o código, automatiacamente o Rest transforma os índices 3,4 e 5 em um array deixando fora os números 1 e 2.

function testandoRest2(...extras){
    console.log(extras); // [1,2,3,4,5]
}

testandoRest2(1,2,3,4,5);

// Já nesse outro exemplo, os índices são definidos dentro do array corretamente, através da função Rest.

//Desafio
//O Porteiro Educado (Default Parameters)
// Crie uma função chamada darBoasVindas que receba o parâmetro nome. Use o Default Parameter para que, se a função for chamada sem nenhum nome, a variável nome receba o valor padrão "Visitante". A função deve imprimir no console a mensagem: "Bem-vindo(a), [nome]!"

function darBoasVindas(nome = "Visitante"){
    console.log(`Bem-vindo(a), ${nome}!`);
}

//A Lista de Compras (Rest Operator)
// Crie uma função chamada fazerCompras que use o Rest Operator (...) nos parâmetros para receber uma quantidade indefinida de itens (por exemplo: ...itens). A função deve simplesmente imprimir no console o array contendo todos os itens que foram passados. Chame essa função passando três strings diferentes soltas (ex: "Pão", "Leite", "Café").

function fazerCompras(...itens){
    console.log(itens);
}

fazerCompras("Pão", "Leite", "Café");

