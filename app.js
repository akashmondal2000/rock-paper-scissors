const startGameBtn = document.getElementById("start-game-btn");

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function () {
  const seclection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS} ?` , "").toUpperCase();

  if (
    seclection !== ROCK &&
    seclection !== PAPER &&
    seclection !== SCISSORS
  ) {
    alert(`Invalid Choice, We chose ${DEFAULT_USER_CHOICE} for you `);
    return DEFAULT_USER_CHOICE;
  }
  return seclection;
};

startGameBtn.addEventListener("click", function () {
  if(gameIsRunning){
    return;
  }
  gameIsRunning = true
  console.log("Game is starting...");
  const playerChoice =  getPlayerChoice();
  console.log(playerChoice);
});
