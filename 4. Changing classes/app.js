const parEl = document.querySelector("p");
const buttonEl = document.querySelector("button");


parEl.classList.add("red-giant-text");


buttonEl.onclick = function() {
  parEl.classList.toggle("on");
}
