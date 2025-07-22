
function iniciarSimulacao() {
    const nome = document.getElementById('nome').value;
    if (!nome) {
        alert('Digite seu nome para continuar.');
        return;
    }
    localStorage.setItem('participante_nome', nome);
    document.getElementById('fase1').classList.remove('ativa');
    document.getElementById('fase2').classList.add('ativa');
    iniciarTimer(5);
}

function iniciarTimer(minutos) {
    let tempo = minutos * 60;
    const timerEl = document.getElementById('timer');
    const intervalo = setInterval(() => {
        const min = Math.floor(tempo / 60);
        const seg = tempo % 60;
        timerEl.textContent = `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
        tempo--;
        if (tempo < 0) {
            clearInterval(intervalo);
            document.getElementById('fase2').classList.remove('ativa');
            document.getElementById('fase3').classList.add('ativa');
        }
    }, 1000);
}

function resetarSimulacao() {
    if (confirm("Tem certeza que deseja reiniciar? Todos os dados serão apagados.")) {
        localStorage.clear();
        location.reload();
    }
}

document.getElementById('darkModeToggle').onclick = () => {
    document.body.classList.toggle('dark-mode');
};
