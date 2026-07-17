
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