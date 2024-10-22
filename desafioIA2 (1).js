const fotos = document.querySelectorAll('.foto');

fotos.forEach(foto => {
    foto.addEventListener('click', () => {
        // Remover a classe 'ativa' de todas as fotos
        fotos.forEach(foto => foto.classList.remove('ativa'));

        // Adicionar a classe 'ativa' à foto clicada
        foto.classList.add('ativa');
    });
});