const images = [
    "nothing",
    "d1.png",
    "d2.png",
    "d3.png",
    "d4.png",
    "d5.png",
    "d6.png"
];

let dice = document.querySelectorAll("img");
let current1 = 0;
let current2 = 0;
let totals1 = 0;
let totals2= 0;
const reloadButton = document.querySelector("#reload");
const holdButton = document.querySelector("#hold");

function reload() {
    reload = location.reload();
}

reloadButton.addEventListener("click", reload, false);

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
            console.log(current1);
        }
        if (current1 >= 20){
            setTimeout(function(){
                alert("PLAYER1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU WON!!!")
            }, 500);
        }
        if (diceValue == 1) {
            setTimeout(function(){
                alert("PLAYER1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU LOST!!!")
                reload();
            }, 500);
        }
        holdButton.addEventListener("click", () =>{
            document.querySelector("#totals1").innerHTML = `TOTAL: ${totals1 + current1}`;
            document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
            document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
            roll = roll2;
            // setTimeout(function(){
            //     alert("It's Player2's turn!");
            // }, 500);
        })
    }, 1000);
}

function roll2() {
    dice.forEach(function(shake) {
        shake.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(shake) {
            shake.classList.remove("shake");
        });
        let diceValue = Math.floor(Math.random()*6)+1;
        document.querySelector("#d").setAttribute("src", images[diceValue]);
        document.querySelector("#current2").innerHTML = `CURRENT: ${current2 + diceValue}`;
        if (roll != 8){
            current2 = current2 + diceValue;
            console.log(current2);
        }
        if (current2 >= 20){
            setTimeout(function(){
                alert("PLAYER2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU WON!!!")
            }, 500);
        }
        if (diceValue == 1) {
            setTimeout(function(){
                alert("PLAYER1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>> YOU LOST!!!")
                reload();
            }, 500);
        }
        holdButton.addEventListener("click", () =>{
            document.querySelector("#totals2").innerHTML = `TOTAL: ${totals2 + current2}`;
            document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
            document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
            setTimeout(function(){
                alert("It's Player1's turn!");
            }, 500);
        })
    }, 1000);
}

// function hold2() {
//     holdButton.addEventListener("click", () =>{
//         document.querySelector("#totals1").innerHTML = `TOTAL: ${totals1 + current1}`;
//         document.querySelector("#current1").innerHTML = `CURRENT: ${0}`;
//         document.querySelector("#current2").innerHTML = `CURRENT: ${0}`;
//         roll = roll2;
//         setTimeout(function(){
//             alert("It's Player1's turn!");
//         }, 500);
//     })
// }