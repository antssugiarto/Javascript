const cdImg = document.querySelector(".cd-img");
const cThumb = document.querySelector(".c-thumb");
const ctItem = document.querySelectorAll(".ct-item")

cThumb.addEventListener("click", function(e) {
    if (e.target.className == "ct-item") {
        const imgSrc = e.target.src;

        ctItem.forEach(function(item) {
            if (item.classList.contains("active")) item.classList.remove("active");
        })
        e.target.classList.add("active");

        cdImg.setAttribute("src", imgSrc);
        cdImg.classList.add("fade");
        setTimeout(function() {
            cdImg.classList.remove("fade");
        }, 500)
    }
})