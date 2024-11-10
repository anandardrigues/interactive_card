// Função para criar balões aleatórios
function createBalloon() {
    const balloonsContainer = document.getElementById("balloons-container");

    // Cria um novo elemento de balão
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    // Define a cor aleatória do balão
    const randomColor = getRandomColor();
    balloon.style.backgroundColor = randomColor;

    // Define a posição horizontal aleatória do balão
    const randomPosition = Math.random() * 100;
    balloon.style.left = `${randomPosition}%`;

    // Adiciona o balão ao container
    balloonsContainer.appendChild(balloon);

    // Remove o balão após ele "subir"
    setTimeout(() => {
        balloon.remove();
    }, 10000); // Remove o balão após 10 segundos (tempo de animação)
}

// Função para gerar uma cor aleatória
function getRandomColor() {
    const colors = ["#FF6347", "#32CD32", "#FFD700", "#1E90FF", "#FF1493"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Gera balões aleatórios a cada 300ms
setInterval(createBalloon, 300);
