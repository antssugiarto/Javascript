// Element Manipulation Method 
// innerHTML
const judul = document.getElementById("judul");
judul.innerHTML = "<i>Tes innerHTML</i>";

// style.<propert>
judul.style.backgroundColor = "lightblue";

// getAttribute(), setAttribute(), removeAttribute()
judul.setAttribute("name", 'judul'); // Untuk menambahkan atribut
judul.getAttribute("name"); // Untuk menampilkan isi atribut
judul.removeAttribute("name"); // Untuk menghilangkan atribut

// classList.add() [Menambahkan], .remove() [Menghapus], .toggle() [Tambah jika tidak ada, hapus jika ada], .item() [Mengetahui isi class tertentu], .contains() [Mengecek apakah ada class tertentu], .replace() [Mengganti class tertentu]
judul.classList.add("label");
judul.classList.remove("label");
judul.classList.toggle("label");
judul.classList.toggle("label");
judul.classList.item(1);


// Node Manipulation Method
// document.createElement()
const pBaru = document.createElement("p");

// document.createTextNode()
const teksPB = document.createTextNode("Paragraf Baru");

// node.appendChild()
pBaru.appendChild(teksPB);
const secA = document.getElementById("a");
secA.appendChild(pBaru);

const liBaru = document.createElement("li");
const teksLB = document.createTextNode("Item 2 New");
liBaru.appendChild(teksLB);

// node.insertBefore()
const ul = document.querySelector("#b ul");
const li2 = document.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);

// parentNode.removeChild()
const link = document.querySelector("#a a");
secA.removeChild(link);

// parentNode.replaceChild()
const secB = document.getElementById("b");
const p4 = secB.querySelector("p");
const h2 = document.createElement("h2");
const teksH2 = document.createTextNode("Sub Heading");
h2.appendChild(teksH2);
secB.replaceChild(h2, p4);
