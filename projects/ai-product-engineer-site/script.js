const startButton = document.querySelector("#start-button");
const description = document.querySelector("#description");
const card = document.querySelector("main");

let isStarted = false;

startButton.addEventListener("click", function () {
    if (isStarted) {
        startButton.textContent = "Начать путь";
        description.textContent =
            "Я учусь проектировать и создавать цифровые продукты с помощью программирования и AI-инструментов.";

        card.classList.remove("is-started");
        isStarted = false;
    } else {
        startButton.textContent = "Путь начался!";
        description.textContent =
            "Первый интерактивный проект запущен.";

        card.classList.add("is-started");
        isStarted = true;
    }
});