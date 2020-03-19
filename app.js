let scoreElem = document.getElementById("myScore")
let score = 0
let compScore = 0
let compElem = document.getElementById("otherScore")


function userChoice(){
  result()
}

function result(){
  let random = Math.floor(Math.random()* 20)
  console.log(random)
  if(random <= 10){
    lost()
  } else if(random <= 15){
    draw()
  } else{
    win()
  }
}

function lost(){
  compScore++
  compElem.innerText = compScore.toString()
  document.getElementById("result").innerText = "You Suck"
}

function win(){
  score++
  scoreElem.innerText = score.toString()
  document.getElementById("result").innerText = "You got it!"
}

function draw(){
  document.getElementById("result").innerText = "Its a Draw!"
}