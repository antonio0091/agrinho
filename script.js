// Variáveis do sistema
let xp = 0;
let nivel = 1;
const XP_PARA_SUBIR = 100; // Meta fixa de 100 XP por nível

function ganharXP(valor, texto) {
    xp += valor;

    // Lógica para subir de nível
    if (xp >= XP_PARA_SUBIR) {
        nivel++;
        xp = xp - XP_PARA_SUBIR; // Sobra de XP vai para o próximo nível
        
        // Alerta especial de nível
        alert("✨ PARABÉNS! ✨\nVocê evoluiu para o Nível " + nivel + "!\nSua fazenda está cada vez mais sustentável.");
    }

    atualizarTela(texto);
}

function atualizarTela(texto) {
    // Atualiza os textos
    document.getElementById('xp-atual').innerText = xp;
    document.getElementById('level').innerText = nivel;
    document.getElementById('xp-limite').innerText = XP_PARA_SUBIR;
    document.getElementById('mensagem').innerText = texto;

    // Atualiza a barra visual (porcentagem)
    const porcentagem = (xp / XP_PARA_SUBIR) * 100;
    document.getElementById('xp-bar').style.width = porcentagem + "%";
}

// Inicia o site com os valores corretos
atualizarTela("Bem-vindo ao futuro do campo!");
