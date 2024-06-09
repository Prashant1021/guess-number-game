'use strict';
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too High';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 'you lost game';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too Low';
        score = score - 1;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.score').textContent = 'you lost game';
      }
   
  }
});
