
const nome = "João";
let idade = 25;
let cidade = "São Paulo";

console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);

const pontosDoJogador = 10;
// pontosDoJogador = 15; // Isso causará um erro, pois const não pode ser reatribuído
console.log(pontosDoJogador);

// este é o correto uso de let, pois podemos reatribuir o valor
let pontosDoJogadorLet = 10;
pontosDoJogadorLet = 15; // Isso é permitido, pois let permite reatribuição
console.log(pontosDoJogadorLet);

const produto = "Notebook"; // String
let preco = 4500.50; // Number
let emEstoque = true; // Boolean
let desconto = null; // Null
let avaliacoes; // Undefined
const categorias = ["Eletrônicos", "Informática"]; // Array
const especificacoes = { ram: "16GB", armazenamento: "512GB SSD" }; // Object

const filme = {
  titulo: "A era do Gelo",
  ano: 2002,
  genero: "Animação",
  diretor: "Chris Wedge",
  duracao: 81, // duração em minutos
  atores: ["Ray Romano", "John Leguizamo", "Denis Leary", "Goran Višnjić"]
};

console.log(filme.titulo); // A era do Gelo
console.log(filme.ano); // 2002
