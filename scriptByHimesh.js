//Coding Challenge for this Section is done already

'use strict';

let Highscore = 0;
let randomNumbers = [];
let noOfIterations = -1;

//When Start button is clicked
document.querySelector('.start').addEventListener('click', function () {
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.start').textContent = 'Again!';

  //Generating a random number whenever again button is clicked
  let randomNumber = Math.floor(Math.random() * 20) + 1;
  //Creating an array which manages the number of random number created
  randomNumbers.push(randomNumber);

  //Here to add console.log(randomNumber) to see the random number generated
  
  //To display how much score you have earned
  let scoreText = Number(document.querySelector('.score').textContent);

  //When check button is clicked
  document.querySelector('.check').addEventListener('click', function () {
    
    //What user guesses in the guess field
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) //If no guess is made and check button is clicked
    {
      document.querySelector('.message').textContent = 'No number selected!';
    } 
    else 
    {  
      if (guess === randomNumbers[noOfIterations]) //When correct answer is guessed
      {
        document.querySelector('.message').textContent = 'Correct answer!';
        document.body.style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = randomNumber;
        
        if (scoreText > Highscore) Highscore = scoreText;
        document.querySelector('.highscore').textContent = Highscore;
        
        document.querySelector('.score').textContent = scoreText;
      } 
      
      else if (guess > randomNumbers[noOfIterations]) 
      {
        document.querySelector('.message').textContent = 'High! Guess Lower';
        --scoreText;
        document.querySelector('.score').textContent = scoreText;
        if (scoreText <= 0) //If scoretext reaches less than or equal to zero
        {
          document.querySelector('.message').textContent = 'You Lost the game!!';
          scoreText = 1;
        }
      } 
      
      else if (guess < randomNumbers[noOfIterations]) 
      {
        document.querySelector('.message').textContent = 'Low! Guess Higher';
        --scoreText;
        document.querySelector('.score').textContent = scoreText;
        if (scoreText <= 0) 
        {
          document.querySelector('.message').textContent = 'You Lost the game!!';
          scoreText = 1;
        }
      }
    }
  });
  ++noOfIterations;
});
