
var diamond1 = 0;
var diamond2 = 0;
var diamond3 = 0;
var diamond4 = 0;
var randomNumber = 0;
var wins = 0;
var losses = 0;
var userTotalScore = 0;

randomNumber = Math.floor(Math.random() * 101)+19;
console.log(randomNumber);
$("#randomNumber").html(randomNumber)

$("img").click(function(){
  var diamondRandom = Math.floor(Math.random() * 12) +1;
  console.log($(this));
  // console.log("HELLO DIAMIND1",diamond1);

  if ($(this).hasClass('dia1')) {
    diamond1 = diamondRandom;
  }else if ($(this).hasClass('dia2')) {
    diamond2 = diamondRandom;
  }else if ($(this).hasClass('dia3')) {
    diamond3 = diamondRandom;
  }else if ($(this).hasClass('dia4')) {
    diamond4 = diamondRandom;
  }
  console.log(diamond1);
});

// function getRandomNumber {
//   var diamondRandom = Math.floor(Math.random() * 12) +1;
// }
