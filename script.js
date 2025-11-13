// Função para mudar a cor do texto ao clicar
function mudar(){
    // Se o texto está violeta, muda para azul; se não, volta para violeta
    if (texto.style.color == "violet")
        texto.style.color = "blue";
    else 
        texto.style.color = "violet";
}

// Adiciona evento de clique no texto para chamar a função mudar()
texto.addEventListener("click", mudar); 

// Seleciona o elemento de imagem pelo ID 'readme'
const img = document.getElementById('readme'); 

// Permite que a imagem receba foco pelo teclado (para acessibilidade)
img.tabIndex = 0 ;

// Ao clicar na imagem, alterna a classe 'is-expanded' (expande ou recolhe visualmente)
img.addEventListener('click', () =>{
    img.classList.toggle('is-expanded');
});

// Ao pressionar uma tecla enquanto a imagem está focada
img.addEventListener('keydown', (e) => {
    // Verifica se a tecla pressionada é 'Enter' ou espaço (' ')
    if (e.key === 'Enter' || e.key === ' ') {
        // Alterna a classe 'is-expanded' na imagem
        img.classList.toggle('is-expanded');
    }
    // Evita o comportamento padrão da tecla (por exemplo, evitar scroll ao pressionar espaço)
    e.preventDefault();
});

// Ao passar o mouse sobre a imagem, adiciona a classe 'is-expanded' (expande)
img.addEventListener('mouseenter', () =>  
    img.classList.add('is-expanded')
); 

// Quando o mouse sai da imagem, remove a classe 'is-expanded' (recolhe)
img.addEventListener('mouseleave', () =>
    img.classList.remove('is-expanded')
); 
