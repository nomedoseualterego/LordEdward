const nomes = {
    // INGLÊS
    ingles: {
        masculino: {
            parte1: ["Edward", "Algernon", "Bartholomew", "Reginald", "Percival", "Archibald", "Clarence", "Humphrey", "Godfrey", "Horatio"],
            parte2: ["Lancelot", "Montgomery", "Fitzwilliam", "Thaddeus", "Winston", "Beauregard", "Chesterfield", "Dillingham", "Englebert", "Fitzhugh"],
            // ... (complete com parte3 a parte8)
        },
        feminino: {
            parte1: ["Eleanor", "Gwendolyn", "Beatrice", "Victoria", "Arabella", "Cecily", "Daphne", "Henrietta", "Isolde", "Lavinia"],
            parte2: ["Rosamund", "Guinevere", "Cordelia", "Priscilla", "Seraphina", "Theodora", "Wilhelmina", "Evangeline", "Genevieve", "Lysandra"],
            // ... (complete com parte3 a parte8)
        }
    },

    // ESPANHOL (exemplo completo)
    espanhol: {
        masculino: {
            parte1: ["Alfonso", "Rodrigo", "Carlos", "Fernando", "Miguel", "Diego", "Santiago", "Javier", "Manuel", "Antonio"],
            parte2: ["del Toro", "de la Vega", "y Goya", "y Cervantes", "de Cervantes", "de Aragón", "de Castilla", "y Mendoza", "de León", "de Granada"],
            parte3: ["Martín", "José", "Juan", "Pedro", "Luis", "Pablo", "Andrés", "Gabriel", "Raúl", "Héctor"],
            parte4: ["de Sevilla", "de Barcelona", "de Madrid", "de Valencia", "de Toledo", "de Burgos", "de Córdoba", "de Salamanca", "de Zaragoza", "de Málaga"],
            parte5: ["y Figueroa", "y Guzmán", "y Álvarez", "y Ortega", "y Herrera", "y Vargas", "y Rojas", "y Paredes", "y Cabrera", "y Molina"],
            parte6: ["del Río", "de la Cruz", "de las Heras", "de los Reyes", "de la Fuente", "del Monte", "de la Torre", "del Valle", "de la Rosa", "del Sol"],
            parte7: ["Velázquez", "García", "Fernández", "González", "Rodríguez", "López", "Martínez", "Sánchez", "Pérez", "Gómez"],
            parte8: ["de la Iglesia", "del Castillo", "de la Calle", "de la Puerta", "del Mar", "de la Montaña", "del Campo", "de la Luna", "del Cielo", "de la Noche"]
        },
        feminino: {
            parte1: ["Isabel", "Leonor", "Beatriz", "Juana", "Catalina", "Ana", "María", "Teresa", "Carmen", "Dolores"],
            parte2: ["de la Vega", "y Cervantes", "de Aragón", "de Castilla", "y Mendoza", "de León", "de Granada", "de Valencia", "de Toledo", "de Burgos"],
            parte3: ["Ana", "Lucía", "Elena", "Sofía", "Valeria", "Clara", "Adriana", "Silvia", "Rosa", "Inés"],
            parte4: ["de Sevilla", "de Barcelona", "de Madrid", "de Valencia", "de Toledo", "de Burgos", "de Córdoba", "de Salamanca", "de Zaragoza", "de Málaga"],
            parte5: ["y Figueroa", "y Guzmán", "y Álvarez", "y Ortega", "y Herrera", "y Vargas", "y Rojas", "y Paredes", "y Cabrera", "y Molina"],
            parte6: ["del Río", "de la Cruz", "de las Heras", "de los Reyes", "de la Fuente", "del Monte", "de la Torre", "del Valle", "de la Rosa", "del Sol"],
            parte7: ["García", "Fernández", "González", "Rodríguez", "López", "Martínez", "Sánchez", "Pérez", "Gómez", "Díaz"],
            parte8: ["de la Iglesia", "del Castillo", "de la Calle", "de la Puerta", "del Mar", "de la Montaña", "del Campo", "de la Luna", "del Cielo", "de la Noche"]
        }
    },

    // JAPONÊS (exemplo)
    japones: {
        masculino: {
            parte1: ["Haruto", "Ren", "Ryoma", "Hiroshi", "Takashi", "Kaito", "Daiki", "Sora", "Yuto", "Riku"],
            parte2: ["Takeda", "Shimazu", "Kuroda", "Date", "Oda", "Tokugawa", "Mori", "Uesugi", "Sanada", "Hattori"],
            // ... (complete com parte3 a parte8)
        },
        feminino: {
            parte1: ["Sakura", "Aiko", "Yukiko", "Hana", "Naoko", "Miyuki", "Emi", "Yui", "Rina", "Mei"],
            parte2: ["Fujiwara", "Takeda", "Shimazu", "Kuroda", "Date", "Tokugawa", "Mori", "Uesugi", "Sanada", "Hattori"],
            // ... (complete com parte3 a parte8)
        }
    }
    // [Adicione outras nacionalidades seguindo o padrão]
};

function rand(max) {
    return Math.floor(Math.random() * max);
}

function gerarNome() {
    const nacionalidade = document.getElementById("nacionalidade").value;
    const genero = document.getElementById("genero").value;
    
    // Usa 'neutro' se não houver dados específicos
    const generoSelecionado = nomes[nacionalidade][genero] || nomes[nacionalidade].masculino;
    
    let nomeCompleto = [];
    for (let i = 1; i <= 8; i++) {
        const parte = generoSelecionado[`parte${i}`];
        nomeCompleto.push(parte[rand(parte.length)]);
    }

    const resultadoHTML = `
        <h3>Seu Nome Aristocrático (${genero}):</h3>
        ${nomeCompleto.map((parte, index) => `
            <span class="parte-nome">Parte ${index + 1}:</span> ${parte}
        `).join('')}
        <h3 style="margin-top:20px;">Forma Oficial:</h3>
        <p>"${nomeCompleto.join(' ')}"</p>
    `;

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
