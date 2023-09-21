var player = prompt("Pilih : gunting, batu, kertas");

var com = Math.random();
if (com < 0.34) {
    com = "gunting";
} else if (com >= 0.34 && com < 0.68) {
    com = "batu";
} else {
    com = "kertas";
}

var hasil;
if (player == com) {
    hasil = "imbang";
} else if (player == "gunting") {
    hasil = (com == "batu") ? "kalah" : "menang";
} else if (player == "batu") {
    hasil = (com == "gunting") ? "menang" : "kalah";
} else if (player == "kertas") {
    hasil = (com == "gunting") ? "kalah" : "menang";
} else {
    hasil = "memilih pilihan yang salah"
}

alert('Player memilih : ' + player + ', computer memilih : ' + com + '\nMaka hasilnya adalah : player ' + hasil);