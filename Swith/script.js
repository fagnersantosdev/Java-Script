function pedir() {
    var valor = prompt("Digite um valor de 1 a 5:");

    switch(Number(valor)){
        case 1:
            alert("Você escolheu suco!");
        break;
        case 2:
            alert("Você escolheu Refrigerante!");
        break;
        case 3:
            alert("Você escolheu Sorvete!");
        break;
        case 4:
            alert("Você escolheu Água gelada!");
        break;
        case 5:
            alert("Você escolheu chamar o garçom!");
        break;
        default:
            alert("Opção inválida!")
        
    }
}