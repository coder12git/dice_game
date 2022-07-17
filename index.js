if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice(){
var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");
changeTitle(randomNumber1,randomNumber2);
}
function changeTitle(randomNumber1,randomNumber2){
if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="🚩 Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").textContent="Player 2 Wins! 🚩 ";
}
else if(randomNumber1===randomNumber2){
  document.querySelector("h1").textContent="Draw!😵";
}
}
