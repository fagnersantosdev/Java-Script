
// Função Filter (exemplo)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares); // Saída: [2, 4, 6, 8, 10]

// **Desafio 10: O Filtro de Qualidade (filter)**
// Crie um array chamado `notas` com os valores `[5, 8, 4, 9, 7, 3]`. Use o método `filter()` 
// <br>para criar um novo array chamado `aprovados`, 
// <br>contendo apenas as notas que sejam **maiores ou iguais a 7**. Imprima o resultado no console.
const notas = [5, 8, 4, 9, 7, 3]; // Array com as notas
const aprovados = notas.filter(nota => nota >= 7); // Usa filter para selecionar apenas as notas maiores ou iguais a 7
console.log(aprovados); // Saída: [8, 9, 7]