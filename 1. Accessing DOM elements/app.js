//access single element

console.log("Hello world")

const logoEl = document.getElementById("logo");
console.log(logoEl);


console.log(document.querySelector(".chore"))


//access multiple elements

let choresEl = document.getElementsByClassName("chore")
console.log(choresEl)

let headingEl = document.getElementsByTagName("h2")
console.log(headingEl);


let choresOptional = document.getElementsByTagName("li");
 console.log(choresOptional);


let paragraphEl = document.querySelectorAll(".randompar, .chore")
console.log(paragraphEl);
