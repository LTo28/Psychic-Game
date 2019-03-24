// Array of computer choices
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let wins,
  losses,
  livesLeft,
  computerChoice,
  userChoice,
  lettersChosen

//game initializer
const init = () => {
  wins = 0
  losses = 0
  livesLeft = 9
  document.querySelector(".wins").textContent = wins
  document.querySelector(".losses").textContent = losses
  document.querySelector(".lives").textContent = livesLeft
  document.querySelector(".guess").textContent = ""
  document.querySelector(".text").textContent = ""
  compChoice()
  user()

}

//Reset button
document.querySelector(".reset").addEventListener("click", e => {
  init()
})

//Computer's choice
const compChoice = () => {
  computerChoice = letters[Math.floor(Math.random() * letters.length)]
  //console.log(computerChoice)
}

//User's choice
const user = () => {
  document.onkeyup = (event) => {
    if (event.keyCode <= 90 && event.keyCode >= 65) {
      userChoice = event.key
      computerChoice.includes(userChoice)
      if (userChoice === computerChoice && livesLeft != 0) {
        wins++
        compChoice()
        document.querySelector(".guess").append(" " + userChoice)
        document.querySelector(".wins").innerHTML = wins
        document.querySelector(".text").innerHTML = "You're a psychic!"
      } else if (userChoice !== computerChoice && livesLeft != 0) {
        losses++
        livesLeft--
        compChoice()
        document.querySelector(".guess").append(" " + userChoice)
        document.querySelector(".losses").innerHTML = losses
        document.querySelector(".lives").innerHTML = livesLeft
        document.querySelector(".text").innerHTML = "You lost, keep going!"
      } else {
        document.querySelector(".text").innerHTML = "Game Over!"
      }
    }
  }
}

init()