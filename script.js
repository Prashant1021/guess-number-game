'use strict';
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
    //logic for win
  } else if (guess === secretNumber) {
    
    document.querySelector('.message').textContent = '🏆 correct Number';
    document.querySelector('.number').textContent = secretNumber;
    //changing color when won
    document.querySelector("body").style.backgroundColor ="#60b347"
    document.querySelector(".number").style.width ="30rem"
    //for high score
    document.querySelector('.highscore').textContent = score;
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

document.querySelector(".again").addEventListener("click",()=>{
  document.querySelector('.score').textContent=20
  document.querySelector('.number').textContent='?'
  document.querySelector('.message').textContent = 'Start Guessing... ';
  document.querySelector("body").style.backgroundColor ="#222"
   document.querySelector(".number").style.width ="15rem"
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    (document.querySelector('.guess').value)=''

 

})
