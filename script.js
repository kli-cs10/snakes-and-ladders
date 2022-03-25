// NEED TO DO
// 1. Animate all ladders and snakes
// Include random colors for each ladder/snake (strokestyle)
// Limit values to be positive and below 100
// pressing up arrow when placeOne = 100, will actually -1 = 99


// Snakes and Ladders
// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 1000;

// Global Variables
let rollOneEl = document.getElementById("rollOneBtn");
let rollTwoEl = document.getElementById("rollTwoBtn");
let resultEl = document.getElementById("result");
let playerBtnEl = document.getElementById("addPlayerBtn");
let playerOneEl = document.getElementById("buttonP1");
let playerTwoEl = document.getElementById("buttonP2");
let playerThreeEl = document.getElementById("buttonP3");
let playerFourEl = document.getElementById("buttonP4");
let inputOneEl = document.getElementById("inputOne");
let inputTwoEl = document.getElementById("inputTwo");
let inputThreeEl = document.getElementById("inputThree");
let inputFourEl = document.getElementById("inputFour");
let submitBtnEl = document.getElementById("submitBtn");
let turnBtnEl = document.getElementById("endTurnBtn");
let turnNumEl = document.getElementById("turn-num");
let rankOne = document.getElementById("rank-one");
let rankTwo = document.getElementById("rank-two");
let rankThree = document.getElementById("rank-three");
let rankFour = document.getElementById("rank-four");

// Global Variables
let playerCount = 0;
let playerNum
let finishedPlayers = 0;
let spaceNum = 1;
let spaceX = 20;
let spaceY = 940;
let turnCount = 0;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;

function ladder() {
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function ladder4() {
    x1 = 320;
    y1 = 920;
    x2 = 520;
    y2 = 810;
    ladder();
    x1, y1 += 50;
    x2, y2 += 50;
    ladder();
}
function ladderRungs4() {
    x1 = 330;
    y1 = 918;
    x2 = x1;
    y2 = 970;
    for (let n = 1; n <= 6; n++) {
        x1 += 25;
        x2 = x1;
        y1 -= 15;
        y2 -= 15;
        ladder();
    }
}
function ladder9() {
    x1 = 810;
    y1 = 950;
    x2 = 915;
    y2 = 640;
    ladder();
    x1 += 50;
    x2 += 50;
    ladder();
}


function ladderRungs9() {
    x1 = 822;
    y1 = 930;
    x2 = 872;
    y2 = 930;
    for (let n = 1; n <= 10; n++) {
        x1 += 8;
        x2 += 8;
        y1 -= 25;
        y2 -= 25;
        ladder();
    }
}

// Find coordinates
let mouseX, mouseY, pmouseX, pmouseY;
document.addEventListener("mousemove", mousemoveHandler)
function mousemoveHandler(event) {
    // Save Previous mouse x and y
    pmouseX = mouseX;
    pmouseY = mouseY;

    // Update mouseX and mouseY
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
    console.log(mouseX);
    console.log(mouseY);
}

// DRAW BOARD LINES
ctx.lineWidth = 5
ctx.strokeStyle = "black";
for (let y = 0; y <= 1000; y += 100) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1000, y)
    ctx.stroke();
}
for (let x = 0; x <= 1000; x += 100) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 1000)
    ctx.stroke();
}
// DRAW NUMBERS (in each grid)
function numberSpaces() {
    function writeRow() {
        for (let n = 1; n <= 10; n++) {
            ctx.font = "30px Arial";
            ctx.fillText(spaceNum, spaceX, spaceY, 80);
            spaceNum++;
            spaceX += 100;
        }
    }
    for (let n = 1; n <= 10; n++) {
        writeRow();
        spaceX = 20;
        spaceY -= 100;
    }  
}
numberSpaces();


// ADD PLAYERS AS BUTTON IS PRESSED
// Event Listener
playerBtnEl.addEventListener("click", addPlayer)
function addPlayer() {
    playerCount++;
    if (playerCount === 1) {
        playerOneEl.style.display = "initial";
        inputOneEl.style.display = "initial";
    } else if (playerCount === 2) {
        playerTwoEl.style.display = "initial";
        inputTwoEl.style.display = "initial";
    } else if (playerCount === 3) {
        playerThreeEl.style.display = "initial";
        inputThreeEl.style.display = "initial";
    } else if (playerCount === 4) {
        playerFourEl.style.display = "initial";
        inputFourEl.style.display = "initial";
    } else {
        alert("The maximumum number of players has been reached")
    }
}

// Roll Dice Button Event Listener
rollTwoEl.addEventListener("click", rollTwoDice);

function rollDie() {
    let randTotal = Math.random();
    if (randTotal <= (1 / 6)) {
        diceTotal = 1;
    } else if (randTotal <= (2/6)) {
        diceTotal = 2;
    } else if (randTotal <= (3/6)) {
        diceTotal = 3;
    } else if (randTotal <= (4/6)) {
        diceTotal = 4;
    } else if (randTotal <= (5/6)) {
        diceTotal = 5;
    } else {
        diceTotal = 6;
    }
}

function rollTwoDice() {
    let total = 0;
    rollDie();
    total += diceTotal;
    rollDie();
    total += diceTotal;
    resultEl.innerHTML = total;
} 

// Submit Events
submitBtnEl.addEventListener("click", checkPlayer);

function checkPlayer() {
    let placeOne = +inputOneEl.value;
    let placeTwo = +inputTwoEl.value;
    let placeThree = +inputThreeEl.value;
    let placeFour = +inputFourEl.value;

    // Rankings of Players
    let numbers = [placeOne, placeTwo, placeThree, placeFour]
    console.log(numbers)
    let highestToLowest = numbers.sort((a, b) => b-a);
    console.log(highestToLowest);

    rankOne.innerHTML = "Tile " + numbers[0] + ", Player ";
    rankTwo.innerHTML = "Tile " + numbers[1] + ", Player ";
    rankThree.innerHTML = "Tile " + numbers[2] + ", Player ";
    rankFour.innerHTML = "Tile " + numbers[3] + ", Player ";

    // FUNCTIONS FOR DRAWING HIDDEN SNAKES/LADDERS
    // LADDERS
    if (placeOne === 4) {
        console.log("Congrats Player One, you found a ladder!  Proceed to Space 16.");
        ladderRungs4()
        ladder4();
    } 
    if (placeTwo === 4) {
        console.log("Congrats Player Two, you found a ladder!  Proceed to Space 16.");
        ladderRungs()
        ladder4();
    }
    if (placeThree === 4) {
        console.log("Congrats Player Three, you found a ladder!  Proceed to Space 16.");
        ladderRungs()
        ladder4();
    }
    if (placeFour === 4) {
        console.log("Congrats Player Four, you found a ladder!  Proceed to Space 16.");
        ladderRungs()
        ladder4();
    }
/////////////////////////////////////////////////////////////////////
    if (placeOne === 9) {
        console.log("Congrats Player One, you found a ladder!  Proceed to Space 40.");
        ladder9();
        ladderRungs9();
    }
    if (placeTwo === 9) {
        console.log("Congrats Player Two, you found a ladder!  Proceed to Space 40.");
        ladder9();
        ladderRungs9();
    }
    if (placeThree === 9) {
        console.log("Congrats Player Three, you found a ladder!  Proceed to Space 40.");
        ladder9();
        ladderRungs9();
    }
    if (placeFour === 9) {
        console.log("Congrats Player Four, you found a ladder!  Proceed to Space 40.");
        ladder9();
        ladderRungs9();
    }
/////////////////////////////////////////////////////////////////////
    if (placeOne === 21) {
        console.log("Congrats Player One, you found a ladder!  Proceed to Space 42.");
    }
    if (placeTwo === 21) {
        console.log("Congrats Player Two, you found a ladder!  Proceed to Space 42.");
    }
    if (placeThree === 21) {
        console.log("Congrats Player Three, you found a ladder!  Proceed to Space 42.");
    }
    if (placeFour === 21) {
        console.log("Congrats Player Four, you found a ladder!  Proceed to Space 42.");
    }
//////////////////////////////////////////////////////////////////////
    if (placeOne === 28) {
        console.log("Congrats Player One, you found a ladder!  Proceed to Space 84.");
    }
    if (placeTwo === 28) {
        console.log("Congrats Player Two, you found a ladder!  Proceed to Space 84.");
    }
    if (placeThree === 28) {
        console.log("Congrats Player Three, you found a ladder!  Proceed to Space 84.");
    }
    if (placeFour === 28) {
        console.log("Congrats Player Four, you found a ladder!  Proceed to Space 84.");
    }
    /////////////////////////////////////////////////////////
    if (placeOne === 60) {
        console.log("Congrats Player One, you found a ladder!  Proceed to Space 67.");
    }
    if (placeTwo === 60) {
        console.log("Congrats Player Two, you found a ladder!  Proceed to Space 67.");
    }
    if (placeThree === 60) {
        console.log("Congrats Player Three, you found a ladder!  Proceed to Space 67.");
    }
    if (placeFour === 60) {
        console.log("Congrats Player Four, you found a ladder!  Proceed to Space 67.");
    }
    ////////////////////////////////////////////////////////////
    if (placeOne === 72) {
        console.log("Congrats Player One, you found a ladder!  Proceed to Space 91.");
    }
    if (placeTwo === 72) {
        console.log("Congrats Player Two, you found a ladder!  Proceed to Space 91.");
    }
    if (placeThree === 72) {
        console.log("Congrats Player Three, you found a ladder!  Proceed to Space 91.");
    }
    if (placeFour === 72) {
        console.log("Congrats Player Four, you found a ladder!  Proceed to Space 91.");
    }
    /////////////////////////////////////////////////////////////
    if (placeOne === 80) {
        console.log("Congrats Player One, you found a ladder!  Proceed to Space 95.");
    }
    if (placeTwo === 80) {
        console.log("Congrats Player Two, you found a ladder!  Proceed to Space 95.");
    }
    if (placeThree === 80) {
        console.log("Congrats Player Three, you found a ladder!  Proceed to Space 95.");
    }
    if (placeFour === 80) {
        console.log("Congrats Player Four, you found a ladder!  Proceed to Space 95.");
    }
    // SNAKES ///////////////////////////////
    if (placeOne === 17) {
        console.log("Oh no, Player One has been caught by a snake!  Go back to Space 4.")
    }
    if (placeTwo === 17) {
        console.log("Oh no, Player Two has been caught by a snake!  Go back to Space 4.")
    }
    if (placeThree === 17) {
        console.log("Oh no, Player Three has been caught by a snake!  Go back to Space 4.")
    }
    if (placeFour === 17) {
        console.log("Oh no, Player Four has been caught by a snake!  Go back to Space 4.")
    }
    ///////////////////////////
    if (placeOne === 54) {
        console.log("Oh no, Player One has been caught by a snake!  Go back to Space 34.")
    }
    if (placeTwo === 54) {
        console.log("Oh no, Player Two has been caught by a snake!  Go back to Space 34.")
    }
    if (placeThree === 54) {
        console.log("Oh no, Player Three has been caught by a snake!  Go back to Space 34.")
    }
    if (placeFour === 54) {
        console.log("Oh no, Player Four has been caught by a snake!  Go back to Space 34.")
    }
    //////////////////////////////////
    if (placeOne === 62) {
        console.log("Oh no, Player One has been caught by a snake!  Go back to Space 19.")
    }
    if (placeTwo === 62) {
        console.log("Oh no, Player Two has been caught by a snake!  Go back to Space 19.")
    }
    if (placeThree === 62) {
        console.log("Oh no, Player Three has been caught by a snake!  Go back to Space 19.")
    }
    if (placeFour === 62) {
        console.log("Oh no, Player Four has been caught by a snake!  Go back to Space 19.")
    }
    ////////////////////////////////////////////////
    if (placeOne === 64) {
        console.log("Oh no, Player One has been caught by a snake!  Go back to Space 60.")
    }
    if (placeTwo === 64) {
        console.log("Oh no, Player Two has been caught by a snake!  Go back to Space 60.")
    }
    if (placeThree === 64) {
        console.log("Oh no, Player Three has been caught by a snake!  Go back to Space 60.")
    }
    if (placeFour === 64) {
        console.log("Oh no, Player Four has been caught by a snake!  Go back to Space 60.")
    }
    /////////////////////////////////////////////////////
    if (placeOne === 87) {
        console.log("Oh no, Player One has been caught by a snake!  Go back to Space 36.")
    }
    if (placeTwo === 87) {
        console.log("Oh no, Player Two has been caught by a snake!  Go back to Space 36.")
    }
    if (placeThree === 87) {
        console.log("Oh no, Player Three has been caught by a snake!  Go back to Space 36.")
    }
    if (placeFour === 87) {
        console.log("Oh no, Player Four has been caught by a snake!  Go back to Space 36.")
    }
    ////////////////////////////////////////////////////////////
    if (placeOne === 93) {
        console.log("Oh no, Player One has been caught by a snake!  Go back to Space 73.")
    }
    if (placeTwo === 93) {
        console.log("Oh no, Player Two has been caught by a snake!  Go back to Space 73.")
    }
    if (placeThree === 93) {
        console.log("Oh no, Player Three has been caught by a snake!  Go back to Space 73.")
    }
    if (placeFour === 93) {
        console.log("Oh no, Player Four has been caught by a snake!  Go back to Space 73.")
    }
    /////////////////////////////////////////
    if (placeOne === 94) {
        console.log("Oh no, Player One has been caught by a snake!  Go back to Space 75.")
    }
    if (placeTwo === 94) {
        console.log("Oh no, Player Two has been caught by a snake!  Go back to Space 75.")
    }
    if (placeThree === 94) {
        console.log("Oh no, Player Three has been caught by a snake!  Go back to Space 75.")
    }
    if (placeFour === 94) {
        console.log("Oh no, Player Four has been caught by a snake!  Go back to Space 75.")
    }
    /////////////////////////////////////////
    if (placeOne === 98) {
        console.log("Oh no, Player One has been caught by a snake!  Go back to Space 79.")
    }
    if (placeTwo === 98) {
        console.log("Oh no, Player Two has been caught by a snake!  Go back to Space 79.")
    }
    if (placeThree === 98) {
        console.log("Oh no, Player Three has been caught by a snake!  Go back to Space 79.")
    }
    if (placeFour === 98) {
        console.log("Oh no, Player Four has been caught by a snake!  Go back to Space 79.")
    }

    // PLAYER REACHES 100 /////////////////////
    function endGame() {
        if (finishedPlayers === 0) {
            console.log("Congratulations Player " + playerNum + ", you finished first!");
            finishedPlayers++;
        } else if (finishedPlayers === 1) {
            console.log("Congratulations Player " + playerNum + ", you finished second!");
            finishedPlayers++;
        } else if (finishedPlayers === 2) {
            console.log("Congratulations Player " + playerNum + ", you finished third!");
            finishedPlayers++;
        } else {
            console.log("Congratulations Player " + playerNum + " you finished fourth!");
        }
    }

    if (placeOne === 100) {
        playerNum = "One";
        endGame();
        inputOneEl = "";
    }
    if (placeTwo === 100) {
        playerNum = "Two";
        endGame();
        inputTwoEl = "";
    }
    if (placeThree === 100) {
        playerNum = "Three";
        endGame();
        inputThreeEl = "";
    }
    if (placeFour === 100) {
        playerNum = "Four";
        endGame();
        inputFourEl = ""
    }
}

turnBtnEl.addEventListener("click", turnCounter);

function turnCounter() {
    turnCount++;
    turnNumEl.innerHTML = turnCount;
}
