const bulbElement = document.querySelector("#bulb");
const inputElement = document.querySelector(".input");
const circleElement = document.querySelector(".circle");

// Toggle function to switch between "on" and "off"


inputElement.addEventListener("click", () => {
  if (inputElement.checked) {
    bulbElement.classList.add("on");
    circleElement.innerText = "On";
    console.log("bulb is on");
  }else{
    bulbElement.classList.remove("on");
    circleElement.innerText = "Off";
    console.log("bulb is off");
  }
})
