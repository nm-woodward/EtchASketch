const ncols = 15;
const nrows = 15;

const sketchDestination = document.querySelector('.middle-panel');

const sketchBoard = document.createElement("div");
sketchBoard.classList.toggle('sketch-board');

for (let i=1; i <= nrows; i++) {
    const newRow = document.createElement("div");
    newRow.classList.toggle('sketch-row');

    for (let i=1; i <= ncols; i++){
        const newCol = document.createElement("div");
        newCol.textContent = '';
        newCol.classList.toggle('sketch-cell');
        newRow.appendChild(newCol);
    }
    sketchBoard.appendChild(newRow);
}

sketchDestination.appendChild(sketchBoard);



// Reset cell height when screen is res

const cells = document.querySelectorAll('.sketch-cell');

cells.forEach( (cell) => {
    cell.style.height = document.querySelector('.sketch-cell').offsetWidth+"px";
    console.log(cell.offsetHeight);
})


console.log(sketchDestination);