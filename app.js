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
}

function reload() {
    location.reload();
}

let current1 = 0;
let current2 = 0;
let score1 = 0;
let totals1 = 0;
let totals2 = 0;
let score2 = 0;

let dice = document.querySelectorAll("img");

function game() {
    console.log("game");
    dice.forEach(function(shake) {
            shake.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(shake) {
            shake.classList.remove("shake");
        });
        let diceValue = Math.floor(Math.random()*6)+1;
        document.querySelector("#d").setAttribute("src", images[diceValue]);
        document.querySelector("#current1").innerHTML = `* CURRENT: ${current1 + diceValue} *`;
        current1 = current1 + diceValue;
        score1 = current1;
        console.log(score1);
        if (current1 >= 20 || score1 >= 20){
            setTimeout(function(){
                alert("PLAYER 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU WON!!!")
                document.getElementById("totals1").style.color = "green";
                document.querySelector("#totals1").innerHTML = `< WINNER: ${score1} >`;
                document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
            }, 500);
        }
        if (diceValue == 1 && totals1 == 0) {
            setTimeout(function(){
                current1 = 0;
                score1 = 0 ;
                document.querySelector("#totals1").innerHTML = `TOTAL: ${score1}`;
                document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
                hold();
            }, 500);
        }
    }, 1000);
}

function hold() {
    console.log("hold");
    document.querySelector("#totals1").innerHTML = `TOTAL: ${score1}`;
    document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
    setTimeout(function(){
        alert("It's Player 2's turn!");
        document.querySelector("#current2").innerHTML = `* CURRENT: ${0} *`;
        game = roll2;
        hold = hold2;
    }, 500);
}

function roll2() {
    console.log("roll2");
    dice.forEach(function(shake) {
        shake.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(shake) {
            shake.classList.remove("shake");
        });
        let diceValue = Math.floor(Math.random()*6)+1;
        document.querySelector("#d").setAttribute("src", images[diceValue]);
        document.querySelector("#current2").innerHTML = `* CURRENT: ${current2 + diceValue} *`;
        current2 = current2 + diceValue;
        score2 = current2;
        if (current2 >= 20){
            setTimeout(function(){
                alert("PLAYER 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU WON!!!")
                document.getElementById("totals2").style.color = "green";
                document.querySelector("#totals2").innerHTML = `< WINNER ${score2} >`;
                document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
            }, 500);
        }
        if (diceValue == 1 && totals2 == 0) {
            setTimeout(function(){
                current2 = 0;
                score2 = 0 ;
                document.querySelector("#totals2").innerHTML = `TOTAL: ${score2}`;
                document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
                hold2();
            }, 500);
        }
    }, 1000);
}

function hold2() {
    console.log("hold2");
    document.querySelector("#totals2").innerHTML = `TOTAL: ${score2}`;
    document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
    setTimeout(function(){
        alert("It's Player 1's turn!");
        document.querySelector("#current1").innerHTML = `* CURRENT: ${0} *`;
        game = rollDices;
        hold = holding;
        current1 = 0;
    }, 500); 
}

function rollDices(){
    console.log("rollDices");
    dice.forEach(function(shake) {
        shake.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(shake) {
            shake.classList.remove("shake");
        });
        let diceValue = Math.floor(Math.random()*6)+1;
        document.querySelector("#d").setAttribute("src", images[diceValue]);
        document.querySelector("#current1").innerHTML = `* CURRENT: ${current1 + diceValue} *`;
        current1 = current1 + diceValue;
        totals1 = score1;
        console.log(score1);
        if (current1 >= 20 || totals1 >= 20){
            setTimeout(function(){
                alert("PLAYER 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU WON!!!")
                document.getElementById("totals1").style.color = "green";
                document.querySelector("#totals1").innerHTML = `< WINNER: ${totals1 + current1} >`;
                document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
            }, 500);
        }
        if (diceValue == 1 && totals1 >= 0) {
            setTimeout(function(){
                current1 = 0;
                document.querySelector("#totals1").innerHTML = `TOTAL: ${totals1 + current1}`;
                document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
                holding();
            }, 500);
        }
    }, 1000);
}

function holding() {
    console.log("holding");
    document.querySelector("#totals1").innerHTML = `TOTAL: ${totals1 + current1}`;
    document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
    if (totals1 + current1 >= 20){
        setTimeout(function(){
            alert("PLAYER 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU WON!!!")
            document.getElementById("totals1").style.color = "green";
            document.querySelector("#totals1").innerHTML = `< WINNER: ${totals1 + current1} >`;
            document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
        }, 500);
    } else {
        setTimeout(function(){
            alert("It's Player 2's turn!");
            document.querySelector("#current2").innerHTML = `* CURRENT: ${0} *`;
            game = roll3;
            hold = passing;
            current2 = 0;
        }, 500);
    }
}

function passing() {
    console.log("passing");
    document.querySelector("#totals2").innerHTML = `TOTAL: ${score2 + current2}`;
    document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
    document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
    if (current2 + score2 >= 20){
        setTimeout(function(){
            alert("PLAYER 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU WON!!!")
            document.getElementById("totals2").style.color = "green";
            document.querySelector("#totals2").innerHTML = `< WINNER: ${score2 + current2} >`;
            document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
            document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
        }, 500);
    } else {
        setTimeout(function(){
            alert("It's Player 1's turn!");
            document.querySelector("#current1").innerHTML = `* CURRENT: ${0} *`;
            current2 = 0;
            game = infinite;
            hold = infPass;
        }, 500); 
    }
}

function roll3() {
    console.log("roll3");
    dice.forEach(function(shake) {
        shake.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(shake) {
            shake.classList.remove("shake");
        });
        let diceValue = Math.floor(Math.random()*6)+1;
        document.querySelector("#d").setAttribute("src", images[diceValue]);
        document.querySelector("#current2").innerHTML = `* CURRENT: ${current2 + diceValue} *`;
        current2 = current2 + diceValue;
        totals2 = score2;
        
        if (current2 >= 20 || score2 >= 20){
            setTimeout(function(){
                alert("PLAYER 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU WON!!!")
                document.getElementById("totals2").style.color = "green";
                document.querySelector("#totals2").innerHTML = `< WINNER: ${totals2 + current2} >`;
                document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
                document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
            }, 500);
        }
        if (diceValue == 1 && totals2 >= 0) {
            setTimeout(function(){
                current2 = 0;
                document.querySelector("#totals2").innerHTML = `TOTAL: ${totals2 + current2}`;
                document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
                pass3();
            }, 500);
        }
    }, 1000);
}

function pass3(){
    console.log("pass3");
    document.querySelector("#totals2").innerHTML = `TOTAL: ${totals2 + current2}`;
    document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
    document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
    setTimeout(function(){
        alert("It's Player 1's turn!");
        document.querySelector("#current1").innerHTML = `* CURRENT: ${0} *`;
        current1 = 0;
        game = infinite;
        hold = infPass;
        score1 = totals1;
    }, 500); 
}

function infinite(){
    console.log(score1);
    console.log("infinite");
    dice.forEach(function(shake) {
        shake.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(shake) {
            shake.classList.remove("shake");
        });
        let diceValue = Math.floor(Math.random()*6)+1;
        document.querySelector("#d").setAttribute("src", images[diceValue]);
        document.querySelector("#current1").innerHTML = `* CURRENT: ${current1 + diceValue} *`;
        current1 = current1 + diceValue;
        score1 = score1 + current1;
        console.log(score1);
        if (current1 >= 20 || totals1 >= 20){
            setTimeout(function(){
                alert("PLAYER 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU WON!!!")
                document.getElementById("totals1").style.color = "green";
                document.querySelector("#totals1").innerHTML = `< WINNER: ${totals1 + current1} >`;
                document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
            }, 500);
        }
        if (diceValue == 1 && totals1 >= 0) {
            setTimeout(function(){
                current1 = 0;
                document.querySelector("#totals1").innerHTML = `TOTAL: ${totals1 + current1}`;
                document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
                infPass();
            }, 500);
        }
    }, 1000);
}

function infPass(){
    console.log("infPass");
    document.querySelector("#totals1").innerHTML = `TOTAL: ${score1 + current1}`;
    document.querySelector("#current1").innerHTML = `CURRENT: ${current1}`;
    document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
    setTimeout(function(){
        alert("It's Player 2's turn!");
        document.querySelector("#current2").innerHTML = `* CURRENT: ${0} *`;
        current1 = 0;
        game = rollDices;
        hold = holding;
    }, 500); 
}