const cells = document.querySelectorAll('.cell');

const gameOverElement = document.querySelector('.game-over');

const scoreDisplay = document.getElementById('score-display');

const timerDisplay = document.getElementById('timer-display');

let score = 0;
let timeLeft = 5;
let bugSpeed = 800;
let gameOver = false;

scoreDisplay.innerText = score;
timerDisplay.innerText = timeLeft;

function randomBug() {
  const randomNumber = Math.floor(Math.random() * cells.length);
  const cell = cells[randomNumber];
  cell.classList.add('bug');
}

const bugMovement = setInterval(randomBug, 800);

function removeBugs() {
  for (let i = 0; i < 9; i++) {
    const bugCell = cells[i];
    bugCell.classList.remove('bug');
  }
}

function countDown() {
  timerDisplay.innerText = --timeLeft;

  if (timeLeft === 0) {
    gameOver = true;
    clearInterval(bugMovement);
    clearInterval(timer);
    gameOverElement.innerText = 'Game over! Score: ' + score;
  }
}

const timer = setInterval(countDown, 1000);

for (let i = 0; i < 9; i++) {
  const cell = cells[i];
  cell.addEventListener('click', function () {
    if (cell.classList.contains('bug') && !gameOver) {
      scoreDisplay.innerText = ++score;

      cell.classList.remove('bug')
      cell.classList.add('splat')

      setTimeout(function () {
        cell.classList.remove('splat')
      }, 200)
    }
  });
}