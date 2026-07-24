const startButton = document.querySelector("#start-button");
const description = document.querySelector("#description");

let isStarted = false;

startButton.addEventListener("click", function () {
    if (isStarted) {
        startButton.textContent = "Начать путь";
        description.textContent =
            "Я учусь проектировать и создавать цифровые продукты с помощью программирования и AI-инструментов.";

        isStarted = false;
    } else {
        startButton.textContent = "Путь начался!";
        description.textContent =
            "Первый интерактивный проект запущен.";

        isStarted = true;
    }
});