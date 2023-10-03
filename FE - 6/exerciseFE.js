//Array Exercises

let people = ["Greg", "Mary", "Devon", "James"];
// no 1
for (let i = 0; i < people.length; i++) {
         console.log(people[i]);
}

//no 2
people.forEach(function(data){
         console.log(data);
     })

//no 3
people.shift();
console.log(people);

//no 4
people.pop();
console.log(people);

//no 5
people.unshift("Matt");
console.log(people);

//no 6
people.push("Shellyne");
console.log(people);

//no 7
for (let i = 0; i < people.length; i++) {
    if (i == 2) {
        break;
    }
    console.log(people[i]);
        
}

// no 8
let people2 = people.slice(2)
console.log(people2);

//no 9 
people.splice(2,1,"Elizabeth","Artie");
console.log(people)

// no 10
let withBob = people.concat('Bob');
console.log(withBob)


//Object Exercises

let programming = {
    languages: ["JavaScript","Python","Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// no 1
programming.languages.push("Go");
console.log(programming);

//no 2
programming["difficulty"] = 7;
console.log(programming);

//no 3
delete programming.jokes;
console.log(programming);

//no 4
programming.isFun = true;
console.log(programming);

// no 5
programming.languages.map(function(value, index) {
    console.log(index + " - " + value);
});