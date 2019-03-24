// let compChoice = Math.floor(Math.random() * 10)

// document.onkeyup = ({ keyCode, key }) => {
//   if (keyCode <= 65 && keyCode >= 90) {
//     if (parseInt(key) === compChoice) {
//       alert('right')
//     } else {
//       alert('wrong')
//     }
//   }
// }

// array of computer choices
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let wins = 0
let losses = 0
let livesLeft = 9
let lettersChosen = []

//Computer's choice
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
//why are you pushing the computer's choice into the html here? isn't the game the user guessing the choice? :) 
lettersChosen.push(computerChoice);
console.log(computerChoice);

//User's choice
document.onkeyup = e => {
  let userChoice = event.key;
  // lettersChosen.push(userChoice);
  console.log(userChoice);
  //we would want to check if the user has choices left before letting them move through the game logic
  //if lives = 0 {
  //game over, losses ++ & restart
  //} else {
  //the rest of your game logic (which is the if statement below)
  //}
  if (userChoice === computerChoice) {
    //you dont need to wrap the variable like this here
    //upate the values of 'wins' and then update the html with the new value
    //ex. wins++
    `${wins++}`;
    lettersChosen.push(userChoice);

  }

  else if (userChoice != computerChoice) {
    //same comments as in wins 
    `${livesLeft--}`;
    lettersChosen.push(userChoice);

  }
  //we would want to add the losses check at the top (see comment)
  else {

    `${losses++}`;
  }
}


document.getElementById("wins").textContent = `Wins :  ${wins}`;
document.getElementById("losses").textContent = `Losses :  ${losses}`;
document.getElementById("lives").textContent = `Lives:  ${livesLeft}`;
document.getElementById("guess").textContent = `Letters pressed :  ${lettersChosen}`