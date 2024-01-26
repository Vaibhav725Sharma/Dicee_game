// Prompt user for Player names when the page loads
updatePlayerNames();

document.addEventListener("DOMContentLoaded", function () {
  // Call the updateDice function to handle the animation and rolling logic
  updateDice();

  // Add the rotate class after a delay to restart the animation
  setTimeout(() => {
    document.querySelectorAll(".dice img").forEach((dice) => {
      dice.classList.add("rotate");
    });
  }, 100);
});

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Initialize player names
var player1Name = "Player 1";
var player2Name = "Player 2";

function updatePlayerNames() {
  // Prompt user for Player 1's name
  var inputPlayer1Name = prompt("Enter Player 1's name:");
  if (inputPlayer1Name) {
    player1Name = inputPlayer1Name;
    document.getElementById("player1Name").textContent = player1Name;
  }

  // Prompt user for Player 2's name
  var inputPlayer2Name = prompt("Enter Player 2's name:");
  if (inputPlayer2Name) {
    player2Name = inputPlayer2Name;
    document.getElementById("player2Name").textContent = player2Name;
  }
}

function updateDice() {
  // Add the onesAnimation class to both dice before rolling
  document.getElementById("player1Dice").classList.add("onesAnimation");
  document.getElementById("player2Dice").classList.add("onesAnimation");

  // Remove the rotate class to stop the continuous rotation
  document.querySelectorAll(".dice img").forEach((dice) => {
    dice.classList.remove("rotate");
  });

  // Remove the animation class after a delay to stop the animation
  setTimeout(() => {
    document.getElementById("player1Dice").classList.remove("onesAnimation");
    document.getElementById("player2Dice").classList.remove("onesAnimation");

    // Set a specific value for Player 1's dice (ones)
    const player1Result = rollDice();
    document
      .getElementById("player1Dice")
      .setAttribute("src", `images/dice${player1Result}.png`);

    // Roll dice for Player 2
    const player2Result = rollDice();
    document
      .getElementById("player2Dice")
      .setAttribute("src", `images/dice${player2Result}.png`);

    // Display the winner's name
    const winnerName =
      player1Result > player2Result
        ? player1Name
        : player2Result > player1Result
        ? player2Name
        : "It's a tie!";
    document.querySelector("h1").textContent = `Winner: ${winnerName}`;

    // Add the rotate class after a delay to restart the animation
    setTimeout(() => {
      document.querySelectorAll(".dice img").forEach((dice) => {
        dice.classList.add("rotate");
      });
    }, 100);
  }, 1500);
}
