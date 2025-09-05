document.getElementById('imgBtn').onclick = function() {
    document.getElementById('modal').style.display = 'flex';
    startCountdown();
};
document.getElementById('close-btn').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};

function startCountdown() {
    const endDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
    updateCountdown(endDate);
    if (window.countdownInterval) clearInterval(window.countdownInterval);
    window.countdownInterval = setInterval(() => updateCountdown(endDate), 1000);
}

function updateCountdown(endDate) {
    const now = new Date();
    const diff = endDate - now;
    if (diff <= 0) {
        document.getElementById('countdown').textContent = "¡El tiempo ha terminado!";
        clearInterval(window.countdownInterval);
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById('countdown').textContent =
        `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;

}


