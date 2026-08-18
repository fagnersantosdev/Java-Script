// O Limpador de Textos (Strings)
// Imagine que um usuário digitou o nome dele em um campo de cadastro com espaços sobrando e letras minúsculas: const nomeSujo = "   joão silva   ";.
// A solução é criar um código que faça o seguinte:

// Usar o trim() para remover os espaços.
// Usar o toUpperCase() para deixar tudo em maiúsculas.

const nomeSujo = "   joão silva   ";
const nomeLimpo = nomeSujo.trim().toUpperCase();
console.log(nomeLimpo);

// O Controle de Fila (Arrays)
// Você está criando um sistema de fila de atendimento.
// Crie um array chamado fila com os pacientes: ["Ana", "Carlos"].
// Um novo paciente chamado "Marcos" chegou. Use o push() para adicioná-lo ao final da fila.
// O médico chamou o primeiro paciente. Use o shift() para remover a "Ana" da fila.
// Imprima o estado atual do array fila no console.

const fila = ["Ana", "Carlos"];
fila.push("Marcos");
fila.shift();
console.log(fila);

// O Controle de Estoque (Arrays)
// Você está criando um sistema de controle de estoque.
// Crie um array chamado estoque com os produtos: ["Arroz", "Feijão", "Macarrão"].
// Um novo produto chamado "Açúcar" chegou. Use o push() para adicioná-lo ao final do estoque.
// Um produto chamado "Feijão" acabou. Use o splice() para removê-lo do estoque.
// Imprima o estado atual do array estoque no console.

const estoque = ["Arroz", "Feijão", "Macarrão"];
estoque.push("Açúcar");
estoque.splice(1, 1);
console.log(estoque);