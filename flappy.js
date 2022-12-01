var hole = document.getElementById("hole");
var game = document.getElementById("game");
var result = document.getElementById("result");
var text = document.getElementById("text");

var score = 0;
var jumping =0;

hole.addEventListener("animationiteration", randomHole) // randomhole is our function


function randomHole()
{
    var random= -((Math.random()*350)+150)
    hole.style.top = random+"px";
    score++;
}

var fall= setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping==0)
    {
        bird.style.top=(birdTop+2)+"px";
    }
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var hTOP =(500+holeTop);
    if((birdTop>450) || ((blockleft<50)  && (blockleft>-50) &&((birdTop<hTOP) || (birdTop>hTOP +100))))
    {
        result.style.display ="block"
        text.innerText= `Your final score is: ${score}`;
        game.style.display = "none"
        score=0;
    }
},10)  //time interval


window.addEventListener("keydown", hop)
function hop()
{
    jumping=1;
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(birdTop>6){
        bird.style.top= (birdTop-60) + "px"  //in here we are converting them to px
    }
    setTimeout(function(){
        jumping =0 
    },100)   //every 100 milisecond
}