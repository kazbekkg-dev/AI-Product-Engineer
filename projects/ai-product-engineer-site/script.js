const startButton = document.querySelector("#start-button");
const description = document.querySelector("#description");
const card = document.querySelector("main");
const statusText = document.querySelector("#status");

let isStarted = localStorage.getItem("journeyStarted") === "true";


function updateInterface() {
    if (isStarted) {
        startButton.textContent = "Путь начался!";
        description.textContent =
            "Первый интерактивный проект запущен.";
        statusText.textContent = "Статус: путь начат";

        card.classList.add("is-started");
    } else {
        startButton.textContent = "Начать путь";
        description.textContent =
            "Я учусь проектировать и создавать цифровые продукты с помощью программирования и AI-инструментов.";
        statusText.textContent = "Статус: путь не начат";

        card.classList.remove("is-started");
    }
}


startButton.addEventListener("click", function () {
    isStarted = !isStarted;
    localStorage.setItem(
        "journeyStarted",
        isStarted
    );
    updateInterface();
});
updateInterface();