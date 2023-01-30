/* 
1. create a global scope variables for input, table that consist the header, score row and button row, and the reset button.
2. create a dynamic table using the variables from 1
*/

const teamCountInput = document.getElementById("teamCount");//target the input to generate table
const headerRow = document.getElementById("headerRow");//target to generate header which is the Team 1 and others teams
const scoreRow = document.getElementById("scoreRow"); //target the score row
const buttonRow = document.getElementById("buttonRow");//target the button
const resetBtn = document.getElementById("resetBtn");//target the reset button

teamCountInput.addEventListener("change", function() {
  const teamCount = this.value;
  headerRow.innerHTML = "";
  scoreRow.innerHTML = "";
  buttonRow.innerHTML = "";
  
  for (let i = 1; i <= teamCount; i++) {
    headerRow.innerHTML += `<th><input type="text" name="" id="Team ${i}"></th>`;
    scoreRow.innerHTML += `<td id="score-${i}">0</td>`;
    buttonRow.innerHTML += `
      <td>
        <button id="increase-${i}" class="increaseBtn">+</button>
        <button id="decrease-${i}" class="decreaseBtn">-</button>
      </td>
    `;
  }
  
  const increaseBtns = document.querySelectorAll(".increaseBtn");
  increaseBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      const teamNum = this.id.split("-")[1];
      const scoreEl = document.getElementById(`score-${teamNum}`);
      scoreEl.innerHTML = parseInt(scoreEl.innerHTML) + 1;
    });
  });
  
  const decreaseBtns = document.querySelectorAll(".decreaseBtn");
  decreaseBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      const teamNum = this.id.split("-")[1];
      const scoreEl = document.getElementById(`score-${teamNum}`);
      scoreEl.innerHTML = parseInt(scoreEl.innerHTML) - 1;
    });
  });
  
  resetBtn.addEventListener("click", function() {
    for (let i = 1; i <= teamCount; i++) {
      const scoreEl = document.getElementById(`score-${i}`);
      scoreEl.innerHTML = 0;
    }
  });
});
