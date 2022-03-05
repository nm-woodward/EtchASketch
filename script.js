const ncols = 64;
const nrows = 64;

const sketchDestination = document.querySelector('.middle-panel');
const body = document.querySelector('body');

function createSketchBoard(nrows,ncols) {

    if (sketchBoard != null) {
        sketchDestination.removeChild(sketchBoard)
    }
    
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

}


createSketchBoard(20,20);


// Reset cell height when screen is res

const cells = document.querySelectorAll('.sketch-cell');

cells.forEach( (cell) => {
    cell.style.height = document.querySelector('.sketch-cell').offsetWidth+"px";
    console.log(cell.offsetHeight);
})


console.log(sketchDestination);

// Set up mouse down/up toggle as prereq for drawing and erasing

let toggle = false;
let eraser = false;

body.addEventListener('mousedown', () => toggle = true);
body.addEventListener('mouseup', () => toggle = false);

// Add draw function to each cell

cells.forEach( (cell) => {
    cell.addEventListener('mouseover', function changeColor() {
        if (toggle && eraser) {
            cell.classList.remove('activated');
        }
        else if (toggle) {
            cell.classList.add('activated');
        }
        
    })
})

// Add eraser event listener for eraser button

const eraserButton = document.querySelector(".eraser");

eraserButton.addEventListener('click', () => {
    eraser ? eraser = false : eraser = true
    });


// Create clear function
const clearButton = document.querySelector(".clear");

function clearCells(cells) {
    cells.forEach( (cell), () => cell.classList.remove('activated'))
}

clearButton.addEventListener('click', () => {
    cells.forEach( (cell) => {
        cell.classList.remove('activated')
    })
});
