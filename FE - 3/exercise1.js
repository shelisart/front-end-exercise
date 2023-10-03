//Buatlah fungsi yang menerima 1 input angka
//dan mengembalikan string apakah angka yang dimasukkan 
//adalah bilangan ganjil atau genap

function cekBilangan(angka){
    if (angka % 2 == 0){
        console.log(angka + " adalah bilangan genap");
    } else {
        console.log(angka + " adalah bilangan ganjil");
    }
    return angka;
}
let output = cekBilangan(97)