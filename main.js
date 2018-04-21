const ageP1 = document.getElementById("p1__age");
const heightP1 = document.getElementById("p1__height");
const ageP2 = document.getElementById("p2__age");
const heightP2 = document.getElementById("p2__height");
const ageP3 = document.getElementById("p3__age");
const heightP3 = document.getElementById("p3__height");

let winner = "Click button for winner";

// check winner button
document.getElementById("button").addEventListener("click", () => {
  checkWinner();
  document.getElementById("winner").innerHTML = winner;
});

// reset button
document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("winner").innerHTML = "Click button for   winner";
  let para = document.querySelectorAll("p + p");
  for (i in para) {
    para[i].innerHTML = "";
  }
  let input = document.getElementsByTagName("input");
  for (i in input) {
    input[i].value = "";
  }
});

function score(height, age) {
  return age * 5 + height;
}

function checkWinner() {
  let scoreP1 = score(+heightP1.value, +ageP1.value); // + converts strings to number
  let scoreP2 = score(+heightP2.value, +ageP2.value);
  let scoreP3 = score(+heightP3.value, +ageP3.value);

  document.getElementById("score1").innerHTML = "Score : " + " " + scoreP1;
  document.getElementById("score2").innerHTML = "Score : " + " " + scoreP2;
  document.getElementById("score3").innerHTML = "Score : " + " " + scoreP3;

  if (scoreP1 > scoreP2) {
    if (scoreP1 === scoreP3) {
      winner = "p1 & p3 winner";
    } else if (scoreP1 > scoreP3) {
      winner = "p1 winner";
    }
  } else if (scoreP1 === scoreP2) {
    if (scoreP2 === scoreP3) {
      winner = "p1 ,p2, p3 are winner";
    } else if (scoreP2 > scoreP3) {
      winner = "p1 & p2 are winner";
    }
  } else if (scoreP2 >= scoreP3) {
    if (scoreP2 > scoreP3) {
      winner = "p2 winner";
    } else {
      winner = "p2 & p3 winner";
    }
  } else {
    winner = "p3 is winner";
  }
}
