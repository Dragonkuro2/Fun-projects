// this function generate a random moves.
function computerMoveGenerator(){
  let value = Math.random();
  if (value >= 0 && value < 0.33){
    return('rock');
  } else if (value >= 0.33 && value < 0.66) {
    return('paper');
  } else {
    return('scissors');
  }
}

// let move = computerMoveGenerator();
// console.log(move);

function resultGenerator(userMove){
  const result = document.querySelector('.js-result');
  const resultIcons = document.querySelector('.js-result-icons');
  let status = JSON.parse(localStorage.getItem('data')) || {
    wins : 0,
    loses : 0,
    ties: 0
  };

  let computerMove = computerMoveGenerator();
  console.log(computerMove);
  if (userMove === computerMove){
    result.innerHTML = 'Tie';
    status.ties++;
  }
  else if ((userMove === 'paper' && computerMove === 'rock') ||
            (userMove === 'rock' && computerMove === 'scissors') ||
            (userMove === 'scissors' && computerMove === 'paper')) {
    result.innerHTML = 'You win.';
    status.wins++;
  } else {
    result.innerHTML = 'You lose.';
    status.loses++;
  }

  // this line of code is for giving the moves that the user and the computer takes.
  resultIcons.innerHTML = `You <img src='Icons/${userMove}-emoji.png' class='icon'> <img src='Icons/${computerMove}-emoji.png' class='icon'> computer`;
  // update status in the localstorage
  localStorage.setItem('data', JSON.stringify(status));
  // update the display status
  statusUpdater();
}

function statusUpdater() {
  const data = JSON.parse(localStorage.getItem('data')) || {
    wins: 0,
    loses: 0,
    ties: 0
  };
  const statusData = document.querySelector('.js-status');
  statusData.innerHTML = `Wins: ${data.wins}, Losses: ${data.loses}, Ties: ${data.ties}`;

}

statusUpdater();

function storageCleaner() {
  localStorage.removeItem('data');
  statusUpdater();
}