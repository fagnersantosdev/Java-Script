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