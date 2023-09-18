/*
Tipe Data

1. Number
    Note : Number tidak memilii bilangan bulat (integer)
    
    # Bilangan
        - Bilangan tanpa desimal
            Bisa mencetak bilangan tanpa desimal karena sebenarnya bilangan tersebut desimal tapi sangat kecil dan jika digitnya lebih dari 15, akan ada perubahan.
            Contoh: 10, 100, 1200
        
        - Bilangan dengan desimal
            Bilangan desimal di number ini kurang akurat.
            Contoh: 1.5, 20.6, 125.5

        - Bilangan eksponen
            Contoh : 123e5 (12300000), 123-e5 (0,00123)
        
        - Bilangan negatif

        - Bilangan spesial
            * Infinity (2/0 = Infinity)
            * -Infinity (-2/0 = -Infinity)
            * NaN (2/"Hello" = NaN)
            
    # Operator
        - Operator binary (Operator yang butuh 2 operand)
            * Aritmatika
                +, -, *, /, %
            * Penugasan
                =, +=, -=, *=, /=, %=
            * Perbandingan
                <, >, <=, >=, ==, !=, ===, !==
            * Logika
                &&, ||, !
            * String
                + ("Selamat" + "Datang")
        
        - Operator tenary (Operator yang butuh 3 operand)
            * Kondisional
                (kondisi) ? benar : salah
                Contoh : (x % 2 == 0) ? "genap" : "ganjil"

        - Operator unary (Operator yang butuh 1 operand)
            * Typeof
                typeof(operand) [Untuk mengetahui tipe data]
                Contoh : typeof("Hello") = "String"

2. String
    Note : tipe data karakter yang diapit oleh ".." atau '..'

    Escape charater digunakan jika ada karakter yang sama oleh pembungkus string
        - \' = '
        - \" = "
        - \\ = \
        - \n = baris baru
        - \t = tab
        - \b = backspace

    .length digunakan untuk menghitung jumlah karakter.
    Contoh "Hello".length = 5

3. Boolean
    Note : Boolean value hanya memiliki nilai true dan false.

    Boolean(nilai)
    Contoh : Boolean (1<4) = true

4. Object
5. Function
6. Undifined
*/