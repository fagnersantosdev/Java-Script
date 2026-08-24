// ### Exercícios de Fixação (JSON e Async)

// **Desafio 17: O Tradutor de Dados (JSON)**
// 1. Crie um objeto simples chamado `configuracoes` com `tema: "escuro"` e `idioma: "pt-BR"`.
// 2. Transforme esse objeto em uma string usando `JSON.stringify()` e guarde numa variável `configString`. Imprima ela no console.
// 3. Agora, pegue essa `configString` e transforme de volta em objeto usando `JSON.parse()`, guardando na variável `configObjeto`. Imprima no console para ver a mágica.

// **Desafio 18: O Consumidor de API (Async/Await e Fetch)**
// Crie uma função assíncrona chamada `buscarUmUsuario`.
// 1. Use o `fetch()` para buscar os dados no endereço: `[https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)` (adicionamos o `/1` no final para trazer apenas um usuário específico).
// 2. Extraia o JSON da resposta.
// 3. Imprima no console apenas o `nome` e o `email` desse usuário (dica: depois que converter para JSON, o resultado será um objeto JavaScript normal!).

let configuracoes = {
    tema: "escuro",
    idioma: "pt-BR"
};

let configString = JSON.stringify(configuracoes);
console.log(configString);
let configObjeto = JSON.parse(configString);
console.log(configObjeto);

async function buscarUmUsuario() {
    try {
        let resposta = await fetch('https://jsonplaceholder.typicode.com/users/1');
        let usuario = await resposta.json();
        console.log(`Nome: ${usuario.name}, Email: ${usuario.email}`);
    } catch (erro) {
        console.error("Erro ao buscar o usuário:", erro);
    }
}
buscarUmUsuario();