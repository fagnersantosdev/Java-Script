
// Funçao Map


function mostrarResultado(){

    // Captura os valores digitados
    pessoa1 = (document.getElementById('pessoa1').value);
    pessoa2 = (document.getElementById('pessoa2').value);
    pessoa3 = (document.getElementById('pessoa3').value);

     // Verifica se algum campo está vazio
    if (!pessoa1 || !pessoa2 || !pessoa3) {
        alert("Por favor, preencha todos os campos com os nomes.");
        document.getElementById("resultado").innerHTML = ""; // limpa o resultado anterior, se houver
        return; // interrompe a função
    }
    // Cria um array com os nomes
    const lista = [pessoa1, pessoa2, pessoa3];

    // Usa map para transformar cada item
    const resultadoMapeado = lista.map((nome, index) => {
        return `<br>${nome} está na posição ${index}`;
        
    });

    // Exibe o resultado na tela
    document.getElementById("resultado").innerHTML = resultadoMapeado.join("<br>");

    // Explicação do map
    document.getElementById("explicacao").innerHTML = `
        <strong>Explicação:</strong> A função <strong><code style= color:blue>map()</code></strong> 
        é usada para percorrer cada item de um array e aplicar uma transformação nele.
        <br>Ela retorna um novo array com os resultados. 
        <br> <br> Neste exemplo, usamos o <strong><code style= color:blue>map()</code></strong> para criar frases que indicam a posição de cada nome na lista.`;

}
