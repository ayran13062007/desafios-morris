const bandeiras = document.querySelectorAll('.bandeira');
const imagemGrande = document.querySelector('.imagem-grande');

bandeiras.forEach(bandeira => {
    bandeira.addEventListener('click', () => {
        imagemGrande.src = bandeira.src;
        imagemGrande.style.display = 'block';
    });
});

// Inserir a data atual no rodapé
const data = new Date();
document.getElementById('data').textContent = data.toLocaleDateString();