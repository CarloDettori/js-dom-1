"use strict"
console.clear()

const button = document.getElementById("button");
const bulb = document.getElementById("img");
const body = document.getElementById("body")

button.addEventListener("click", function () {
    if (button.innerText.includes("ACCENDI")) {
        button.innerText = "SPEGNI";
        bulb.src = "img/yellow_lamp.png";
        bulb.style.transform = "scaleX(-1)";
    } else {
        button.innerText = "ACCENDI";
        bulb.src = "img/white_lamp.png";
        bulb.style.transform = "scaleX(1)";
    }
    body.classList.toggle("off-bg");
})
