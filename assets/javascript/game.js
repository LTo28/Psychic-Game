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
 lettersChosen.push(computerChoice);
  console.log(computerChoice);

//User's choice
document.onkeyup = e => {
  let userChoice = event.key;
  // lettersChosen.push(userChoice);
  console.log(userChoice);

  if (userChoice === computerChoice) {
    `${wins++}`;
    lettersChosen.push(userChoice);
    
  }
  else if (userChoice != computerChoice) {
    `${livesLeft--}`;
    lettersChosen.push(userChoice);
  }
  else {
    `${losses++}`;
  }
}


document.getElementById("wins").textContent = `Wins :  ${wins}`;
document.getElementById("losses").textContent = `Losses :  ${losses}`;
document.getElementById("lives").textContent = `Lives:  ${livesLeft}`;
document.getElementById("guess").textContent = `Letters pressed :  ${lettersChosen}`
