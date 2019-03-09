/************************************************************
 *Submition for BBC Software Engineering Graduate Scheme    *
 *By Will Cottingham                                        *
 *                                                          *
 *JavaScript code to implement the Game of Life with an     *
 *HTML canvas, with controls and information of the game's  *
 *current state.                                            *
 ************************************************************/

//Get canvas and canvas context so it can be 
var document = this.document;
var window = this.window;
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//Colour of the cells
var cellColour = "red";

//Initialise arrays holding the coordinate transforms required to find a cell's neighbours
var xneighbourArray = [-1, 0, 1, -1, 1, -1, 0, 1];
var yneighbourArray = [-1, -1, -1, 0, 0, 1, 1, 1];

//Set initial resolution to 10
//The resolution defines the width and height of each cell,
//and the scale of the canvas.
var resolution = 10;

//The following translations center the focus of the canvas,
//so that when using the zoom function, the canvas zooms in 
//and out of the center of the canvas.
var xTranslation = -canvas.getAttribute("width") / 2;
var yTranslation = -canvas.getAttribute("height") / 2;

//Used to display the current number of
//cells, updated each evolution in updateUI()
var noCells = 0;

//Used to display the number of evolutions
//updated each evolution in updateUI()
var timesRun = 0;

//Boolean to represent the pause state;
var paused = false;

//Initialise empty array for used to hold 
var grid = [];

//Initialise empty array used for holding the next
//state of the grid.
var newGrid = [];

//A class used to represent a live cell,
//contains the position of the cell.
class LiveCell {

    constructor(xpos, ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
    }
}

//When site is first opened, use a random seed.
randomSeed()

//Perform recursive run function.
requestAnimationFrame(run);

//Recursive function to update the grid, ui and display the animation
function run() {

    //Clear the canvas
    clearCanvas();

    //Draw the grid
    drawGrid();

    //Update the grid for the next evolution
    updateGrid();

    //Update the UI elements with the new values
    updateUI();

    //Increase by 1 for every evolution
    timesRun += 1;

    //If the game is not paused, play display and calculate next frame
    if (!paused) {
        requestAnimationFrame(run);
    }
}

/*************************************************************
 *Functions used to calculate the next frame of the animation*
 *************************************************************/

//Function to update the grid array
function updateGrid() {

    //updateExistingCells function fills newgrid with the,
    //next evolution of the game.
    updateExistingCells();

    //Set grid to empty
    grid = [];

    //Copy newgrid to grid
    grid = newGrid.slice();
}

//Function to update the UI labels.
function updateUI() {

    //Get HTML element turnLabel
    var turnLabel = document.getElementById("turnLabel");

    //Set inner HTML to the number held in timesRun
    turnLabel.innerHTML = timesRun;

    //Get HTML element liveCellLabel
    var liveCellLabel = document.getElementById("liveCellLabel")

    //Set inner HTML to the number of cells in the grid
    liveCellLabel.innerHTML = grid.length;
}

//Function to fill the newgrid array with the next state of
//the grid array.
function updateExistingCells() {

    //Empty newgrid
    newGrid = []

    //For all indexes in array
    for (var i = 0; i < grid.length; i++) {

        //Initialise the number of neighbours at zero
        var noNeighbours = 0;

        //For the neighbours of grid[i]
        //Check number of neighbours grid[i] has.
        for (j in xneighbourArray) {

            //Set newx and newy to the coordinates of each neighbour of grid[i]
            var newx = grid[i].xpos + xneighbourArray[j];
            var newy = grid[i].ypos + yneighbourArray[j];

            //If there is no element in grid at newx and newy and no element in newGrid at newx and newy.
            if (!elementAtCoords(grid, newx, newy) && !elementAtCoords(newGrid, newx, newy)) {

                //Initialise the number of second neighbours at zero
                var noSecondNeighbours = 0;

                //For all neighbours of the element at newx, newy
                for (l in xneighbourArray) {

                    //Check if there is a cell at the neighbour positions
                    if (elementAtCoords(grid, newx + xneighbourArray[l], newy + yneighbourArray[l])) {

                        //Increment the number of second neighbours
                        noSecondNeighbours = noSecondNeighbours + 1;
                    }
                }

                //If the empty cell has three neigbours
                if (noSecondNeighbours == 3) {

                    //Add the cell to the newGrid
                    newGrid.push(new LiveCell(newx, newy));
                }
            }

            //Check if there is an element at newx, newy
            if (elementAtCoords(grid, newx, newy)) {

                //Increment the number of neighbours
                noNeighbours = noNeighbours + 1;
            }
        }

        //If the live cell has two or three neighbours
        if (noNeighbours == 2 || noNeighbours == 3) {

            //Add the cell to the newGrid
            newGrid.push(grid[i]);
        }
    }
}

//A function to check if there is 
//a live cell at specified coordinates
function elementAtCoords(grid, x, y) {

    //For all indexes in grid
    for (var i = 0; i < grid.length; i++) {

        //Check if both coordinates are equal
        if (x == grid[i].xpos && y == grid[i].ypos) {

            //If so return true
            return true;
        }
    }

    //Otherwise return false
    return false;
}

/*************************************
 *Functions for controlling animation*
 *************************************/

//Controlls zoom, called when the slider is moved
function sliderChanged(value) {
    
    //Get the resolution from the slider
    resolution = parseInt(value);
    
    //Clear and redraw canvas at new zoom amount
    clearCanvas();
    drawGrid();
}

//Changes colour of the cells,
//called when the option menu changes
function selectionChanged(text){
    
    //Get dropdown element from document
    var dropdown = document.getElementById("dropdown");
    
    //Get the selection from the element
    var colourSelection = dropdown.options[dropdown.selectedIndex].text;
    
    //Set the cell colours to the new selection
    cellColour = colourSelection;
}

//Next function used by next button, to display the next frame
//if the game is paused.
function next() {

    //If the the game is paused
    if (paused) {

        //Calculate and display each frame
        requestAnimationFrame(run);
    }
}

//Pause function used by the play/pause button.
function pause() {

    //Get the button element
    var pausePlayButton = document.getElementById("pausePlayButton");

    if (paused) {

        //If the game is already paused,
        //Set paused to false.
        paused = false;

        //Change inner HTML
        pausePlayButton.innerHTML = "Pause";

        //Play the animation
        requestAnimationFrame(run);

    } else {

        //If the game isn't paused,
        //set paused to true.
        paused = true;

        //Change inner HTML
        pausePlayButton.innerHTML = "Play";

    }
}

//Seeds the grid with 1200 (60*40/2) elements between
// x = -30 to 30 and y = -20 to 20  (60x40 area)
function randomSeed() {

    //Repeat 1200 times:
    for (var i = 0; i < 1199; i++) {

        //Create liveCell at a random position between
        // x = -30 to 30 and y = -20 to 20 
        var liveCell = new LiveCell(Math.floor(Math.random() * 60) - 30, Math.floor(Math.random() * 40) - 20);

        //Add live cell to grid
        grid.push(liveCell);
    }

    //Update display
    drawGrid();
    updateUI();
}

//Reset function to reset the game of life.
function reset() {

    //Clear the canvas
    clearCanvas()

    //Set grid ot empty
    grid = [];

    //Set number of times run back to zero and update UI
    timesRun = 0;
    updateUI();
}

/*****************************************************
 *Functions and variables for drawing cells in canvas*
 *****************************************************/

//Variables for mouse position
var xMousePos = 0;
var yMousePos = 0;

//Boolean to check if the mouse click is down.
var isMouseDown = false;

//Function that is called when the mouse key is pressed down
function mouseDown(event) {

    //Set mouse down to truw
    isMouseDown = true;

    //Get mouse position
    xMousePos = event.clientX;
    yMousePos = event.clientY;

    //Get the bounding rectangle of the canvas
    var rect = canvas.getBoundingClientRect();

    //Convert the mouse position to a new cell position in the client
    newCellX = Math.floor((xMousePos - parseInt(rect.left) + xTranslation) / resolution);
    newCellY = Math.floor((yMousePos - parseInt(rect.top) + yTranslation) / resolution);

    //Add new cell to grid at position of the mouse
    grid.push(new LiveCell(newCellX, newCellY));

    //Draw the new cell, that was added on the end of grid array
    context.fillRect(grid[grid.length - 1].xpos * resolution - xTranslation, grid[grid.length - 1].ypos * resolution - yTranslation, resolution, resolution);
    context.stroke();

    //Update the UI with new values
    updateUI();
}

//Funciton that is called when the mouse moves on the canvas
function draw(event) {

    //Check if the mouse key has been pressed
    if (isMouseDown) {

        //Get mouse position
        xMousePos = event.clientX;
        yMousePos = event.clientY;

        //Get the bounding rectangle of the canvas
        var rect = canvas.getBoundingClientRect();

        //Convert the mouse position to a new cell position in the client
        newCellX = Math.floor((xMousePos - parseInt(rect.left) + xTranslation) / resolution);
        newCellY = Math.floor((yMousePos - parseInt(rect.top) + yTranslation) / resolution);

        //Add new cell to grid at position of the mouse
        grid.push(new LiveCell(newCellX, newCellY));

        //Draw the new cell, that was added on the end of grid array
        context.fillRect(grid[grid.length - 1].xpos * resolution - xTranslation, grid[grid.length - 1].ypos * resolution - yTranslation, resolution, resolution);
        context.stroke();

        //Update the UI with new values
        updateUI();
    }
}

//Function called when mouse key is lifted on the canvas,
//or moved out of canvas
function mouseUp() {
    isMouseDown = false;
}

/*****************************************************************
 *Functions for drawing the cells in the grid and clearing canvas*
 *****************************************************************/

//Function to draw the cells on the canvas
function drawGrid() {
    
    //For all cells in grid
    for (i = 0; i < grid.length; i++) {
        
        //Draw coloured square at the position of the cell,
        //with translation to center the zoom, with width
        //and height = resolution.
        context.beginPath();
        context.fillStyle = cellColour;
        context.fillRect(grid[i].xpos * resolution - xTranslation, grid[i].ypos * resolution - yTranslation, resolution, resolution);
        context.stroke();
    }
}

//Function to clear the canvas
function clearCanvas() {
    
    //Clear rectangle for the size of the canvas.
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.stroke();
}
