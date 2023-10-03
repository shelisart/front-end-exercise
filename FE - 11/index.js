//export import
// import  helloAyang, { fullName, numbers, wonwoo } from "./utils.js"
// import sayGreetings from "./sayGreetings.js"
// console.log(fullName);
// console.log(numbers);
// console.log(wonwoo);
// helloAyang();
// sayGreetings();


//ASYNCHRONOUS JS

//synchronous -> single thread -> blocking
// console.log('proses 1');
// console.log('proses 2');
// console.log('proses 3');

//ASYNCHRONOUS -> multi thread -> non blocking
//1. paralel with callback
//  setTimeout (() => {
//     console.log('proses 1');
//  }, 3000);
//  console.log('proses 2');
//  setTimeout (() => {
//     console.log('proses 3');
//  }, 4000);
//  console.log('proses 4');


//2. concurrent
// with callback
// setTimeout(() => {
//     console.log('proses 1');
//     setTimeout(() => {
//         console.log('proses 2');
//         setTimeout(() => {
//             console.log('proses 3');
//             setTimeout(() => {
//                 console.log('proses 4');
//             },3000);
//         },3000);
//     },3000);
// },3000);


//with promise
//buat promise
let condition = false
const newPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('berhasil');
    } else {
        reject('gagal');
    }
});

//pakai promise
//1. then - catch
// newPromise.then((result) => {
//     console.log(result);
// }).catch((error) => console.log(error));

//2. async - await(ES7)
//async await digunakan pada fungsi
const consumePromise = async () => {
    try {
        let result = await newPromise;
        console.log(result);
    } catch(error) {
        console.log(error);
    }
    
};
consumePromise();