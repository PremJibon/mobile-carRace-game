var bluecar = document.getElementById("bluecar")
var racecar = document.getElementById("racecar")
var result = document.getElementById("result")
const score = document.getElementById("score")
var game = document.getElementById("game")
var counter = 0;

var leftButton = document.getElementById("left");
var rightButton = document.getElementById("right");

var btdiv = document.querySelector(".button") 

var jumpsound = document.getElementById("jumpsound")

//bluecar move
bluecar.addEventListener("animationiteration",function(){
    var random = ((Math.floor(Math.random() *3)) *130)
    bluecar.style.left = random + "px"
    counter++
})

//race car move
window.addEventListener("keydown",function(e){
    if(e.keyCode == "39"){
        var raceCarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue('left'))
        if(raceCarLeft <260){
            racecar.style.left = (raceCarLeft +130) +"px"
            jumpsound.play()
        }
    }
    if(e.keyCode =="37"){
        var raceCarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue('left'))
        if(raceCarLeft >0){
            racecar.style.left  = (raceCarLeft - 130)+"px"
            jumpsound.play()
        }
    }
})
// race car move with buttons
leftButton.addEventListener("click", function () {
    var raceCarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue('left'));
    if (raceCarLeft > 0) {
        racecar.style.left = (raceCarLeft - 130) + "px";
        jumpsound.play()
    }
});

rightButton.addEventListener("click", function () {
    var raceCarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue('left'));
    if (raceCarLeft < 260) {
        racecar.style.left = (raceCarLeft + 130) + "px";
        jumpsound.play()
    }
});

// Game over
setInterval(function gameover(){
    var blueCarTop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(bluecar).getPropertyValue('left'))
    var raceCarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue('left'))
        if((blueCarLeft === raceCarLeft) && (blueCarTop >250) &&(blueCarTop < 450)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter}`
            btdiv.style.display = "none";


            counter =0;
        }
},10)