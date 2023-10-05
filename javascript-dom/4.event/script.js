// Event Handler
    // ** Inline HTML Attribute
const p1 = document.querySelector(".p1");
function ubahWarnaP1() {
    p1.style.backgroundColor = "pink";
}

function ubahWarnaP2() {
    p2.style.backgroundColor = "pink";
}

    // ** Element method
const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

// addEventListener()
const p3 = document.querySelector(".p3");
p3.addEventListener('click', function () {
    p3.style.backgroundColor = "pink";
});


