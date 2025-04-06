const nomes = {
    ingles: {
        parte1: ["Edward", "Algernon", "Bartholomew", "Reginald", "Percival", "Archibald", "Clarence", "Humphrey", "Godfrey", "Horatio"],
        parte2: ["Lancelot", "Montgomery", "Fitzwilliam", "Thaddeus", "Winston", "Beauregard", "Chesterfield", "Dillingham", "Englebert", "Fitzhugh"],
        parte3: ["Dodd", "Wickfield", "Baskerville", "Huntington", "Pemberley", "Chatsworth", "Worthington", "Fitzherbert", "Kensington", "Lancaster"],
        parte4: ["Canterbury", "Caterham", "Blackwood", "Ravenshire", "Ashworth", "Cumberland", "Derbyshire", "Ellington", "Fairfax", "Gillingham"],
        parte5: ["Hargreaves", "Inverness", "Jarndyce", "Kettering", "Lonsdale", "Middleton", "Norris", "Osborne", "Pomfret", "Quarrington"],
        parte6: ["Ramsbottom", "Stanhope", "Thornton", "Underwood", "Villiers", "Wentworth", "Yarborough", "Zouche", "Ainsworth", "Brocklehurst"],
        parte7: ["Cholmondeley", "Davenport", "Egremont", "Fotheringay", "Grosvenor", "Haversham", "Isherwood", "Jermyn", "Kingsley", "Loxley"],
        parte8: ["Molyneux", "Netherfield", "Oglethorpe", "Ponsonby", "Quiller-Couch", "Radcliffe", "Stratton", "Templeton", "Ufford", "Vavasour"]
    },
    frances: {
        parte1: ["Gaspard", "Lucien", "Thibault", "Chantal", "Élodie", "Jean-Hugues", "François", "Margaux", "Sébastien", "Amélie"],
        parte2: ["Jean", "Marie", "Pierre", "Antoinette", "François", "Anne", "Philippe", "Isabelle", "Louis", "Sophie"],
        parte3: ["de La Rochefoucauld", "du Montclair", "Beausoleil", "de Saint-Exupéry", "de La Fontaine", "du Pré", "de Saint-Germain", "de Beauvoir", "de La Tour", "du Bois"],
        parte4: ["de Provence", "de Champagne", "de Versailles", "de Bourgogne", "de Normandie", "de Bretagne", "de Lorraine", "de Picardie", "de Alsace", "de Aquitaine"],
        parte5: ["et du Soleil", "et de la Lune", "et des Étoiles", "et du Vent", "et de la Mer", "et des Forêts", "et des Montagnes", "et des Rivières", "et des Vallées", "et des Plaines"],
        parte6: ["Leclerc", "Dubois", "Leroy", "Moreau", "Girard", "Fournier", "Mercier", "Rousseau", "Lefebvre", "Dumont"],
        parte7: ["Fontaine", "Beaumont", "Champagne", "Rochefort", "Villette", "Maréchal", "Chevalier", "Leroux", "Marchand", "Noël"],
        parte8: ["d'Avignon", "de Lyon", "de Marseille", "de Toulouse", "de Bordeaux", "de Lille", "de Nantes", "de Strasbourg", "de Nice", "de Cannes"]
    },
    // [Adicione as outras nacionalidades seguindo o mesmo padrão]
};

function rand(max) {
    return Math.floor(Math.random() * max);
}

function gerarNome() {
    const nacionalidade = document.getElementById("nacionalidade").value;
    const dados = nomes[nacionalidade];
    
    let nomeCompleto = [];
    for (let i = 1; i <= 8; i++) {
        const parte = dados[`parte${i}`];
        nomeCompleto.push(parte[rand(parte.length)]);
    }

    const resultadoHTML = `
        <h3>Seu Nome Aristocrático:</h3>
        ${nomeCompleto.map((parte, index) => `
            <span class="parte-nome">Parte ${index + 1}:</span> ${parte}
        `).join('')}
        <h3 style="margin-top:20px;">Forma Oficial:</h3>
        <p>"${nomeCompleto.join(' ')}"</p>
    `;

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
