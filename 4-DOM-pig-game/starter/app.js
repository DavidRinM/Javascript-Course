/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//DOM = Document Object Model -> HTML Interacting with Scripts

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0; //0 = Player 1, 1 = player 2

dice = Math.floor(Math.random() * 6) + 1; //Creates random number between 1-6 & rounds it with floor

document.querySelector("#current-" + activePlayer).textContent = dice; // # is for selecting id´s
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";


var x = document.querySelector("#score-0").textContent; //we read the player 1 score into the x variable
console.log(x);

document.querySelector(".dice").style.display = "none"; // We hide the dice at the beginning using css-style code