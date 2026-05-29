function calcularEconomia() {
    // Pega o valor digitado pelo usuário
    const hectaresInput = document.getElementById('hectares').value;
    const resultadoDiv = document.getElementById('resultado');

    // CORRIGIDO: Agora valida se o campo está vazio OU se o número é menor ou igual a zero (<= 0)
    if (hectaresInput === '' || hectaresInput <= 0) {
        resultadoDiv.innerHTML = "❌ Por favor, insira um número válido de hectares.";
        resultadoDiv.className = "sucesso"; 
        resultadoDiv.style.color = "#c62828";
        resultadoDiv.style.backgroundColor = "#ffebee";
        resultadoDiv.style.border = "1px solid #ef5350";
        return;
    }

    // Média estimada de economia: 15.000 litros de água por hectare/mês com tecnologia irrigação eficiente
    const litrosEconomizados = hectaresInput * 15000;

    // Exibe o resultado na tela de forma amigável
    resultadoDiv.className = "sucesso";
    resultadoDiv.style.color = "#256029";
    resultadoDiv.style.backgroundColor = "#c8e6c9";
    resultadoDiv.style.border = "1px solid #81c784";
    resultadoDiv.innerHTML = `🌱 Ao utilizar tecnologia de irrigação inteligente em sua fazenda, você deixará de desperdiçar aproximadamente <strong>${litrosEconomizados.toLocaleString('pt-BR')} litros</strong> de água por mês!`;
}
