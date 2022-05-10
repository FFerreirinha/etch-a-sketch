const container = document.getElementById('container');
const resizeButton = document.getElementById('resizebutton');
const clearButton = document.getElementById('clearbutton');
const cells = document.getElementsByClassName('class');

function drawGrid(size) { 
  for(i = 0; i < size; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';

    container.appendChild(cell); 

    cell.addEventListener("mouseleave", () => cell.id ='colored');
  } 
}

function fillCell(target) {
  target.id = 'colored';
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
  cells.id = "";
}


drawGrid(256); // Initial 16x16 grid

resizeButton.addEventListener("click", () => gridResize());
clearButton.addEventListener("click", () => clearGrid());