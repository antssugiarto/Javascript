/*
DOM Tree

    Tipe node :
        - Element (Node khusus untuk tag html)
        - Attribute (Node khusus atribut html)
        - Text (Node khusus konten html)
        - Document

    Istilah :
        - Node : Simpul dalam DOM tree
        - NodeList : Kumpulan dari node dengan apapun tipenya. Sifatnya tidak live.
        - HTMLCollection : Kumpulan node yang tipenya elemen html. Sifatnya live.

    Struktur Hierarki DOM :
        - Root Node : Node utama dari semua node (document).
        - Parent Node : Node yang berada 1 tingkat di atas node lainnya (h1, p, div).
        - Child Node : Node yang berada 1 tingkat di bawah node lainnya.
        - Children : Child node yang bertipe elemen html.
        - Siblings : Child node yang memiliki parent yang sama.
        - Descendant : Child node dari child node.
*/