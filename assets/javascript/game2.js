
var diamond1 = 0;
var diamond2 = 0;
var diamond3 = 0;
var diamond4 = 0;
var randomNumber = 0;
var wins = 0;
var losses = 0;
var userTotalScore = 0;



function getRandomNumber() {
  var diamondRandom = Math.floor(Math.random() * 12) +1;

  // console.log(diamondRandom);
  return diamondRandom;
}



function startGame(){

  randomNumber = Math.floor(Math.random() * 101)+19;
  console.log(randomNumber);
  $("#randomNumber").html(randomNumber);



diamond1 = getRandomNumber();
// console.log(diamond1);
diamond2 = getRandomNumber();
// console.log(diamond2);
diamond3 = getRandomNumber();
// console.log(diamond3);
diamond4 = getRandomNumber();
// console.log(diamond4);


}

startGame();

$("img").click(function(){

  console.log($(this));
  // console.log("HELLO DIAMIND1",diamond1);
  $("#message").html("");
  if ($(this).hasClass('dia1')) {
      userTotalScore += diamond1;
      console.log(userTotalScore);
  }else if ($(this).hasClass('dia2')) {
      userTotalScore += diamond2;
  }else if ($(this).hasClass('dia3')) {
      userTotalScore += diamond3;
  }else if ($(this).hasClass('dia4')) {
      userTotalScore += diamond4;
  }
  console.log("i am here",userTotalScore);
  $("#totalScore").html(userTotalScore); //why does this need to go in here context?this?

  console.log("outside", userTotalScore);
  console.log("outside", randomNumber);
  if (userTotalScore === randomNumber) {

    wins++;
    $("#wins").html(wins);
    $("#message").html("You win!");
    reset();


  }else if (userTotalScore > randomNumber) {
    losses++;
    $("#losses").html(losses);
    $("#message").html("You Lose!");
    // console.log("counter",losses);
    // console.log(userTotalScore);
    reset();
  }


});
function reset(){
  randomNumber = Math.floor(Math.random() * 101)+19;
  $("#randomNumber").html(randomNumber);
  console.log("inside reset", randomNumber);
  userTotalScore = 0;

  startGame();

}
