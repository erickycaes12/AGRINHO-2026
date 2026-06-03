function calcularImpacto() {

```
const quantidade = Number(
    document.getElementById("arvores").value
);

const resultado = document.getElementById("resultado");

if (quantidade <= 0 || isNaN(quantidade)) {
    resultado.innerHTML =
        "❌ Digite uma quantidade válida de árvores.";
    resultado.style.color = "red";
    return;
}

// Média aproximada: 22 kg de CO₂ por árvore ao ano
const co2 = quantidade * 22;

resultado.innerHTML =
    `🌳 ${quantidade} árvores podem absorver aproximadamente <strong>${co2} kg de CO₂ por ano</strong>!`;

resultado.style.color = "#1b5e20";
```

}
