const container = document.getElementById('container');
// Creating 256 divs
for(i = 0; i < 256; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';

  container.appendChild(cell); 

  cell.addEventListener("mouseleave", () => cell.id ='colored');
}

function fillCell(target) {
  target.id = 'colored';
}
