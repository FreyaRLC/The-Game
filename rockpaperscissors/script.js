let scissors;
let rock;
let paper;

let playerChoice = "";
let computerChoice = "";

let myRand;

//           🤚
//        😳/
//      _/||        RESULTS ONLY SHOW IN CONSOLE LOG SO FAR!! but it technically works
//     _/¯  ¯\_

document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start function");
  playerChooses();
}

function playerChooses() {
  document.querySelector(".rock").addEventListener("click", choseRock);
  document.querySelector(".paper").addEventListener("click", chosePaper);
  document.querySelector(".scissors").addEventListener("click", choseScissors);
}

function choseRock() {
  playerChoice = "rock";
  computerChooses();
}
function chosePaper() {
  playerChoice = "paper";
  computerChooses();
}

function choseScissors() {
  playerChoice = "scissors";
  computerChooses();
}

function computerChooses() {
  myRand = Math.floor(Math.random() * 3) + 1;
  if (myRand == 1) {
    computerChoice = "rock";
  } else if (myRand == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(myRand);
  determineResult();
}

function determineResult() {
  if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
    playerWin();
  } else if ((playerChoice == "paper" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "rock") || (playerChoice == "rock" && computerChoice == "paper")) {
    playerLoss();
  } else {
    draw();
  }
}

function playerWin() {
  console.log("you won!");
}

function playerLoss() {
  console.log("you lost :(");
}

function draw() {
  console.log("It's a draw!");
}

// if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper"){
// playerWin();
// } else if(playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock" || playerChoice == "rock" && computerChoice == "paper"){
//     playerLoss();
// } else(){
//     draw();
// }

// eller

// if(playerChoice == "rock" && computerChoice == "scissors"){
//     playerWin();
// }else if(playerChoice == "rock" && computerChoice == "paper"){
//     playerLoss();
// }else if(playerChoice == "paper" && computerChoice == "rock"){
//     playerWin();
// }else if(playerChoice == "paper" && computerChoice == "scissors"){
//     playerLoss();
// }else if(playerChoice == "scissors" && computerChoice == "paper"){
//     playerWin();
// }else if(playerChoice == "scissors" && computerChoice == "rock"){
//     playerLoss();
// }
// else(playerChoice === computerChoice){
//     draw();
// }
