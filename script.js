
var player1Score = 0;
var player1Lines = [];
var player2Score = 0;
var player2Lines = [];

var turn = 0;
var player = 1;

var line0 = document.getElementById('line0');
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');
var line4 = document.getElementById('line4');
var line5 = document.getElementById('line5');
var line6 = document.getElementById('line6');
var line7 = document.getElementById('line7');
var line8 = document.getElementById('line8');
var line9 = document.getElementById('line9');
var line10 = document.getElementById('line10');
var line11 = document.getElementById('line11');

var line0Clicked = false;
var line1Clicked = false;
var line2Clicked = false;
var line3Clicked = false;
var line4Clicked = false;
var line5Clicked = false;
var line6Clicked = false;
var line7Clicked = false;
var line8Clicked = false;
var line9Clicked = false;
var line10Clicked = false;
var line11Clicked = false;

function winner() {
  if (turn > 11) {
    if (player1Score > player2Score) {
      alert("Player 1 WINS!");
    } else if (player2Score > player1Score) {
      alert("Player 2 WINS!");
    } else {
      alert("IT'S A TIE!");
    }
  }
}

  line0.addEventListener("click", function(){
    if (player == 1 && line0Clicked === false) {
      line0.style.opacity = 1;
      line0.style.backgroundColor = 'green';
      line0Clicked = true;
      player1Lines.push(0);
      if (line2Clicked === true && line6Clicked === true && line7Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box0").innerHTML = "1";
        winner();
      } else {
        player = 2;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else if (player == 2 && line0Clicked === false) {
      line0.style.opacity = 1;
      line0Clicked = true;
      player2Lines.push(0);
      if (line2Clicked === true && line6Clicked === true && line7Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box0").innerHTML = "2";
        winner();
      } else {
        player = 1;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else {
      alert("That line is taken already!");
    }
  });

  line1.addEventListener("click", function(){
    if (player == 1 && line1Clicked === false) {
      line1.style.opacity = 1;
      line1.style.backgroundColor = 'green';
      line1Clicked = true;
      player1Lines.push(1);
      if (line3Clicked === true && line7Clicked === true && line8Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box1").innerHTML = "1";
        winner();
      } else {
        player = 2;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else if (player == 2 && line1Clicked === false) {
      line1.style.opacity = 1;
      line1Clicked = true;
      player2Lines.push(1);
      if (line3Clicked === true && line7Clicked === true && line8Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box1").innerHTML = "2";
        winner();
      } else {
        player = 1;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else {
      alert("That line is taken already!");
    }
  });
  line2.addEventListener("click", function(){
    if (player == 1 && line2Clicked === false) {
      line2.style.opacity = 1;
      line2.style.backgroundColor = 'green';
      line2Clicked = true;
      player1Lines.push(2);
      if (line0Clicked === true && line6Clicked === true && line7Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box0").innerHTML = "1";
        winner();
      } else if (line4Clicked === true && line9Clicked === true && line10Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box3").innerHTML = "1";
        winner();
      } else {
        player = 2;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else if (player == 2 && line2Clicked === false) {
      line2.style.opacity = 1;
      line2Clicked = true;
      player2Lines.push(2);
      if (line0Clicked === true && line6Clicked === true && line7Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box0").innerHTML = "2";
        winner();
      } else if (line4Clicked === true && line9Clicked === true && line10Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box3").innerHTML = "2";
        winner();
      } else {
        player = 1;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else {
      alert("That line is taken already!");
    }
  });
  line3.addEventListener("click", function(){
    if (player == 1 && line3Clicked === false) {
      line3.style.opacity = 1;
      line3.style.backgroundColor = 'green';
      line3Clicked = true;
      player1Lines.push(3);
      if (line1Clicked === true && line7Clicked === true && line8Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box1").innerHTML = "1";
        winner();
      } else if (line5Clicked === true && line10Clicked === true && line11Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box2").innerHTML = "1";
      } else {
        player = 2;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else if (player == 2 && line3Clicked === false) {
      line3.style.opacity = 1;
      line3Clicked = true;
      player2Lines.push(3);
      if (line1Clicked === true && line7Clicked === true && line8Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box1").innerHTML = "2";
        winner();
      } else if (line5Clicked === true && line10Clicked === true && line11Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box2").innerHTML = "2";
      } else {
        player = 1;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else {
      alert("That line is taken already!");
    }
  });
  line4.addEventListener("click", function(){
    if (player == 1 && line4Clicked === false) {
      line4.style.opacity = 1;
      line4.style.backgroundColor = 'green';
      line4Clicked = true;
      player1Lines.push(4);
      if (line2Clicked === true && line9Clicked === true && line10Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box3").innerHTML = "1";
        winner();
      } else {
        player = 2;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else if (player == 2 && line4Clicked === false) {
      line4.style.opacity = 1;
      line4Clicked = true;
      player2Lines.push(4);
      if (line2Clicked === true && line9Clicked === true && line10Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box3").innerHTML = "2";
        winner();
      } else {
        player = 1;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else {
      alert("That line is taken already!");
    }
  });
  line5.addEventListener("click", function(){
    if (player == 1 && line5Clicked === false) {
      line5.style.opacity = 1;
      line5.style.backgroundColor = 'green';
      line5Clicked = true;
      player1Lines.push(5);
      if (line3Clicked === true && line10Clicked === true && line11Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box2").innerHTML = "1";
        winner();
      } else {
        player = 2;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else if (player == 2 && line5Clicked === false) {
      line5.style.opacity = 1;
      line5Clicked = true;
      player2Lines.push(5);
      if (line3Clicked === true && line10Clicked === true && line11Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box2").innerHTML = "2";
        winner();
      } else {
        player = 1;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else {
      alert("That line is taken already!");
    }
  });
  line6.addEventListener("click", function(){
    if (player == 1 && line6Clicked === false) {
      line6.style.opacity = 1;
      line6.style.backgroundColor = 'green';
      line6Clicked = true;
      player1Lines.push(6);
      if (line0Clicked === true && line2Clicked === true && line7Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box0").innerHTML = "1";
        winner();
      } else {
        player = 2;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else if (player == 2 && line6Clicked === false) {
      line6.style.opacity = 1;
      line6Clicked = true;
      player2Lines.push(6);
      if (line0Clicked === true && line2Clicked === true && line7Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box0").innerHTML = "2";
        winner();
      } else {
        player = 1;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else {
      alert("That line is taken already!");
    }
  });
  line7.addEventListener("click", function(){
    if (player == 1 && line7Clicked === false) {
      line7.style.opacity = 1;
      line7.style.backgroundColor = 'green';
      line7Clicked = true;
      player1Lines.push(7);
      if (line0Clicked === true && line2Clicked === true && line6Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box0").innerHTML = "1";
        winner();
      } else if (line1Clicked === true && line3Clicked === true && line8Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box1").innerHTML = "1";
        winner();
      } else  {
        player = 2;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else if (player == 2 && line7Clicked === false) {
      line7.style.opacity = 1;
      line7Clicked = true;
      player2Lines.push(7);
      if (line0Clicked === true && line2Clicked === true && line6Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box0").innerHTML = "2";
        winner();
      } else if (line1Clicked === true && line3Clicked === true && line8Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box1").innerHTML = "2";
        winner();
      } else {
        player = 1;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else {
      alert("That line is taken already!");
    }
  });
  line8.addEventListener("click", function(){
    if (player == 1 && line8Clicked === false) {
      line8.style.opacity = 1;
      line8.style.backgroundColor = 'green';
      line8Clicked = true;
      player1Lines.push(8);
      if (line1Clicked === true && line3Clicked === true && line7Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box1").innerHTML = "1";
        winner();
      } else {
        player = 2;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else if (player == 2 && line8Clicked === false) {
      line8.style.opacity = 1;
      line8Clicked = true;
      player2Lines.push(8);
      if (line1Clicked === true && line3Clicked === true && line7Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box1").innerHTML = "2";
        winner();
      } else {
        player = 1;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else {
      alert("That line is taken already!");
    }
  });
  line9.addEventListener("click", function(){
    if (player == 1 && line9Clicked === false) {
      line9.style.opacity = 1;
      line9.style.backgroundColor = 'green';
      line9Clicked = true;
      player1Lines.push(9);
      if (line2Clicked === true && line4Clicked === true && line10Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box3").innerHTML = "1";
        winner();
      } else {
        player = 2;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else if (player == 2 && line9Clicked === false) {
      line9.style.opacity = 1;
      line9Clicked = true;
      player2Lines.push(9);
      if (line2Clicked === true && line4Clicked === true && line10Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box3").innerHTML = "2";
        winner();
      } else {
        player = 1;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else {
      alert("That line is taken already!");
    }
  });
  line10.addEventListener("click", function(){
    if (player == 1 && line10Clicked === false) {
      line10.style.opacity = 1;
      line10.style.backgroundColor = 'green';
      line10Clicked = true;
      player1Lines.push(10);
      if (line2Clicked === true && line4Clicked === true && line9Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box3").innerHTML = "1";
        winner();
      } else if (line3Clicked === true && line5Clicked === true && line11Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box2").innerHTML = "1";
        winner();
      } else {
        player = 2;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else if (player == 2 && line10Clicked === false) {
      line10.style.opacity = 1;
      line10Clicked = true;
      player2Lines.push(10);
      if (line2Clicked === true && line4Clicked === true && line9Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box3").innerHTML = "2";
        winner();
      } else if (line3Clicked === true && line5Clicked === true && line11Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box2").innerHTML = "2";
        winner();
      } else {
        player = 1;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else {
      alert("That line is taken already!");
    }
  });
  line11.addEventListener("click", function(){
    if (player == 1 && line11Clicked === false) {
      line11.style.opacity = 1;
      line11.style.backgroundColor = 'green';
      line11Clicked = true;
      player1Lines.push(11);
      if (line3Clicked === true && line5Clicked === true && line10Clicked === true) {
        player1Score++;
        player = 1;
        turn++;
        document.getElementById("box2").innerHTML = "1";
        winner();
      } else {
        player = 2;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else if (player == 2 && line11Clicked === false) {
      line11.style.opacity = 1;
      line11Clicked = true;
      player2Lines.push(11);
      if (line3Clicked === true && line5Clicked === true && line10Clicked === true) {
        player2Score++;
        player = 2;
        turn++;
        document.getElementById("box2").innerHTML = "2";
        winner();
      } else {
        player = 1;
        turn++;
        winner();
      }
      console.log(turn);
      console.log(player1Lines);
      console.log(player2Lines);
      console.log(player1Score);
      console.log(player2Score);
    } else {
      alert("That line is taken already!");
    }
  });

winner();
