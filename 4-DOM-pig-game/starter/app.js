/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//DOM = Document Object Model -> HTML Interacting with Scripts

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0; //0 = Player 1, 1 = player 2 

//document.querySelector("#current-" + activePlayer).textContent = dice; // # is for selecting id´s
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";


//var x = document.querySelector("#score-0").textContent; //we read the player 1 score into the x variable
//console.log(x);

// We use a dot . when we refer to classes
document.querySelector(".dice").style.display = "none"; // We hide the dice at the beginning using css-style code

/**
 * Event: Notifications that are sent to notify the code that something happened on the webpage
    -> Clickin a button, resize window, scroll down, pressing a key

 * Event Listener: Function that performs an action based on a certain event. Waits for a specific event to happen

 ********************
 
function btn(){
    // Do something here
}

btn();

document.querySelector(".btn-roll").addEventListener("click", btn);//We do not use () in btn cause it´s acallback function

*/

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// Anonymous Functions. Can´t use outside
document.querySelector(".btn-roll").addEventListener("click", function(){
    //1.- Random Number
    var dice = Math.floor(Math.random() * 6) + 1; //Creates random number between 1-6 & rounds it with floor

    //2.- Display the score
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
    

    //3.- Update the round score IF the rolled numer was NOT a 1

    if (dice !== 1){
        // Add score
        roundScore += dice; // roundScore = roundScore + dice
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    }
    else{
        // Next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //if (avtivePlayer=0) -> activePlayer = 1
        roundScore = 0;

        document.getElementById("current-0").textContent = '0'; //We equal to 0 the current score if dice!=1
        document.getElementById("current-1").textContent = '0';
        
        document.querySelector(".player-0-panel").classList.toggle("active"); //We toggle the player selector 
        document.querySelector(".player-1-panel").classList.toggle("active");

        document.querySelector(".dice").style.display = "none"; //Hide the dice every time we change the Player


        //document.querySelector(".player-0-panel").classList.remove("active"):
        //document.querySelector(".player-1-panel").classList.add("active");
    }
});