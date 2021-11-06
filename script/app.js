console.log(
  "%c Type" +
    "%c game()" +
    "%c on the console and press Enter to start the game !!!",
  "color: white;",
  "color: #48ab61; font-style: italic;",
  "color: white; font-style: normal;"
);

function game() {
  // let gameRound = 0;
  for (let i = 0, len = 5; i < len; i++) {
    // gameRound = ++gameRound;
    // console.log(`This is the ${gameRound} round !!!`)
    const playerSelection = humanPlay();
    const computerSelection = computerPlay();
    let roundScore = playRound(playerSelection, computerSelection);
    if (roundScore == 'computer') {
    }
  }
}

// random computer command
function computerPlay() {
  let optionArray = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * optionArray.length);
  return optionArray[randomNum];
}

// sanitized user input for command
function humanPlay() {
  let optionArray = ["rock", "paper", "scissors"];
  var playerSelection = prompt("Input command:");
  playerSelection = playerSelection.toLowerCase();
  while (optionArray.includes(playerSelection) == false){
    playerSelection = prompt("Error Try again:");
    playerSelection = playerSelection.toLowerCase();
  }
  return playerSelection;
}

function playRound(player1, player2) {
}
