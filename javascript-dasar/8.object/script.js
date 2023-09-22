/*
Object
    Note : - Object adalah array yang index-nya berbentuk string.
           - Variabel pada objek disebut properti, function pada objek disebut method.

    1. Object Literal
        Struktur :
            var <nama object> = {
                <nama properti> : <value>,
                <nama properti> : <value>;
            };
        Contoh :
            var mahasiswa = {
                nim : 123456789,
                nama : "Antonius";
            }

        Cara tambahkan properti :
            <nama object>.<nama properti> = <value>;
        Contoh :
            mahasiswa.nim = 123456789;

        Cara tampilkan properti :
            <nama object>.<nama properti>;
        Contoh :
            mahasiswa.nim;

    2. Function Declration
        Struktur :
            function <nama function> ( <nama properti> ) {
                var <nama object> = {};
                <nama object>.<nama properti> = <value>;
                return <nama object>;
            }
            var <nama object> = <nama function>(<value>);
        Contoh :
            function tambahMahasiswa ( nim, nama ) {
                var mahasiswa = {};
                mahasiswa.nim = nim;
                mahasiswa.nama = nama;
                return mahasiswa;
            }
            var antonius = tambahMahasiswa (123456789, "Antonius");
        
    3. Constructor
        Struktur :
            function <nama function(Huruf depan kapital)> ( <nama properti> ) {
                this.<nama properti> = <nama properti(value)>;
            }
            var <nama object> = new <nama function>(<value>);
        Contoh :
            function Tambah ( nim, nama ) {
                this.nim = nim;
                this.nama = nama;
            }
            var eunike = new Tambah(123456789, "Antonius");

    This
        Note : 1. This mengembalikan objek global (Function Declration)
               2. This mengembalikan objek yang bersangkutan (Object literal)
               3. This mengembalikan objek yang baru dibuat (Constructor)


*/ 