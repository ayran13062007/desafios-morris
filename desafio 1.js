const form = document.getElementById('myForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Adiciona a classe 'gradient' ao body para aplicar o gradiente
    document.body.classList.add('gradient');

    // Exibe a mensagem de agradecimento
    mensagem.textContent = 'Obrigado por preencher o formulário!';
    mensagem.style.display = 'block';
});