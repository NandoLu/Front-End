// Seleciona os elementos
const tempoEl = document.getElementById('tempo');
const botaoStart = document.getElementById('botaoStart');
const botaoPause = document.getElementById('botaoPause');
const botaoReset = document.getElementById('botaoReset');

let segundos = 0;
let minutos = 0;
let intervalo = null;
let pausado = false;

function atualizarTempo() {
    const min = minutos.toString().padStart(2, '0');
    const seg = segundos.toString().padStart(2, '0');
    tempoEl.textContent = `${min}:${seg}`;
}

function iniciarCronometro() {
    if (intervalo) return; // Evita múltiplos intervalos

    intervalo = setInterval(() => {
        segundos++;

        if (segundos >= 60) {
            segundos = 0;
            minutos++;
        }

        atualizarTempo();
    }, 1000);
}

function pausarCronometro() {
    clearInterval(intervalo);
    intervalo = null;
}

function resetarCronometro() {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    minutos = 0;
    atualizarTempo();
}

// Eventos
botaoStart.addEventListener('click', iniciarCronometro);
botaoPause.addEventListener('click', pausarCronometro);
botaoReset.addEventListener('click', resetarCronometro);

// Atualiza visualmente ao carregar
atualizarTempo();
