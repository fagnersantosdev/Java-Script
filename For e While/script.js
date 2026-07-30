
//exemplo de for
let numeros = [10,20,30];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//exemplo de for...of
for (let numero of numeros) {
    console.log(numero);
}

//exemplo de while
let contador = 0; //aqui é a variável de controle
while (contador < numeros.length) { //while é a estrutura de repetição, contador < numeros.length é a condição de parada, 
    //dizendo que enquanto contador for menor que o tamanho do array numeros, o loop vai continuar
    console.log(numeros[contador]);
    contador++;
}


function multiplicar(a, b){
    return a * b;
}

console.log(multiplicar(5, 4));