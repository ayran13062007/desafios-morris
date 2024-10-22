// script.js
function calcular() {
    const divida = parseFloat(document.getElementById('divida').value);
    const juros = parseFloat(document.getElementById('juros').value) / 100;
    const valorTotal = divida * (1 + juros);
    document.getElementById('resultado').textContent = `Valor total a ser pago: R$ ${valorTotal.toFixed(2)}`;
}