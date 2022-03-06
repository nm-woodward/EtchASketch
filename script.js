let ncols = 64;
let nrows = ncols;

//Query selectors for page elements
const sketchDestination = document.querySelector('.middle-panel');
const body = document.querySelector('body');
const clearButton = document.querySelector(".clear");
const eraserButton = document.querySelector(".eraser");

//Create sketchboard div
const sketchBoard = document.createElement("div");
sketchBoard.classList.toggle('sketch-board');

// Set up mouse down/up toggle as prereq for drawing and erasing
let toggle = false;
let eraser = false;

body.addEventListener('mousedown', () => toggle = true);
body.addEventListener('mouseup', () => toggle = false);

// Function to add sketchboard to page
function createSketchBoard(nrows,ncols) {

    if (sketchDestination.firstElementChild != null) {
        sketchDestination.removeChild(sketchBoard)
    }
    
    
    for (let i=1; i <= nrows; i++) {
        const newRow = document.createElement("div");
        newRow.classList.toggle('sketch-row');
    
        for (let i=1; i <= ncols; i++){
            const newCol = document.createElement("div");
            newCol.textContent = '';
            newCol.classList.toggle('sketch-cell');
            newCol.style.width = `calc(65%  * 1 / ${ncols})`;
            newRow.appendChild(newCol);
        }
        sketchBoard.appendChild(newRow);
    }
    
    sketchDestination.appendChild(sketchBoard);
    const cells = document.querySelectorAll('.sketch-cell');
    resetCellHeights(cells);
    addDrawFunctionToCells(cells);
    addClearFunctionToCells(cells);

}

// Reset cell height when screen is res
function resetCellHeights(cells) {

cells.forEach( (cell) => {
    cell.style.height = document.querySelector('.sketch-cell').offsetWidth+"px";
    console.log(cell.offsetHeight);  
})
}

// Create draw function
function addDrawFunctionToCells(cells) {
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
}

// Create clear function
function addClearFunctionToCells(cells) {
clearButton.addEventListener('click', () => {
    cells.forEach( (cell) => {
        cell.classList.remove('activated')
    })
});
}

// Add eraser event listener for eraser button
eraserButton.addEventListener('click', () => {
    eraser ? eraser = false : eraser = true
    });

// Set up a start sketchboard    
createSketchBoard(20,20);


let nrows = prompt("Board s")