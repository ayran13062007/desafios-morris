JavaScript
function calcular() {
    const nome = document.getElementById('nome').value;
    const salarioBruto = parseFloat(document.getElementById('salario').value);
    const imposto = parseFloat(document.getElementById('imposto').value);

    const valorImposto = salarioBruto * (imposto / 100);
    const salarioLiquido = salarioBruto - valorImposto;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h2>Resultado</h2>
        <p>Nome: ${nome}</p>
        <p>Salário Bruto: R$ ${salarioBruto.toFixed(2)}</p>
        <p>Imposto ( ${imposto}% ): R$ ${valorImposto.toFixed(2)}</p>
        <p>Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</p>
    `;
}