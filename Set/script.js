//*FUNÇAO DIRETA*
// function acao(){
//     document.write("Carregando... <br>");
// }

// setInterval(acao, 2000);

//*FUNÇAO ANÔNIMA*
// setInterval(() => {
//     document.write("Carregando... <br>");
// }, 1000);

//*FUNÇAO DENTRO DE UMA VARIÁVEL*
//(Possibilita a chamada da variável no console para parar a execuçao. Usa-se clearInterval(Nome da variável).)
//var timer= setInterval(() =>{
//    document.write("Carregando... <br>");
//}, 1000);

//*SETTIMEOUT: usado para exercutar a funçao e parar logo após ser executada.*
setTimeout(() => {
    document.write("Carregando... <br>");
}, 2000);