//String Literal
//--------------

// let fullName = "John Doe";
// let age = 33;
// let address = "Manado";

// // Halo nama sata Jogn Doe, umur saya 33 tahun
// //dan saya tinggal di Manado

// let kalimat5 = "Halo nama saya " + fullName + 
// ", umur saya " + age + 
// " tahun dan saya tinggal di " + 
// address;

// console.log(kalimat5)

// let kalimat6 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
// console.log(kalimat6)


//arrow function
//----------------
// function sayGreetings5(nama) {
//     return `Hello ${nama}`;
// }
// console.log(sayGreetings5("John"));


// const sayGreetings6 = (nama) => {
//     return `Hello ${nama}`;
// }

// console.log(sayGreetings6('John'));


// Implicit return value
//-----------------------
// const sayGreetings6 = (nama) => `Hello ${nama}`;
// console.log(sayGreetings6('John'));

// // Pada IIFE

// (() => {
//     console.log("Hello");
// })();

// let output1 = (() => `Hello`)();
// console.log(output1);


// //Pada Callback
// let numbers = [1,2,3,4,5];
// let output2 = numbers.map((item) => item);
// console.log(output2);

//Default parameter

// const sayGreetings5 = (fullName, age) => {
//     if (fulName === undefined) {
//         fullName = "Shell Jeon";
//     }
//     if (age === undefined) {
//         age = 20;
//     }
//     console.log(`Hello ${fullName}`);
// };

// sayGreetings5();

const sayGreetings6 = (fullName = "Shell Jeon", age = 20) => {
    console.log(`Hello ${fullName}`);
};
sayGreetings6("Shell");
