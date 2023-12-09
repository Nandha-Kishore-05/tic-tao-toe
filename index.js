let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelectorAll('.cell');
const winnerDisplay = document.querySelector('h3');

function handleCellClick(clickedCellIndex) {
  const clickedCell = cells[clickedCellIndex];

  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return;
  }

  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;
  checkWin();
  checkDraw();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];

    if (
      gameState[a] !== '' &&
      gameState[a] === gameState[b] &&
      gameState[b] === gameState[c]
    ) {
      winnerDisplay.textContent = `Winner: ${gameState[a]}`;
      gameActive = false;
      return;
    }
  }
}

function checkDraw() {
  if (!gameState.includes('') && gameActive) {
    winnerDisplay.textContent = 'Draw!';
    gameActive = false;
  }
}

function restart() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  winnerDisplay.textContent = '';
  cells.forEach(cell => (cell.textContent = ''));
}

function restat() {
  restart();
}
