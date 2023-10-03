//JavaScript Function

//function greetings(){
//    return "Hello Shell";
//}

//console.log(greetings());

//console.log("Shell"); //argument

//const age = 20 //global

//const greetings = function(name){ //parameter\
//    console.log(age);
//    return "Hello"
//}

//console.log(age)


//IIFE (Immidiately Invoked Function Expression)
//Anonymous Function

//const output = (function(){
//    return "Jeon Wonwoo";
//})();

//console.log(output);

//Callback Function
function createGreetings(name, callback){
    const greetings = "hello " + name;
    callback(greetings);
}

function logGreetings(greetings){
    console.log(greetings);
}

createGreetings("Shell", logGreetings);