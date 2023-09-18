/*
Control Flow

1. Pengulangan
    - for
        Struktur : for (<nilai awal>, <nilai akhir>, <increment/decrement>) {
                        <aksi pengulangan>;
                    };
        Contoh : for (var i = 1; i <= 10; i++) {
                    console.log(i);
                }; 

    - while
        Struktur : <nilai awal>;
                    while (<nilai akhir>) {
                        <aksi pengulangan>;
                        <increment/decrement>;
                    };
        Contoh : var i = 1;
                    while (i <= 10) {
                        console.log(i);
                        i++;
                    };

2. Pengkondisian
    - if, else if, else
        Struktur : <ekspresi>
                    if (<syarat 1>) {
                        <aksi jika benar 1>
                    } else if (<syarat 2>) {
                        <aksi jika benar 2>
                    } else {
                        <aksi jika salah>
                    };
        Contoh : var waktu = ;
                    if (waktu <= 10) {
                        console.log("Selamat pagi");
                    } else if (waktu <= 15) {
                        console.log("Selamat siang");
                    } else (waktu >= 15) {
                        console.log("Selamat sore");
                    }
    
    - switch
        Struktur : switch (<ekspresi>) {
                        case "<nilai 1>":
                            <aksi 1>
                            break;
                        case "<nilai 2>":
                            <aksi 2>
                            break;
                        default:
                            <aksi 3>
                    }
        Contoh : var angka = 1;
                switch (angka) {
                    case 1:
                        alert("Anda memasukan angka 1);
                        break;
                    case 2:
                        alert("Anda memasukan angka 2");
                        break;
                    default:
                        alert("Anda memasukan angka lebih dari 2");
                }

*/