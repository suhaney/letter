let songContainer = document.getElementsByClassName("song")[0];
let lyricsArray = [
    "sahiba, aye ghar kaahe na? " ,
     "Aise to sataaye na ",
    "Dekhu tujhko, \"chain aata hai\" ",
    "sahiba, neende-veende aaye na" ,
     "raate kaati jaaye na",
    "\"Tera hi khayal din-rain aata hai\"",
    "",
    "Sahiba, samundar" , 
    " meri aankho me reh gaye",
    "Hum aate-aate jeena ", 
    "teri yaado me reh gaye",
    "Ye palke gawahi hai ",
     "hum raato me reh gaye",
    "Jo vaade kiye saare ", 
    "bas baato me reh gaye",
    "Baato-baato me hi, khwabo-khwabo me hi mere "  ,
    "qareeb hai tu",
    "Teri talab mujhko, teri talab, jaana",
     "ho to kabhi ru-ba-ru",
    "Door-door se dekhu mai har manzar ", 
    " kaisa bayaan mai karu?",
    "Haal jo mera ",
    "hai nai kis ko pata?",
    "Mere sahiba, dil na kiraaye ka ", 
    "thoda to sambhalo na",
    "Nazuk hai, toot jaata hai"
];

let lineIndex = 0;
function displayNextLine() {
    if (lineIndex >= lyricsArray.length) {
        clearInterval(intervalId);
        return;
    }

    const currentLine = lyricsArray[lineIndex];
    const pTag = document.createElement('p');
    if (currentLine.trim() === "") {
        pTag.innerHTML = "&nbsp;";
    } else {
        pTag.textContent = currentLine;
        pTag.classList.add('fade-in'); 
    }
    songContainer.appendChild(pTag);
    lineIndex++;
}
const intervalId = setInterval(displayNextLine, 1500);   
let slidercontainer = document.getElementsByClassName("slider-container")[0];
console.log(slidercontainer);
let slider = document.getElementsByClassName("slider-handle")[0];
console.log(slider);  
slider.addEventListener("click" , function(){
   this.style.height="0";
}); 
let display =  document.getElementsByClassName("main")[0];
console.log(display);  
setTimeout( function(){
      display.style.display = "none";
} ,  12000);
