// Defining the both scores
let humanScore = 0
let computerScore = 0

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
    commentDiv.textContent = `You win this round! ${player2} beats ${player1}`;
    humanScore += 1;
  } else if (p1 == p2) {
    commentDiv.textContent = `It's a TIE this round !!! Both used ${player1}`;
  } else {
    commentDiv.textContent = `You lose this round! ${player1} beats ${player2}`;
    computerScore += 1;
  }
}

function getOptData(e) {
  commentDiv = document.getElementById("comments");
  if (humanScore === 5 ) {
    commentDiv.style.color = 'green';
    commentDiv.textContent = "You Won, Congrats!!!"
    return
  } else if (computerScore === 5) {
    commentDiv.style.color = 'red';
    commentDiv.textContent = "You lost try again!!!"
    return
  }
  userInput = e.target.getAttribute('data-opt')
  playRound(computerPlay(), userInput)
  document.getElementById('human-score').textContent = humanScore
  document.getElementById('computer-score').textContent = computerScore
}

divDataOpt = document.querySelectorAll("div[data-opt]")
divDataOpt.forEach((data) => data.addEventListener('click', getOptData))

