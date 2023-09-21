/*
Function
Note : Refactoring adalah membuat kode menjadi lebih sederhana

1. Build-in function
    Note : Fungsi yang sudah disediakan javascript

    Contoh : 
        - String
            * parseInt() [Mengubah string jadi integer]
            * .charAt(<nilai>) ["Hello".charAt(2) = l]
            * .slice
            * .split
            
        - Math
            * Math.random() [Membuat angka random]
            * Math.round()
            * Math.ceil

2. User-defined function
    Note : Fungsi yang dibuat oleh user

    Struktur :
        - Deklarasi
            function <nama fungsi>(<argumen>) {
                <function body>;
                return;
            }
            Contoh :
                function jumlahBilangan (a,b) {
                    var total = a + b;
                    return total;
                }

        - Ekspresi
            var <nama fungsi> = function (<argumen>) {
                <function body>;
                return;
            }
            Contoh :
                var jumlahBilangan = function (a,b) {
                    var total = a + b;
                    return total;
                }

    Pemanggilan : 
        <nama fungsi>(<argumen>);
        Contoh : alert(jumlahBilangan(2,5));


    Variabel Scope
        1. Global
            Note : Variabel yang berada di objek window
            
            Contoh : var x;

        2. Lokal
            Note : Variabel yang berada di sebuah function (function scope)
            
            Contoh : function fungsi() {
                var x;
            }

        Lokal bisa akses global, global tidak bisa akses lokal. Jika ada variabel global dan lokal yang namanya sama, maka akan name conflict. Cara agar pada function bisa meng-akses variabel global yang namanya sama dengan lokal caranya tambahkan keyword window.<nama variabel>

    Rekursif
        Note : Menjalankan function yang didalamnya memanggil function itu sendiri

        Contoh :
            function printAngka(n) {
                if (n === 10) {
                    return;
                }

                console.log(n);
                return printAngka(n-1);
            }

            printAngka(10);
*/
