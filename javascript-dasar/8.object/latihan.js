function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.tambahPenumpang = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang
    }

    this.hapusPenumpang = function(namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert("Angkot masih kosong");
            return false;
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot("Budi", ["Meteseh", "Sambiroto"], [], 0);
var angkot2 = new Angkot("Untung", ["Sompok", "Dr. Cipto"], [], 0);