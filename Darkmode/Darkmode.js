let mode = document.querySelector(".mode")
let currentmode = "light"

mode.addEventListener("click" , () => {
    if(currentmode === "light"){
        currentmode = "Dark";
        document.querySelector("body").style.background = "black"
    }
    else{
        currentmode = "light";
        document.querySelector("body").style.background = "rgb(250, 220, 85)"

    }
})