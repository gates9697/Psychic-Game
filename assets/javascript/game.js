var chances = 0;
var losses = 0;
var computerGuess;
var wrongGuesses = [];
var userWins = 0;
function init () {
    chances = 0
// Reset the chances to 
};


var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.onkeyup = function(event) {
    var userKeyPressed = event.key;

    if (chances === 0) {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length
        )
    ];
        chances = 9;
    }
    
    if (computerGuess !== userKeyPressed) {
        if ( wrongGuesses.indexOf(userKeyPressed) == -1) { 
            wrongGuesses.push(userKeyPressed);
            chances--; 
            if (chances === 0) {
                losses ++
                var userLosses = document.getElementById("losses")
                userLosses.textContent = losses
                wrongGuesses = []
            }
        }
        console.log("chances:" + chances);
    } else {
            chances = 0
            var theWins = document.getElementById("wins");
        
            userWins ++
            
            theWins.textContent = userWins;
            wrongGuesses = []
        
            console.log("youWin")
    }
              var chancesleft = document.getElementById("guesses-left");
              chancesleft.textContent = chances 
           var chancessofar = document.getElementById("guesses-so-far")
            chancessofar.textContent = wrongGuesses

}
        
    console.log(wrongGuesses);
    
    
    // var theChances = document.getElementById("guesses-left")
    // theChances.textContent = chances