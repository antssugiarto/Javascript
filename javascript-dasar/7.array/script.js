/*
Array
Note : Variabel yang menampung banyak nilai

    Struktur : <nama variabel> = ["<nilai 1>", "<nilai 2>"];
    Contoh : var hari = ["Senin", "Selasa"];

    Cara ganti data : <nama variabel>[<index>] = <nilai baru>;
    Contoh : hari[0] = "Minggu";

    Cara tambahkan data : <nama variabel>[<index baru>] = <nilai baru>
    Contoh : hari[2] = "Rabu";

    Cara hapus data : <nama variabel>[<index baru>] = undefined
    Contoh : hari[2] = undifined;

    Cara tampilkan data :
        - Bentuk array
            <nama variabel> (Semua data)
        - Bentuk data
            * Menampilkan satu satu
                <nama variabel>[<index>] (Satu data)
            * Menampilkan banyak 
                var hari = ["Senin", "Selasa", "Rabu"]
                for (var i = 0; i < hari.length; i++) {
                    console.log(hari[i]);
                }

    Array didalamnya bisa terdapat array lagi, aturannya sama seperti PHP.

    Method pada array :
        - .join("<karakter hubung>") [Mengubah array dari objek menjadi string]
            Contoh : var hari = ["Senin", "Selasa", "Rabu"];
                    console.log(hari.join(","));

        - .push("<nilai array>") [Menambahkan elemen array di belakang]
            Contoh : var hari = ["Senin", "Selasa", "Rabu"];
                    hari.push("Kamis");

        - .pop() [Menghapus elemen array di belakang]
            Contoh : var hari = ["Senin", "Selasa", "Rabu"];
                    hari.pop();

        - .unshift("<nilai array>") [Menambahkan elemen array di depan]
        - .shift() [Menghapus elemen array di depan]
        - .slice(<index awal>, <index akhir[index akhir tidak terambil]>) [Mengambil elemet array dan dijadikan array baru]
        - .splice(<index awal>, <hapus berapa>, <elemen baru>) [Menambahkan atau menghapus element array di tengah]
        - .forEach()  [Menampilkan array secara keseluruhan]
            Contoh : 
                var hari = ["Senin", "Selasa", "Rabu"];
                hari.forEach(function(e, i)) {
                    console.log((i+1) + ". " + e)
                }
        - .map() [Menampilkan array secara keseluruhan dan mengembalikan array]
            Contoh :
                var hari = ["Senin", "Selasa", "Rabu"];
                var newHari = hari.map(function(e, i)) {
                    return e
                }
        - .sort() [Mengurutkan array]

*/

var hari = ["Senin", "Selasa", "Rabu"];
hari.unshift("Minggu");
hari.shift();
console.log(hari);