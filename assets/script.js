// A carta correta será sempre a carta 3
let correctCard = 3;

// Função chamada ao clicar nas cartas
function revealCard(cardNumber) {
    const resultMessage = document.getElementById("resultMessage");
    const resetButton = document.getElementById("resetButton");
    const cards = document.querySelectorAll(".card");

    // Itera sobre todas as cartas para mudar o texto delas
    cards.forEach((card, index) => {
        const cardText = card.querySelector(".card-text");

        // Mostra a mensagem após o clique
        if (index + 1 === cardNumber) {
            if (cardNumber === correctCard) {
                cardText.textContent = "you got it right!";  // Carta correta
                cardText.style.color = "green";
            } else {
                cardText.textContent = "Hang tight";  // Carta errada
                cardText.style.color = "white";
            }

            // Torna o texto visível
            cardText.style.display = "block";
        } else {
            // Mantém o texto "NÃO ABRA AINDA" nas outras cartas
            cardText.textContent = "Do not open yet.";
            cardText.style.color = "red";
            cardText.style.display = "block";
        }

        // Desabilita a interação com as cartas
        card.style.pointerEvents = "none";
    });

    // Exibe a mensagem de resultado
    if (cardNumber === correctCard) {
        resultMessage.textContent = "Well done, you nailed it!";
        resultMessage.style.color = "green";

        // Redireciona para a página de celebração após 2 segundos
        setTimeout(() => {
            window.location.href = "celebracao.html"; // Redireciona para a página de celebração
        }, 2000); // Espera 2 segundos antes de redirecionar
    } else {
        resultMessage.textContent = "Maybe next time :(";
        resultMessage.style.color = "red";
    }

    // Exibe o botão de reiniciar
    resetButton.style.display = "inline-block";
}

// Função para reiniciar o jogo
function resetGame() {
    // Recalcula a carta correta (mas ela vai ser sempre 3)
    correctCard = 3;

    const resultMessage = document.getElementById("resultMessage");
    const resetButton = document.getElementById("resetButton");

    resultMessage.textContent = "";
    resultMessage.style.color = "";

    // Habilitar as cartas novamente e resetar o texto
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        const cardText = card.querySelector(".card-text");
        cardText.textContent = `Carta ${card.id.slice(-1)}`;  // Reseta a mensagem para "Carta 1", "Carta 2", etc.
        cardText.style.color = "white";  // Reseta a cor do texto
        cardText.style.display = "none";  // Esconde o texto novamente
        card.style.pointerEvents = "auto";  // Reabilita a interação
    });

    // Esconde o botão de reiniciar
    resetButton.style.display = "none";
}
