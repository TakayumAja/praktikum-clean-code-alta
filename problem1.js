/*
Soal 1
Kode berikut ini dituliskan tanpa mengikuti kebiasan-kebiasan penulisan yang disarknan 
a. Berapa banyak kekurangan dalam penulisan kode tersebut?
b. Bagian mana saja terjadi kekurangan tersebut?
c. Tulisakan alsan dari tiap kekurangan tersebut!
 */

// Code Problem 1
class user {
    var id;
    var username;
    var password;
}

class userservice{
    users[] users = [];
    users[] getallusers(){
        return users;
    }

    user getuserbyid(userid){
        return users.filter(userid);
    }
}

// Jawaban
// a. Banyak kekurangan dari code tersebut ada 6 
// b. dan c. Bagian yang salah dan juga alasannya

// Code salah
class user {
    var id;
    var username;
    var password;
}

// Kode tersebut salah karena untuk mendeklarasikan atribut pada sebuah class kita harus menggunakan method constructor dengan menginputkan parameter atribut apa saja ayang dibutuhkan dalam mendeklarasikan atribut dalam class tersebut.

// Code Benar

class user {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

// Code Salah

class userservice{
    users[] users = [];
}

// Kode tersebut juga salah karena untuk deklarasi atribut users dalam class harus menggunakan constructor. setelah itu untuk pembuatatan


// Code Benar

class userservice {
  constructor(users) {
    this.users = users;
  }

}

// Code Salah
users[] getallusers(){
    return users;
}

// Kode tersebut salah karena untuk pembuatan method didalam class kita seharusnya langsugn membuat nama method dan langsugn diikuti tanda kurung dan juga setelah itu dikasih kurung kurawal. kemuian didalam kurung kurawal dikasih operasi yang diinginkan oleh programmer. Dan juga terdapat kesalahan dalam return users yang seharusnya ada keyword this pada atribut users. 

// Code benar 
getallusers(){
    return this.users;
}

// Code Salah
user getuserbyid(userid){
    return users.filter(userid);
}

// Kode tersebut salah karena dalam pembuatan method dalam class salah dan juga kurangnya keyword this dalam mengakses atribut users.

// Code Benar
getuserbyid(userid) {
    return this.users.filter(userid);
}


// Code Perbaikan Problem Keselurahan

class user {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

class userservice {
  constructor(users) {
    this.users = users;
  }

  getallusers() {
    return this.user;
  }

  getuserbyid(userid) {
    return this.users.filter(userid);
  }
}
