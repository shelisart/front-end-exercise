// //array
// const hhteam = ['wonwoo','mingyu','scoups','vernon']; //array string
// const line = [96, 97, 95, 98]; //array int
 const wonwoo = ['wonwoo','jeon', 96]; //tipe data berbeda dalam satu array

// console.log(hhteam);
// console.log(line);
// console.log(wonwoo);

// //indexing
// console.log(hhteam[2]); //lihat index ke-2 dari array
// hhteam[2] = "seungcheol"; //mengganti nilai dari array index ke-2
// console.log(hhteam);
// //length
// console.log(hhteam.length);
// console.log(hhteam[hhteam.length-1]);
// //loop
// for (let i = 0; i < hhteam.length; i++) {
//     console.log(hhteam[i]);
// }

// //array method
// //toString
// console.log(wonwoo.toString());
// //join()
// console.log(wonwoo.join(" "));
// console.log(wonwoo.join("#"));
// //pop
// wonwoo.pop();
// console.log(wonwoo);
// //push
// wonwoo.push("Good Morning");
// console.log(wonwoo);
// //shift
// wonwoo.shift();
// console.log(wonwoo);
// //unshift
// wonwoo.unshift("Hello");
// console.log(wonwoo);
// //splice
// wonwoo.splice(3, 0, true);;
// console.log(wonwoo);
// //slice
// let wonwoo2 = wonwoo.slice(2,4);
// console.log(wonwoo2);
// //concat
// let output = wonwoo.concat(line);
// console.log(output);


// //Object
// let mingyu = {
//     firstName: 'Mingyu',
//     lastName: "Kim",
//     line: 97,
//     isMarried: false,
//     grade: [90,97, 100],
//     address: {
//         city: "Seoul",
//         province: "Anyang",
//         country: "South Korea"
//     },
//     sayGreetings: function () {
//         console.log("Hello this is " + this.firstName)
//     },
// };

// console.log(mingyu.firstName);
// console.log(mingyu.grade[2]);
// console.log(mingyu.address.country);
// console.log(mingyu.sayGreetings());

//Bracket notation
// console.log(mingyu["firstName"]);
// console.log(mingyu["grade"],[2]);
// console.log(mingyu["address"],"country");
// console.log(mingyu["sayGreetings"]());

//Array object

let line97 = [
    {
        no: 1,
        name: "mingyu"
    },
    {
        no: 2,
        name : "dokyeom"        
    },
    {
        no: 3,
        name: "myeongho"
    },
];

//forEach()
// line97.forEach(function(item){
//     console.log(item.name);
// })

// //map
// let output = line97.map(function(item){
//     return item.name;
// });
// console.log(output)

// //Filter
// let output = line97.filter(function(item){
//     return item.name === "dokyeom";
// });
// console.log(output);

// //find()
// let output = line97.find(function(item){
//     return item.name ==="myeongho";
// });
// console.log(output);