let averageTime = 0;
let attempts = 0;
let isGreen = false;
let timeoutId; // Adicionando variável para armazenar o ID do timeout

function getRandomTime() {
    return Math.floor(Math.random() * 3000) + 1000;
}

function squareRed() {
    const squareElement = document.querySelector('.square');
    isGreen = false;

    squareElement.style.backgroundColor = 'red';
    squareElement.innerHTML = '<h1><i class="fa-solid fa-ellipsis"></i></h1><p>Aguardando...</p>';

    // Configura um timeout para chamar a função squareGreen() e verifica se o quadrado ainda está vermelho antes disso
    timeoutId = setTimeout(() => {
        squareGreen();
    }, getRandomTime());

    // Torna o quadrado vermelho clicável
    squareElement.onclick = function () {
        clearTimeout(timeoutId); // Cancela o timeout para evitar chamada redundante de squareGreen
        toEarly();
        makeSquareClickable(); // Torna o quadrado clicável novamente
    };
}

function squareGreen() {
    const squareElement = document.querySelector('.square');
    const startTime = new Date().getTime();

    isGreen = true;
    squareElement.style.backgroundColor = 'green';
    squareElement.innerHTML = '<p>Clicar agora</p>';

    squareElement.onclick = function () {
        if (isGreen) {
            const endTime = new Date().getTime();
            const reactionTime = endTime - startTime;

            averageTime += reactionTime;

            squareElement.style.backgroundColor = 'rgb(96, 96, 255)';
            squareElement.innerHTML = `
            <h1><i class="far fa-clock"></i></h1>
            <h1>${reactionTime}ms</h1>
            <h3>Clique para continuar</h3>`;

            attempts++;

            if (attempts < 5) {
                makeSquareClickable();
            } else {
                showResult();
                makeSquareClickable();
                resetVariables();
            }
        } else {
            // Ignora o clique se o quadrado não estiver verde
        }
    };
}

function toEarly() {
    const squareElement = document.querySelector('.square');
    squareElement.innerHTML = '<p>Muito cedo, tente novamente!</p>';
    squareElement.style.backgroundColor = 'rgb(96, 96, 255)';
}

function showResult() {
    const squareElement = document.querySelector('.square');

    squareElement.style.backgroundColor = 'rgb(96, 96, 255)';
    squareElement.innerHTML = `
    <h1><i class="fas fa-bolt"></i></h1>
    <h3>Your Reaction Time Was:</h3>
    <h1>~${averageTime / attempts}ms</p>`;
}

function makeSquareClickable() {
    const squareElement = document.querySelector('.square');

    squareElement.onclick = function () {
        squareRed();
    };
}

function resetVariables() {
    averageTime = 0;
    attempts = 0;
}

function initialize() {
    makeSquareClickable();
}

document.addEventListener('DOMContentLoaded', initialize);
