// const inputVal = document.querySelector("input")
// const inputButton = document.getElementsByClassName("btn")[0]

// inputButton.addEventListener("click",function (e){
//     e.preventDefault()
//     alert(inputVal.value)
// })



// function CheckGuess(userGuess, actual){
//     if(userGuess === actual)
//     alert("Correct guess, your head dey there") 
// };

//Get your guess number from the input value
// const userGuess = document.querySelector("input");

// //Get your button element
// const getButton = document.getElementsByClassName("btn")[0];

// //Generate a guess
// const actualGuess = 10;

//Check if guess is the same with user guess
//if guess is the same, user wins
//Else if guess is not the same, user losses
const getUserGuessValue = document.getElementsByTagName("input")[0];
const getCheckBtn = document.getElementsByTagName("button")[0];
const actualGuess = 10;
let highGuessLowGuess = document.getElementById("#second-paragraph");
let countGuessNum = document.getElementById("#third-paragraph");
let guessTrack = 5;
function guessTracking() {
  guessTrack--;
  countGuessNum.innerHTML = `You have ${guessTrack} chances left`;
   if (guessTrack === 0) {
    countGuessNum.innerHTML = `You have finished your chances`;
    getCheckBtn.disabled = true;
    getCheckBtn.style.backgroundColor = "grey";
  }
}
function checkGuess(userGuess, actualGuess) {
  let guessTrackCapture = guessTrack;
  if (userGuess) {
    if (userGuess === actualGuess) {
      highGuessLowGuess.innerHTML = "Congratulations! You guessed right";
      getCheckBtn.disabled = true;
    }else if (userGuess !== actualGuess && guessTrackCapture === 0) {
      highGuessLowGuess.innerHTML = "You failed. Try again next time!";
    } else if (userGuess !== actualGuess && userGuess < actualGuess) {
      highGuessLowGuess.innerHTML = "Try again. Your guess is low";
    } else {
      highGuessLowGuess.innerHTML = "Try again. Your guess is high";
    }
  }
}
getCheckBtn.addEventListener("click", guessTracking);
getCheckBtn.addEventListener("click", () => {
  checkGuess(Number(getUserGuessValue.value), actualGuess);
});


//   function checkGuess(userGuess, actualGuess){
//         if(userGuess === actualGuess){
//         alert("Correct guess, your head dey there");{
//         }else if(userGuess !== actualGuess) {
//         alert("Try get sense na, Guess again");
//         }
//     }    
// }


// getButton.addEventListener("click", function () {
//     checkGuess(Number(userGuess.value), actualGuess)
// });

//Your javaScript runs here


//assisgnment
//add a functionality that keeps tracks of the number of guesses the user has made and show how many guesses the user has left. After 5 guesses, then disable the button and alert "You have exhausted your chances!"



// function Add(a, b){
//     return a + b
// }


// console.log(Add(10,60))
// console.log(Add(16,30))





    


