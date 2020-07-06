let h1El = document.querySelector("h1");

h1El.style.color = "blue";

let content = document.createElement("p");

content.innerHTML = "hey this is the content inside of the p tag";

document.querySelector("body").appendChild(content);
