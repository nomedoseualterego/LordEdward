// Banco de dados com 200+ opções para cada categoria (exemplo reduzido)
const nomes = {
    ingles: {
        titulos: ["Sir", "Lord", "Baron", "Duke", "Earl", "Viscount", "Marquess", "Baronet"],
        primeirosNomes: ["Edward", "Algernon", "Bartholomew", "Reginald", "Percival"],
        // ... (complete com 200+ opções)
    },
    // ... (outras nacionalidades)
};

function rand(max) {
    return Math.floor(Math.random() * max);
}

function gerarNome() {
    const nacionalidade = document.getElementById("nacionalidade").value;
    const dados = nomes[nacionalidade];
    
    let nomeGerado = [
        dados.titulos[rand(dados.titulos.length)],
        dados.primeirosNomes[rand(dados.primeirosNomes.length)],
        // ... (complete com todas as partes)
    ].join(" ");

    document.getElementById("resultado").innerHTML = nomeGerado;
    document.getElementById("copiar").style.display = "inline-block";
    
    // Prepara certificado
    document.getElementById("textoCertificado").innerHTML = 
        `Certificamos que <strong>${document.getElementById("nomeReal").value}</strong> é, na verdade, <strong>${nomeGerado}</strong>, legítimo herdeiro de títulos nobres.`;
    document.getElementById("certificado").style.display = "block";
}

function copiarNome() {
    navigator.clipboard.writeText(document.getElementById("resultado").innerText);
    alert("Nome copiado!");
}

function baixarCertificado() {
    // Lógica para gerar imagem do certificado (usando html2canvas)
    alert("Certificado baixado!");
}
