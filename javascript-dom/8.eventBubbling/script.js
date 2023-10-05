// const card = document.querySelector(".card");
// const closeBut = document.querySelector(".close");

// closeBut.addEventListener("click", function() {
//     card.style.display = "none";
// })

/*
const closeBut = document.querySelectorAll(".close");

for (let i = 0; i < closeBut.length; i++) {
    closeBut[i].addEventListener("click", function(e) {
        // closeBut[i].parentElement.style.display = "none";
        e.target.parentElement.style.display = "none";
    })
}

closeBut.forEach(function(el) {
    el.addEventListener("click", function(e) {
        e.target.parentElement.style.display = "none";
        e.preventDefault();
        e.stopPropagation();
    })
});

const cards = document.querySelectorAll(".card");
cards.forEach(function(card) {
    card.addEventListener("click", function(e) {

    })
})
*/

const container = document.querySelector(".container");
container.addEventListener("click", function(e) {
    if (e.target.className == "close") {
        e.target.parentElement.style.display = "none";
    }
})

