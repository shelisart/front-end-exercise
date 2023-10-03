//Rest & Spread operator

//tanpa rest parameter
// const penjumlahanArray = (a, b, c) => {
//     const array = [a,b,c];
//     let total = 0;
//     array.forEach((item) => {
//         total += item;
//     });
//     console.log(total)
// };
// penjumlahanArray(1,2,3);

//rest parameter
// const penjumlahanArray = (...params) => {
//     let total = 0;
//     params.forEach((item) => {
//         total += item;
//     });
//     console.log(total);
// };
// penjumlahanArray(1,2,3,4,5,6,7,8,9,10);

// //spread operator

// let array1 = [1,2,3,4,5];
// console.log(...array1)

// // 1. duplilkasi array
// let array2 = [...array1];
// console.log(array2);
// array1.push(6);
// console.log(`array 1 = ${array1}`);
// console.log(`array 2 = ${array2}`);

//2. menggabungkan array
let array1 = [1,2,3]
let array2 = [5,6,7]
let array3 = [8,9,10]
let combineArray5 = array1.concat(4, array2, array3);
console.log(combineArray5);

let combineArray6 = [...array1, 4,...array2,...array3];
console.log(combineArray6)

//pada objek
let wonwoo = {
    fullName: "Jeon Wonwoo",
    line: "96",
    group: "Seventeen"
};
//duplikasi objek
let member = {...wonwoo};
wonwoo = {...wonwoo, position: "rapper"};
console.log(wonwoo);

//menggabungkan objek
let obj1 = {a: 1, b: 2}
let obj2 = {c: 3, d: 4};
combineObj = {...obj1, ...obj2};

//Destructuring

let buah = ['mangga','pisang','anggur'];
let [, buah2,] = buah
console.log(buah2);

let orang = {
    nama: "mingyu",
    umur: 26,
    sudahMenikah:"belum hehe"
};
let {nama,umur,sudahMenikah} = orang;
console.log(nama, umur, sudahMenikah);
