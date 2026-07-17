//spread operator

let lista1 = [1,2,3];
let lista2 = lista1;

lista2.push(4);

console.log(lista1);

// Ao utilizarmos essa forma para copiar uma lista, estamos definindo realmente que as duas listas são iguais. Por isso é possivel perceber que ao chamar-mos a lista1, vemos que é mostrado que ela tem 4 itens, sendo que tem 3!

let livro1 = [1,2,3];
let livro2 = [...livro1];

livro2.push(4);

console.log(livro1);

// Ao utilizar-mos a tecnica do SPREAD OPERATOR, vemos que só irá aparecer o índice 4 na lista2, pois é nela que estou dizendo que contém o índice 4!