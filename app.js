
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
  document.getElementById("result").innerText = "You Suck"
}

function win(){
  document.getElementById("result").innerText = "You got it!"
}

function draw(){
  document.getElementById("result").innerText = "Its a Draw!"
}