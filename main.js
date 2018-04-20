console.log("HELLO WORLD");

var JohnAge = prompt("Pls. enter Johns age");
var JohnHieght = prompt("Pls. enter Johns height in CMS");
var friendAge = prompt("Pls. enter FRIENDS age");
var friendHieght = prompt("Pls. enter FRIENDS height in CMS");
var Player3Age = prompt("Pls. enter Player 3 age");
var Player3Height = prompt("Pls. enter Player 3 height in CMS");

function score(age, height) {
  return age * 5 + height;
}

var johnScore = score(+JohnAge, +JohnHieght);
var friendScore = score(+friendAge, +friendHieght);
var Player3Score = score(+Player3Age, +Player3Height);

var scores =
  "Johns's score :  " +
  johnScore +
  " " +
  "Friend's score :" +
  " " +
  friendScore +
  "PLayer3's score :" +
  " " +
  Player3Score;

if ((johnScore === friendScore) === Player3Score) {
  alert("Its a tie" + scores);
} else {
  if (johnScore > friendScore) {
    if (johnScore > Player3Score) {
      alert("John wins !!!" + scores);
    } else if (johnScore === Player3Score) {
      alert("Its a tie" + scores);
    } else {
      alert("Player 3 wins !!!" + scores);
    }
  } else {
    if (friendScore > Player3Score) {
      alert("Friend wins !!!" + scores);
    } else if (friendScore === Player3Score) {
      alert("Its a tie" + scores);
    } else {
      alert("Player 3 wins !!!" + scores);
    }
  }
}
