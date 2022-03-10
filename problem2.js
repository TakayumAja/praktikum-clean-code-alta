/* 
Soal 2 
Kode berikut ini ditulisakan tanpa mengikuti kebiasan-kebiasan penulisan yang disarankan. 
a. Ubahlah penulisan kode berikut menjadi lebih terbaca dan rapi!
*/

// Code Problem 2

class kendaraan{
    var totalroda = 0;
    var kecepatanperjam = 0;
}

class mobil extends kendaraan {
    void berjalan(){
        tambahkecepatan(10);
    }

    tambahkecepatan(var kecepatanbaru){
        kecepatanperjam = kecepatanperjam + kecepatanbaru;
    }
}

void main(){
    mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobilamban = new mobil();
    mobillamban.berjalan();
}


// JAWABAN

// Code Salah
class kendaraan{
    var totalroda = 0;
    var kecepatanperjam = 0;
}

// Kode tersebut salah karena untuk deklarisi awal atribut dalam class harus menggunakan method constructor.

// Code Salah
void berjalan(){
        tambahkecepatan(10);
    }

// Kode tersebut salah karena dalam pembuatan method dalam class tidak perlu diikuti keyword void.

// Code Salah
tambahkecepatan(var kecepatanbaru){
    kecepatanperjam = kecepatanperjam + kecepatanbaru;
}

// Kode terseub salah karena untuk pembuata argument /parameter dalam method tidak perlu mendeklarasikan dengan keyword var, akan tetapi langsung saja berikan nama argument/parameternya langsung. Dan kurangnya keyword this pada pada pengakseskan atribut kecepatanperjam


// Code Salah

void main(){
    mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobilamban = new mobil();
    mobillamban.berjalan();
}

// Kode tersebut salah karena untuk penggunaan method vodi dalam function main harus di ikuti keyword function setelah kata void kemudian di ikuti nama fungsi yang dibuat.


// Code Perbaikan Probelem 2 Keseluruhan

class kendaraan {
  constructor() {
    this.totalroda = 0;
    this.kecepatanperjam = 0;
  }
}

class mobil extends kendaraan {
  berjalan() {
    tambahkecepatan(10);
  }

  tambahkecepatan(kecepatanbaru) {
    this.kecepatanperjam = this.kecepatanperjam + kecepatanbaru;
  }
}

void function main() {
  mobilcepat = new mobil();
  mobilcepat.berjalan();
  mobilcepat.berjalan();
  mobilcepat.berjalan();

  mobilamban = new mobil();
  mobillamban.berjalan();
};
