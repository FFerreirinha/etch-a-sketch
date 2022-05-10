const container = document.getElementById('container');
// Creating 256 divs
for(i = 0; i < 256; i++) {
  const cell = document.createElement('div');
  cell.id =   'cell';

  container.appendChild(cell);
}

