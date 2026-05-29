function calcularEconomia() {
    // Pega o valor digitado pelo usuário
    const hectaresInput = document.getElementById('hectares').value;
    const resultadoDiv = document.getElementById('resultado');

    // Valida se o usuário digitou um número válido
    if (hectaresInput === '' || hectaresInput <= 0) {
        resultadoDiv.innerHTML = "❌ Por favor, insira um número válido de hectares.";
        resultadoDiv.className = "sucesso"; // Reaproveita o estilo para erro simples
        resultadoDiv.style.color = "#c62828";
        resultadoDiv.style.backgroundColor = "#ffebee";
        return;
    }

    // Média estimada de economia: 15.000 litros de água por hectare/mês com tecnologia irrigação eficiente
    const litrosEconomizados = hectaresInput * 15000;

    // Exibe o resultado na tela de forma amigável
    resultadoDiv.className = "sucesso";
    resultadoDiv.style.color = "#256029";
    resultadoDiv.style.backgroundColor = "#c8e6c9";
    resultadoDiv.innerHTML = `🌱 Ao utilizar tecnologia de irrigação inteligente em sua fazenda, você deixará de desperdiçar aproximadamente <strong>${litrosEconomizados.toLocaleString('pt-BR')} litros</strong> de água por mês!`;
}