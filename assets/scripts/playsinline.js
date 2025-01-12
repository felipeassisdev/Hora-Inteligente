//Script para fazer com que o video seja suportado em todos os navegadores
document.querySelector('.video-background').setAttribute('playsinline', '');

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`

    document.getElementById('time').textContent = timeString;

    const mensagem = document.getElementById('message');
    if (hours >= 6 && hours < 9) {
        mensagem.textContent = 'Bom dia! ☀️ O dia hoje está lindo, já levantou?';
    } else if (hours >= 9 && hours < 12) {
        mensagem.textContent = ' Não é mais de manhã, mas ainda é cedo! 🌤️ Bora pra cima!';
    } else if (hours >= 12 && hours < 14) {
        mensagem.textContent = 'Já está na hora do almoço, não acha? Vamos comer! 🍽️';
    } else if (hours >= 14 && hours < 15) {
        mensagem.textContent = 'Está na hora de voltar ao trabalho 🕒';
    } else if (hours >= 15 && hours < 18) {
        mensagem.textContent = "Já está de tarde, o dia está passando rápido! 🌥️";
    } else if (hours >= 18 && hours < 19) {
        mensagem.textContent = 'O dia já está acabando, já fez tudo o que tinha que fazer? 🌥️';
    } else if (hours >= 19 && hours < 21) {
        mensagem.textContent = 'Já está de noite 😢, passou rápido o dia não é mesmo?';
    } else if (hours >= 21 && hours < 24) {
        mensagem.textContent = 'É melhor ir dormir, está ficando tarde em! Boa noite! 🌙';
    } else if (hours >= 0 && hours < 1) {
        mensagem.textContent = 'Você ainda está acordado? Vai dormir por favor! 🌜';
    } else if (hours >= 1 && hours < 6) {
        mensagem.textContent = 'Está na hora de dormir, não acha? 🌛';
    }
}

setInterval(updateTime, 1000);
updateTime();