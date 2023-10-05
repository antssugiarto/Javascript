const body = document.querySelector("body");

const bUbah = document.querySelector("#b-ubah");

const bAcak = document.createElement("button");
const teksBA = document.createTextNode("Acak warna");
bAcak.appendChild(teksBA);
bAcak.setAttribute("id", "b-acak")
bUbah.after(bAcak);

bAcak.addEventListener("click", function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    
    body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
});

const sMerah = document.querySelector("input[name=sMerah]");
sMerah.addEventListener("input", function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    body.style.backgroundColor = "rgb("+r+","+g+","+g+")";
})

const sHijau = document.querySelector("input[name=sHijau]");
sHijau.addEventListener("input", function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    body.style.backgroundColor = "rgb("+r+","+g+","+g+")";
})

const sBiru = document.querySelector("input[name=sBiru]");
sBiru.addEventListener("input", function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
})