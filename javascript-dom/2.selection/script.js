// getElementById
const judul = document.getElementById("judul");
judul.innerHTML = "Heading"
judul.style.backgroundColor = "#ccc";
judul.style.color = "white";

// getElementsByTagName
const p = document.getElementsByTagName("p");
for (var i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "lightblue";
};

// getElementsByClassName
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah lewat javascript";

// querySelector() [Hanya mengembalikan elemen pertama jika elemennya banyak]
const p4 = document.querySelector("#b p");
p4.style.backgroundColor = "lightgreen";

// querySelectorAll() [Mengembalikan semua elemen]
const li = document.querySelectorAll("li");
for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = "orange";
};

// Ubah root node
const sectionA = document.getElementById("a");
const a = sectionA.querySelector("a");
a.style.backgroundColor = "pink";