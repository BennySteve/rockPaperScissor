let playerScore = 0
let computerScore = 0
let round = 0
// functions area
function getComputerChoice() {
  let num = Math.random()
  num *= 10
  if (num < 3) {
    return "Rock"
  }
  else if (num <= 6) {
    return "Paper"

  }
  else return "Scissor"
}

function text(){
player.textContent = playerScore
computer.textContent = computerScore
}

function playRound(player, computer) {
  let win, lose, r, p, s
  win = "You Win! "
  lose = "You Lose! "
  r = "Rock"
  p = "Paper"
  s = "Scissor"

  function beat(a, b) {
    return a + " beats " + b
  }
  //condition
  if (player == computer) {
    return "It's a Draw!"
  }

  else if (player == r && computer == s) {

    playerScore++
    
    return win + beat(r, s)
    
  }
  else if (player == p && computer == s) {
    computerScore++
    return lose + beat(s, p)
  }
  else if (player == r && computer == p) {
    computerScore++
    return lose + beat(p, r)
  }
  else if (player == s && computer == p) {
    playerScore++
    
    return win + beat(s, p)
    
  }
  else if (player == s && computer == r) {
    computerScore++
    return lose + beat(r, s)
  }
  else if (player == p && computer == r) {
    playerScore ++
    return win + beat(p, r)

  }
  else return "Invalid option enter!!"
}

function inputPlayer(a) {
  return a
}

function game(a) {

  let round = 0;
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore < 5 || computerScore < 5) {
    //alert("press a image")
    let val = playRound(inputPlayer(a), getComputerChoice());
    win = "You Win! "
    lose = "You Lose! "
    if (val.slice(0, 8) == win) {
      playerScore++
    }
    else {
      computerScore++
    }

  }
  if (playerScore <= 5) {
    console.log("win")
  }
  else { console.log("lose") }
  return round, playerScore, computerScore;
}

//selecting elemesnts
let r, p, s;
r = document.querySelector(".rock")
p = document.querySelector(".paper")
s = document.querySelector(".scissors")
player = document.querySelector(".player")
computer = document.querySelector(".computer")
rnd = document.querySelector(".round")
str = document.querySelector(".string")
result=document.querySelector(".result-text")
play=document.querySelector(".play")
end=document.querySelector(".end")
src=document.querySelector(".scr")



r.addEventListener("click", function (e) {
  let a = playRound(inputPlayer("Rock"), getComputerChoice())
  str.textContent = a
  text()
  asd()
  dis()

})

p.addEventListener("click", function (e) {
  let a = playRound(inputPlayer("Paper"), getComputerChoice());
  str.textContent = a
  text()
  asd()
  dis()
})

s.addEventListener("click", function (e) {
  let a = playRound(inputPlayer("Scissor"), getComputerChoice());
  str.textContent = a
  text()
  asd()
  dis()

})


function dis(){
if (computerScore==5 || playerScore==5){
play.classList.add("dissapper")
end.classList.remove("dissapper")
}
}
function asd(){
  if(computerScore==5){
  src.textContent="Computer="+computerScore +"    ; Player="+playerScore
  result.textContent="\nYou Lost ,Please try again"}
  if(playerScore==5){
  src.textContent="Computer="+computerScore +"   ; Player="+playerScore
  result.textContent="\nYou Win ,wanna try again?"}
}
text()
//rnd.textContent = "Round:" + round