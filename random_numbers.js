// Function to generate a random number between 1 and 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  let number = getRandomNumber();
  let chances = 0; 
  let guessedCorrectly = false;
  
  console.log("Guess the number between 1 and 100!");
  
  // Loop until the user guesses the correct number
  while (!guessedCorrectly) {
    const userInput = prompt("Enter a number:"); 
    const guess = parseInt(userInput, 10); 
    chances++; 
  
    if (isNaN(guess)) {
      console.log("Invalid input. Please enter a valid number.");
    } else if (guess === number) {
      console.log("You guessed the correct number!");
      guessedCorrectly = true;
    } else if (guess < number) {
      console.log("Your guessed number is less than the correct number. Try Again!");
    } else {
      console.log("Your guessed number is greater than the correct number. Try Again!");
    }
  }
  
  console.log("Score =", 100 - chances);
  