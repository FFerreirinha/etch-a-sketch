const container = document.getElementById('container');
const resizeButton = document.getElementById('resizebutton');
const clearButton = document.getElementById('clearbutton');


function drawGrid(size) { 
  for(i = 0; i < size; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';

    container.appendChild(cell); 

    cell.addEventListener("mouseleave", () => cell.className ='colored');
  } 
}

function fillCell(target) {
  target.className = 'colored';
}

function gridResize() {
  let desiredSize = 0;

  do {
    desiredSize = parseInt(prompt("Select desired size up to 100x100. Input like: '20' for 20x20 grid"));
  } while (desiredSize > 100);

  let htmlStyles = window.getComputedStyle(document.querySelector("html"));
  let gridSize = parseInt(htmlStyles.getPropertyValue("--gridSize"));
  gridSize = document.documentElement.style.setProperty("--gridSize", desiredSize);

  desiredSize = desiredSize * desiredSize;
  container.textContent = "";


  drawGrid(desiredSize);
}

function clearGrid() {
const cells = document.getElementsByClassName('colored'); // Getting cells that are colored and then turning HTMLCollection object to Array for iterating
let coloredCells = Array.from(cells);  

for(i = 0; i < coloredCells.length; i++) {
    coloredCells[i].className = "";
  }
}


drawGrid(256); // Initial 16x16 grid

resizeButton.addEventListener("click", () => gridResize());
clearButton.addEventListener("click", () => clearGrid());