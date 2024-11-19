function calcular() {
    // Obter valores dos campos
    const nome = document.getElementById('nome').value;
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);

    // Calcular imposto (ajuste o percentual conforme necessário)
    const imposto = salarioBruto * 0.2; // 20% de imposto, por exemplo

    // Calcular salário líquido
    const salarioLiquido = salarioBruto - imposto;

    // Adicionar linha à tabela
    const tabela = document.getElementById('corpoTabela');
    const novaLinha = tabela.insertRow();
    const celulaNome = novaLinha.insertCell();
    const celulaSalarioBruto = novaLinha.insertCell();
    const celulaImposto = novaLinha.insertCell();
    const celulaSalarioLiquido = novaLinha.insertCell();

    celulaNome.textContent = nome;
    celulaSalarioBruto.textContent = `R$ ${salarioBruto.toFixed(2)}`;
    celulaImposto.textContent = `R$ ${imposto.toFixed(2)}`;
    celulaSalarioLiquido.textContent = `R$ ${salarioLiquido.toFixed(2)}`;
}