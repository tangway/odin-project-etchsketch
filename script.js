// create the element
// give size dimensions to the div
// give solid black borders to the div
// append it to container
// then think of how i can have another same sized grid just next to it
  //probably set container css to inline-block or flexgrid
// then make a whole row of 16 of it
// then think of how to make it vertically downwards

// const createGrid = document.createElement('div')
// createGrid.style.width = "20px"
// createGrid.style.height = "20px"
// createGrid.style.border = "1px solid black"
// console.log(createGrid)

// const container = document.querySelector('#container')
// container.appendChild(createGrid)


/* Example solution to 16x16 grid */
const container = document.getElementById("container");

function makeRows(grids) {
  container.style.setProperty('--grid-rows', grids);
  container.style.setProperty('--grid-cols', grids);
  for (c = 0; c < (grids * grids); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    // cell.addEventListener("mouseover", () => cell.style.backgroundColor = "white")
    // cell.addEventListener("mouseout", () => cell.style.backgroundColor = "lightslategrey")

    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(10);
///
