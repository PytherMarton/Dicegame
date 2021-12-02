const images = [
    "nothing",
    "d1.png",
    "d2.png",
    "d3.png",
    "d4.png",
    "d5.png",
    "d6.png"
];

let music1 = new Audio();
music1.src = "music1.mp3"

function tryThis(music) {
    if(!music.paused) { 
        music.pause();  
        music.currentTime = 0; 
        music.volume = 0.5;
    }
    else {
        music.play();
        music.volume = 0.5;
    }
};

let dice = document.querySelectorAll("img");
let current1 = 0;
let current2 = 0;
let totals1 = 0;
let totals2= 0;

function reload() {
    current1 = 0;
    current2 = 0;
    totals1 = 0;
    totals2= 0;
    document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
    document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
    document.querySelector("#totals1").innerHTML = `TOTAL: ${0}`;
    document.querySelector("#totals2").innerHTML = `TOTAL: ${0}`;
    music1.play();
    music1.volume = 0.5;
    rollDice.addEventListener("click", ()=>{

        if(rollDice.value === "roll2"){
            rollDice.value = "roll";
        }else{
            rollDice.value= "roll2";
        }
    })
}

function roll() {
    dice.forEach(function(shake) {
        shake.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(shake) {
            shake.classList.remove("shake");
        });
        let diceValue = Math.floor(Math.random()*6)+1;
        document.querySelector("#d").setAttribute("src", images[diceValue]);
        document.querySelector("#current1").innerHTML = `CURRENT: ${current1 + diceValue}`;
        if (roll != 8){
            current1 = current1 + diceValue;
        }
        if (current1 >= 20){
            setTimeout(function(){
                alert("PLAYER 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU WON!!!")
            }, 500);
        }
        if (diceValue == 1) {
            setTimeout(function(){
                alert("PLAYER 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU LOST!!!")
                reload();
            }, 500);
        }
    }, 1000);
}

function roll2() {
    dice.forEach(function(shake2) {
        shake2.classList.add("shake2");
    });
    setTimeout(function(){
        dice.forEach(function(shake2) {
            shake2.classList.remove("shake2");
        });
        let diceValue = Math.floor(Math.random()*6)+1;
        document.querySelector("#d").setAttribute("src", images[diceValue]);
        document.querySelector("#current2").innerHTML = `CURRENT: ${current2 + diceValue}`;
        if (roll != 8){
            current2 = current2 + diceValue;
        }
        if (current2 >= 20){
            setTimeout(function(){
                alert("PLAYER 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU WON!!!")
            }, 500);
        }
        if (diceValue == 1 && current2 == 1){
            setTimeout(function(){
                alert("PLAYER 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> TRY AGAIN!!!")
                current2 = 0;
                document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
                document.querySelector("#totals2").innerHTML = `TOTAL: ${0}`;
            }, 500);
        }
        if (diceValue == 1 && current2 > 1) {
            setTimeout(function(){
                alert("PLAYER 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU LOST!!!")
                reload();
            }, 500);
        }
    }, 1000);
}

function hold() {
    document.querySelector("#totals1").innerHTML = `TOTAL: ${totals1 + current1}`;
    document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
    document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
    setTimeout(function(){
        alert("It's Player 2's turn!");
        roll = roll2;
        hold = hold2;
    }, 500);
}

function hold2() {
    document.querySelector("#totals2").innerHTML = `TOTAL: ${totals2 + current2}`;
    document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
    document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
    setTimeout(function(){
        alert("It's Player 1's turn!");
    }, 500); 
}