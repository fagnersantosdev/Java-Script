let nomes = ["Fagner", "Isaac"];

let {
    0:nome,
    1:sobrenome
    } = nomes

console.log(`Meu nome é ${nome} ${sobrenome}`);

document.write(`My name is ${nome}`);

//Sempre quanso utilizar o Array, os índices são numéricos e seguem a ordem a partir do 0 e de acordo com os índices definidos