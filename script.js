// Função para mudar a cor do texto ao clicar
function mudar(){
    if (texto.style.color == "violet")
    texto.style.color = "blue";
    else 
    texto.style.color = "violet";
}

texto.addEventListener("click", mudar); // Adiciona evento de clique no texto