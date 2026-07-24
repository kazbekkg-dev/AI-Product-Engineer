const startButton = document.querySelector("#start-button");
const description = document.querySelector("#description");

startButton.addEventListener("click", function () {
    startButton.textContent = "Путь начался!";
    description.textContent = "Первый интерактивный проект запущен.";
});