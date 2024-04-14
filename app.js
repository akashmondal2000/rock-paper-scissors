const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WIN";
const RESULT_COMPUTER_WINS = "COMPUTER WIN";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const seclection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS} ?`,
    ""
  ).toUpperCase();

  if (seclection !== ROCK && seclection !== PAPER && seclection !== SCISSORS) {
    alert(`Invalid Choice, We chose ${DEFAULT_USER_CHOICE} for you `);
    return DEFAULT_USER_CHOICE;
  }
  return seclection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.33) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// here i find winner (player of Computer)
const getWinner = function (cChoice, pChoice) {
  // cChoice is = computerChoice and pChoice is = playerChoice
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    cChoice === ROCK && pChoice === PAPER ||
    cChoice === SCISSORS && pChoice === ROCK ||
    cChoice === PAPER && pChoice === SCISSORS
  ) {
    return RESULT_PLAYER_WINS;
  }else{
    RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  const winner = getWinner(computerChoice,playerChoice);
  console.log(winner);
});
