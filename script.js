/*
 * Guess The Number Game
 * TODO: Get user value from input and save it to variable numberGuess ✅
 * TODO: Generate a random number 1 to 100 and save it to variable correctNumber ✅
 * TODO: Console whether the guess is too high, too low, or is correct inside playGame function ✅
 * TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct ✅
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow ✅
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog ✅
 * TODO: Save the guess history in a variable called guess ✅
 * TODO: Display the guess history using displayHistory() function ✅
 * TODO: Use the initGame() function to restart the game
 */

//Here we will store the list of guesses.
let guesses = [];
//Global variable to store the random number function. Global since we are going to be using it for different functions.
let correctNumber = getRandomNumber();

window.onload = function () {
  //everytime user clicks checkme button it executes the playGame function in which gets user input.
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
  domEvents();
};

//We will get one html element.
function domEvents() {
  for (let i = 0; i < document.body.children.length; i++) {
    //now shows u the innerhtml of those 2 children. You can do innerText to just get the text.
    alert(document.body.children[i].innerText);
    //document.body.firstElementChild;innerHtml
    //document.body.lastElementChild;innerHtml
  }
}

/**
 * Functionality for playing the whole game
 */
function playGame() {
  // *CODE GOES BELOW HERE *
  //using the keyword value allows us to get the input the user puts on the ui.
  let numberGuess = document.getElementById("number-guess").value;
  //we pass numberGuess in here since its not global.
  displayResult(numberGuess);
  //we always console.log to verify that it works.
  // console.log(numberGuess);
  // This will call the saveGuestHistory function and append the new value into the list.
  saveGuessHistory(numberGuess);
  displayHistory();
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement
 */
// *CODE GOES BELOW HERE *
function displayResult(numberGuess) {
  if (numberGuess > correctNumber) {
    showNumberAbove();
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
  } else if (numberGuess == correctNumber) {
    showYouWon();
  }
}
/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame() {
  // *CODE GOES BELOW HERE *
  // reset correct number
  correctNumber = getRandomNumber();
  // reset result display
  document.getElementById("result").innerHTML = "";
  // reset guessues array
  guesses = [];
  // reset guess history display
  displayHistory();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random
 */
function getRandomNumber() {
  // *CODE GOES BELOW HERE *
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
  // you console.log(randomNumber) to be able to see if those random numbers work;
}

/**
 * Save guess history
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.push(guess);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li>
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index = guesses.length - 1; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  while (index >= 0) {
    list +=
      "<li class='list-group-item'>" +
      "You guessed" +
      " " +
      guesses[index] +
      "</li>";
    //need to decrement it by one every time it goes through the loop else it will create an infinite loop.
    index -= 1;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

/**
 * Retrieve the dialog based on if the guess is wrong or correct
 */
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too Hot!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too  Cold!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
