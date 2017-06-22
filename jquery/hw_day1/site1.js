alert('Get ready to play the game of your life');


// var rock = src="https://vectortoons.com/wp-content/uploads/2015/05/scissors-emoji-collection-002.jpg"
// function
// 	gameResult(height){heightCentimeters = height * 2.54;




// var userChoice = image = prompt("Enter Paper, Rock, or Siccors");

// var alert("You have entered " + userChoice + image)



userWin = 0
compWin = 0

// // var rock = ( #rock ) ----- just a title
var rock = document.getElementById("rock");
var imgs = rock.getElementsByTagName("imgs");
imgs[0].src="http://preview.cutcaster.com/902949236-cartoon-rock.jpg";



// // var paper = ( #paper )
// var paper = document.getElementById("paper");
// var imgs = paper.getElementsByTagName("imgs");
// imgs[0].src="https://s-media-cache-ak0.pinimg.com/originals/5f/11/43/5f11435077b9d633d0066916e6b9ebfe.jpg";

// // var scissors = ( #scissors )
// var scissors = document.getElementById("scissors");
// var imgs = scissors.getElementsByTagName("imgs");
// imgs[0].src="https://vectortoons.com/wp-content/uploads/2015/05/scissors-emoji-collection-002.jpg";




// window.onload = function () {
// 	  var rock = new Image();
// 	  rock.src = 'http://preview.cutcaster.com/902949236-cartoon-rock.jpg';
 
// 	  rock.onload = function () {
// 		  // CREATE CANVAS CONTEXT.
// 		  var canvas = document.getElementById('canvas');
// 		  var ctx = canvas.getContext('2d');
// 		  canvas.width = rock.width;
// 		  canvas.height = rock.height;
 
// 		  ctx.drawImage(rock, 0, 0);  // DRAW THE IMAGE TO THE CANVAS.
// 	   }
// 	}





// // _______________________________________
// function changeImage(id, src) {

//   var rock;
//   var el = document.getElementById(id);

//   if (el) {
//     rock = el.getElementsByTagName('img')[0];

//     if (rock) {
//       rock.src = src;
//     }
//   }
// }


// // _______________________________________

var compChoice = ((Math.random() * 15) + 1)
var userChoice = null

		if ( compChoice > 0 )
			{compChoice = rock;
		} else if ( compChoice > 5 ) 
			{compChoice = paper;
		} else if ( compChoice > 10	)
			{compChoice = scissors;
		};


function convertUserChoice() {
 $('#rock').click(function() {
            userChoice = "rock";
 });
 
 $('#paper').click(function() {
            userChoice = "paper";
 });
 
 $('#scissors').click(function() {
            userChoice = "scissors";
        });
    // };


if (userChoice = compChoice) {
	alert("You've tied the game!");
}
else if (userChoice = "rock") {
  if (computerChoice = "scissors") {
  alert("You win!")
  userWin += 1;
  } 
  else {alert("You lose.");
  			compWin += 1;
        };
    } 
else if (userChoice = "paper") {
  if (computerChoice = "rock") {
  alert("You win!")
  userWin += 1;
  } 
  else {alert("You lose.");
  			compWin += 1;
        };
    } 
else if (userChoice = "scissors") {
  if (computerChoice = "paper") {
  alert("You win!")
  userWin += 1;
  } 
  else {alert("You lose");
  			compWin += 1;
        };
    };
};


// function endGame() {
// 	if ( userWin = 5 ) {
// 		alert("Game Over: User Wins!")
// 		};
// 	else if ( compWin = 5 ) {
// 		alert("Game Over: Computer Wins!")
// 		};
// 	else {
// 		alert ("Get ready to play again")
// 	};
// };


// var rock = 

// var userChoice = rand(1..100);
// var if userChoice > 33 
// 	alert("User choice is: " + userChoice + " and the Computer's choice is: " + ____)


// gameResult = userChoice + random 


// var computer = alert(rand(1..15))

// > var rock = (1..5);
// > console.log(theAnswer);
// > theAnswer = "Abe Lincoln";
// > console.log(theAnswer);