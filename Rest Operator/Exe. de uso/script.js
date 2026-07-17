//Rest Operator

function sorteador(...numeros){
    const numeroGerado = Math.floor ( Math.random() * numeros.length );
    console.log("O número gerado foi: " + numeroGerado);
}

sorteador(1,2,3,4,5,6,7,8,9);

// Neste exemplo vemos um sorteio de números aleatórios, que acontece através da função RAMDOM: responsável por gerarum número aleatório. Já a finçao FLOOR, faz com que os números aleatórios não apareçam os seus decimais.