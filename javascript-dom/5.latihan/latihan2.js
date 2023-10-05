function getBotChoice() {
    const bot = Math.random();
    if (bot < 0.34) return "gunting";
    if (bot >= 0.34 && bot < 0.68) return "batu";
    return "kertas";
}

function getResult(bot, player) {
    if (player == bot) return "SERI!";
    if (player == "gunting") return (bot == "batu") ? "KALAH!" : "MENANG!";
    if (player == "batu") return (bot == "gunting") ? "MENANG!" : "KALAH!";
    if (player == "kertas") return (bot == "gunting") ? "KALAH!" : "MENANG!";
}

function putar() {
    const botImg = document.querySelector(".bot-img");
    const img = ["gunting", "batu", "kertas"]
    let i = 0;
    const timeStart = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - timeStart > 1000) {
            clearInterval;
            return;
        }
        botImg.setAttribute("src", "img/"+img[i++]+".png");
        if (i == img.length) i = 0;
    }, 100)
}

const choice = document.querySelectorAll(".player-img img");
choice.forEach(function(e) {
    e.addEventListener("click", function() {
        const botChoice = getBotChoice();
        const playerChoice = e.className;
        const result = getResult(botChoice, playerChoice);

        putar();
        setTimeout(function() {
            const botImg = document.querySelector(".bot-img");
            botImg.setAttribute("src", "img/"+botChoice+".png")
    
            const info = document.querySelector(".info-area");
            info.innerHTML = result;
        }, 1000)
    })
})


