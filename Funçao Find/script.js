
//Funçao Find - localizar um valor ou indice

let listagem = [5, 3, "Marcos", "Joao", 6, "Thiago"];

let busca =listagem.find((item, indice)=>{
    if(item == "Joao"){
        return console.log(`Encontrado com Sucesso: indice ${indice} item ${item}`)
    }
})