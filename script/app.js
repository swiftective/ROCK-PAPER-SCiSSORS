// Defining the both scores
let humanScore = 0;
let computerScore = 0;

// random computer choice
function computerPlay() {
  let optionArray = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * optionArray.length);
  return optionArray[randomNum];
}

// stick algorithmn
// rock means 0
// paper means 1
// scissors means 2
function playRound(player1, player2) {
  p1 = player1 === "Rock" ? 0 : player1 === "Paper" ? 1 : 2;
  p2 = player2 === "Rock" ? 0 : player2 === "Paper" ? 1 : 2;
  commentDiv = document.getElementById("comments");
  if ((p1 + 1) % 3 == p2) {
    commentDiv.textContent = `You WIN this round! ${player2} beats ${player1}`;
    humanScore += 1;
  } else if (p1 == p2) {
    commentDiv.textContent = `It's a TIE this round !!! Both used ${player1}`;
  } else {
    commentDiv.textContent = `You LOSE this round! ${player1} beats ${player2}`;
    computerScore += 1;
  }
}

function gameLimitCheck() {
  commentDiv = document.getElementById("comments");
  if (humanScore === 5) {
    commentDiv.style.color = "green";
    commentDiv.textContent = "You WON, Congrats!!!";
  } else if (computerScore === 5) {
    commentDiv.style.color = "red";
    commentDiv.textContent = "You LOST, Try Again!!!";
  }
}

function updateScore(e) {
  if (humanScore === 5 || computerScore === 5) return;
  userInput = e.target.getAttribute("data-opt");
  playRound(computerPlay(), userInput);
  document.getElementById("human-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
  gameLimitCheck();
}

divDataOpt = document.querySelectorAll("div[data-opt]");
divDataOpt.forEach((data) => data.addEventListener("click", updateScore));
