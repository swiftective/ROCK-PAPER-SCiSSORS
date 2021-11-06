console.log(
  "%cType" +
    "%c game()" +
    "%c on the console and press Enter to start the game !!!\n" +
    "\nRules:\n1. You choose:\n  - Rock\n  - Paper\n  - Scissors\n2. Five rounds\n3. You will play against the computer\n4. Player with most points in the end of the game wins!!!\n",
  "color: white;",
  "color: #48ab61; font-style: italic;",
  "color: white; font-style: normal;"
);

function game() {
  // let gameRound = 0;
  let computerScore = 0;
  let humanScore = 0;
  for (let i = 0, len = 5; i < len; i++) {
    let roundScore = playRound(computerPlay(), humanPlay());
    if (roundScore == "computer") {
      computerScore = ++computerScore;
      console.log(
        `Your Score: ${humanScore}\nComputer Score: ${computerScore}\n `
      );
    } else if (roundScore == "human") {
      humanScore = ++humanScore;
      console.log(
        `Your Score: ${humanScore}\nComputer Score: ${computerScore}\n `
      );
    } else {
      console.log(
        `Your Score: ${humanScore}\nComputer Score: ${computerScore}\n `
      );
    }
  }
  const results =
    computerScore > humanScore
      ? "You Lost!!! Try again!!!"
      : humanScore > computerScore
      ? "Congrats, You won!!!"
      : "Well it's a TIE!!!";
  console.log(results);
}

// random computer command
function computerPlay() {
  let optionArray = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * optionArray.length);
  return optionArray[randomNum];
}

// sanitized user input for command
function humanPlay() {
  let optionArray = ["Rock", "Paper", "Scissors"];
  let playerSelection = prompt("Input command:");
  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  while (optionArray.includes(playerSelection) == false) {
    playerSelection = prompt("Invalid Input!\n Try again:");
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  }
  return playerSelection;
}

// stick algorithmn
// rock means 0
// paper means 1
// scissors means 2
function playRound(player1, player2) {
  p1 = player1 === "Rock" ? 0 : player1 === "Paper" ? 1 : 2;
  p2 = player2 === "Rock" ? 0 : player2 === "Paper" ? 1 : 2;
  if ((p1 + 1) % 3 == p2) {
    console.log(`You win this round! ${player2} beats ${player1}`);
    return "human";
  } else if (p1 == p2) {
    console.log(`It's a TIE this round !!! Both used ${player1}`);
  } else {
    console.log(`You lose this round! ${player1} beats ${player2}`);
    return "computer";
  }
}
