const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WIN";
const RESULT_COMPUTER_WINS = "COMPUTER WIN";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const seclection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS} ?`,
    ""
  ).toUpperCase();

  if (seclection !== ROCK && seclection !== PAPER && seclection !== SCISSORS) {
    alert(`Invalid Choice, We chose ${DEFAULT_USER_CHOICE} for you `);
    return ; // return undefine or no value
  }
  return seclection;
};

const getComputerChoice = () => {
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
//first argument need to dfine (hare cChoice)
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => //pChoice set to Default Argument 
  // cChoice is = computerChoice and pChoice is = playerChoice
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === SCISSORS && pChoice === ROCK) ||
      (cChoice === PAPER && pChoice === SCISSORS)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice(); // might be undefined 
  const computerChoice = getComputerChoice();

  let winner ;
  if(playerChoice){
     winner = getWinner(computerChoice, playerChoice);
  }else{
    winner = getWinner(computerChoice);
  }

  
  let message = `You picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE}, Computer picked ${computerChoice}, there for you `;
  if (winner === RESULT_DRAW){
    message = message+'had a draw'
  }else if (winner === RESULT_PLAYER_WINS){
    message = message + 'Win'
  }else{
    message = message + 'Lost'
  }
  alert(message);
  gameIsRunning = false;
});
