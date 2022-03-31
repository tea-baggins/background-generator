
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(body);   // or we can do

// body.style.background = "red";  // or we can move this line to our funnction

// console.log(css);
// console.log(color1);
// console.log(color2);

//How we can extract this 2 function.

function setGradient() {
      body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);



// function isUserValid(bool) {
//       return bool;
// }

// var answer = isUserValid(true)? "You may enter" : "Access Denied";

// var automatedAnswer = "Your account # is" + ( isUserValid(false)? "123" : "Not avalable");




// function condition() {
//       if (isUserValid(true)) {
//             return "You may enter";
//       } else {
//             return "Access Denied";
//       }
// }

// var answer2 = condition();



// function moveCommand(direction) {
//       var whatHappens;
//       switch (direction) {
//             case "forward": 
//                 whatHappens = "you encounter a monster";
//                 break;
//             case "back": 
//                 whatHappens = "you arrived home";
//                 break;
//             case "right": 
//                  whatHappens = "you found a river";
//                  break;
//             case "left": 
//                  whatHappens = "you run into a troll";
//                  break;
//             default:
//                  whatHappens = "please enter a valid direction";
//       }
//       return whatHappens;
// }



//------------------------------------------------------------------//
//#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

//var winBattle = experiencePoints(true)? 10 : 1;
//var experiencePoints = winBattle() ? 10 : 1;


//------------------------------------------------------------------//
//Currying
// const multiply = (a,b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// const multiplyBy5 = curriedMultiply(5);


//Compose
// const compose = (f, g) => (a) => f(g(a));
// const sum = (num) => num + 1;
// compose(sum, sum)(5);

// razbor pocemu 7 rezulitat
// const compose = (f, g) => (a) => f(sum(5));  // a is 5; g is sum;
// const sum = (num) => num + 1;
// compose(sum, sum)(5);



//------------------------------------------------------------------//

//#1 Create a one line function that adds adds two parameters

//const sum = (a, b) => a + b
//------------------------------------------------------------------//

//Closure: What does the last line return?
// const addTo = x => y => x + y
// var addToTen = addTo(10)
// addToTen(3) // return 13;


//------------------------------------------------------------------//

//Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1) // return 31;

//------------------------------------------------------------------//

//Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12) //return 17;

//------------------------------------------------------------------//

//Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10) //return 16;

//------------------------------------------------------------------//

//What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data,
//  change during a program’s execution. It must only depend on its input elements.
 //------------------------------------------------------------------//


