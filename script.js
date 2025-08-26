let scorestr = localStorage.getItem('score');
let score = scorestr ? JSON.parse(scorestr) : { win: 0, loss: 0, tie: 0 };

// Always attach the displayScore method
score.displayScore = function () {
  return `wins: ${score.win}, losses: ${score.loss}, ties: ${score.tie}`;
};

function resetScore() {
  score = { win: 0, loss: 0, tie: 0 };
  score.displayScore = function () {
    return `wins: ${score.win}, losses: ${score.loss}, ties: ${score.tie}`;
  };
  localStorage.setItem('score', JSON.stringify(score));
  document.getElementById('result').innerHTML = "Score reset!";
}

function getcomputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return 'Bat';
  } else if (randomNumber <= 2) {
    return 'Ball';
  } else {
    return 'Stump';
  }
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === 'Bat') {
    if (computerChoice === 'Ball') {
      score.win++;
      return 'you win';
    } else if (computerChoice === 'Bat') {
      score.tie++;
      return 'match draw';
    } else {
      score.loss++;
      return 'you lose';
    }
  } else if (playerChoice === 'Ball') {
    if (computerChoice === 'Stump') {
      score.win++;
      return 'you win';
    } else if (computerChoice === 'Ball') {
      score.tie++;
      return 'match draw';
    } else {
      score.loss++;
      return 'you lose';
    }
  } else {
    if (computerChoice === 'Bat') {
      score.win++;
      return 'you win';
    } else if (computerChoice === 'Stump') {
      score.tie++;
      return 'match draw';
    } else {
      score.loss++;
      return 'you lose';
    }
  }
}

function showResult(playerChoice, computerChoice, resultMsg) {
  localStorage.setItem('score', JSON.stringify(score));
  document.getElementById('result').innerHTML = `
    You have chosen <b>${playerChoice}</b> and computer chose <b>${computerChoice}</b>.<br>
    <strong>${resultMsg}</strong><br>
    <hr>
    <b>Your Score:</b><br>
    ${score.displayScore()}
  `;
}