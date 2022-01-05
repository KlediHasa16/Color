const rgbCode = document.getElementById("colorCode")
const copyFlash = document.getElementById("blink")
const root = document.documentElement
var fullCode
var rgbSum

//Calling function on page load
window.onload = colorChange

//Calling functions on click
$("#button").click(colorChange)
$("#cpy").click(copyText)
$("#cpy").click(copyBlink)

//Generating a random rgb code and then applying it to the background color of the body
function colorChange(){
    firstRgb = Math.floor(Math.random() * 256)
    secondRgb = Math.floor(Math.random() * 256)
    thirdRgb = Math.floor(Math.random() * 256)
    rgbSum = firstRgb+secondRgb+thirdRgb
    fullCode = `rgb(${firstRgb}, ${secondRgb}, ${thirdRgb})`
    $("body").css("background-color",fullCode)
    rgbCode.innerHTML = fullCode
    copyFlash.innerHTML = ""
    lightColor()
}

//Copying the rgb code
function copyText(){
    navigator.clipboard.writeText(fullCode)
}

//Making text appear
function copyBlink(){
    copyFlash.innerHTML = "Copied ✔"
}

//Changing some css style depending on the background color of the body
function lightColor(){
    if (rgbSum > 490){
        root.style.setProperty("--shadow-color","rgba(0,0,0,0.75)")
        root.style.setProperty("--color","rgb(0,0,0)")
    } else {
        root.style.setProperty("--shadow-color","rgba(255, 255, 255, 0.75)")
        root.style.setProperty("--color","rgb(255, 255, 255)")
    }
}

//rgb(12, 54, 78)