
/**
 * Conding Challenge 6
Change the game to follow these rules:

1.-A plyer looses his ENTIRE score when he rolls two 6 in a row. After that, it´s the next player´s turn.
HINT: Always save the previous dice roll in  a separated variable.

2.-Add an input field to the HTML where players can set the winning score, so that they can change the predefined 
score of 100. HINT: You can read that value with the .value property in JavaScript. Use Google to figure this out.

3.-Add another dice to the game, so that there are two dices now. The player looses his current score when one of them
is a 1. HINT: You will need CSS to position the second ice, so take a look at the CSS code for the first one

*/

var scores, roundScore, activePlayer, gamePlaying;
var lastdice;

init();

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none"; // We hide the dice at the beginning using css-style code
    
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //if (avtivePlayer=0) -> activePlayer = 1
        roundScore = 0;

        document.getElementById("current-0").textContent = '0'; //We equal to 0 the current score if dice!=1
        document.getElementById("current-1").textContent = '0';
        
        document.querySelector(".player-0-panel").classList.toggle("active"); //We toggle the player selector 
        document.querySelector(".player-1-panel").classList.toggle("active");

        document.getElementById("dice-1").style.display = "none";
        document.getElementById("dice-2").style.display = "none"; //Hide the dice every time we change the Player
}


document.querySelector(".btn-roll").addEventListener("click", function(){
    if(gamePlaying){
        var dice1 = Math.floor(Math.random() * 6) + 1; 
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2.- Display the score
        document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-2").style.display = "block";

        document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
        document.getElementById("dice-2").src = "dice-" + dice2 + ".png";

        if (dice1 !== 1 && dice2!==1){
            // Add score
            roundScore += dice1 + dice2; // roundScore = roundScore + dice
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        }
        else{
            // Next Player
            nextPlayer();
        }
    /*
        //3.- Update the round score IF the rolled numer was NOT a 1
        if(dice === 6 && lastdice === 6){
            //Player looses score
            scores[activePlayer] = 0;
            document.querySelector("#score-" + activePlayer).textContent = "0"; //Updated UI
            nextPlayer();
        }
        else if (dice !== 1){
            // Add score
            roundScore += dice; // roundScore = roundScore + dice
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        }
        else{
            // Next Player
            nextPlayer();
            //document.querySelector(".player-0-panel").classList.remove("active"):
            //document.querySelector(".player-1-panel").classList.add("active");
        }
        lastdice = dice*/
    }
});
//Now we want to hold the score
document.querySelector(".btn-hold").addEventListener("click", function(){
    if(gamePlaying){
         // Add current score to Global score
        scores[activePlayer] += roundScore; //score[activePlayer] can be score[0] or score[1]

        //Update the UI
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector(".final-score").value;
        var winningScore;

        // Undefined, 0, null or "" are COERCED to false
        // anything else is COERCED to true
        if (input){ //If the user writes a desired score, we use it
            winningScore = input;
        }else{
            winningScore = 100;
        }

        //Check if player won the game
        if (scores[activePlayer]>= winningScore){
            document.querySelector("#name-" + activePlayer).textContent = "Winner!"; //If winner, change the name
            document.getElementById("dice-1").style.display = "none";
            document.getElementById("dice-2").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner"); //We add the winner class 
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active"); //remove the active player

            gamePlaying = false;
        }
        else{
            // After clicking Hold, we change to the next player
            nextPlayer();
        }
    }
});

document.querySelector(".btn-new").addEventListener("click", init);