let tempoRestante = 1500; // 25 minutos em segundos
        let intervalId;

        const tempoElement = document.getElementById('tempo');
        const botaoStart = document.getElementById('botaoStart');
        const botaoPause = document.getElementById('botaoPause');
        const botaoReset = document.getElementById('botaoReset');

        function atualizarTempo() {
            const minutos = Math.floor(tempoRestante / 60);
            const segundos = tempoRestante % 60;
            tempoElement.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
        }

        botaoStart.addEventListener('click', () => {
            if (!intervalId) {
                intervalId = setInterval( () => {
                    tempoRestante--;
                    if (tempoRestante <= 0) {
                        clearInterval(intervalId);
                        intervalId = null;
                        alert("Tempo esgotado!"); // Notificação de exemplo
                        //Adicionar código para o próximo Pomodoro ou pausa aqui
                    }
                    atualizarTempo();
                }, 1000);
            }
        });

        botaoPause.addEventListener('click', () => {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        });

        botaoReset.addEventListener('click', () => {
            clearInterval(intervalId);
            intervalId = null;
            tempoRestante = 1500;
            atualizarTempo();
        });