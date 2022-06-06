
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
let rankOne = document.getElementById("rank-one");
let rankTwo = document.getElementById("rank-two");
let rankThree = document.getElementById("rank-three");
let rankFour = document.getElementById("rank-four");
let snakeImg = document.getElementById("snake-head");
let updatesEl1 = document.getElementById("updatesP1")
let updatesEl2 = document.getElementById("updatesP2")
let updatesEl3 = document.getElementById("updatesP3")
let updatesEl4 = document.getElementById("updatesP4")

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
let placement = "";




// Find coordinates (used to animate snakes and ladders)
// let mouseX, mouseY, pmouseX, pmouseY;
// document.addEventListener("mousemove", mousemoveHandler)
// function mousemoveHandler(event) {
// Save Previous mouse x and y
    // pmouseX = mouseX;
    // pmouseY = mouseY;

    // Update mouseX and mouseY
//     let cnvRect = cnv.getBoundingClientRect();
//     mouseX = event.x - cnvRect.x;
//     mouseY = event.y - cnvRect.y;
//     console.log(mouseX);
//     console.log(mouseY);
// }

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
            ctx.fillStyle = "black";
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

turnBtnEl.addEventListener("click", endTurn);

function endTurn() {
    updatesEl1.innerHTML = "";
    updatesEl2.innerHTML = "";
    updatesEl3.innerHTML = "";
    updatesEl4.innerHTML = "";
}


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
    let onePlace, twoPlace, threePlace, fourPlace;
    let numbers = [placeOne, placeTwo, placeThree, placeFour]
    let highestToLowest = numbers.sort((a, b) => b-a);

    if (numbers[0] === placeOne) {
        onePlace = "One";
    } else if (numbers[0] === placeTwo) {
        onePlace = "Two";
    } else if (numbers[0] === placeThree) {
        onePlace = "Three";
    } else {
        onePlace = "Four";
    }
    if (numbers[1] === placeOne) {
        twoPlace = "One";
    } else if (numbers[1] === placeTwo) {
        twoPlace = "Two";
    } else if (numbers[1] === placeThree) {
        twoPlace = "Three";
    } else if (numbers[1] === placeFour) {
        twoPlace = "Four";
    }
    if (numbers[2] === placeOne) {
        threePlace = "One";
    } else if (numbers[2] === placeTwo) {
        threePlace = "Two";
    } else if (numbers[2] === placeThree) {
        threePlace = "Three";
    } else if (numbers[2] === placeFour) {
        threePlace = "Four";
    }
    if (numbers[3] === placeOne) {
        fourPlace = "One";
    } else if (numbers[3] === placeTwo) {
        fourPlace = "Two";
    } else if (numbers[3] === placeThree) {
        fourPlace = "Three";
    } else if (numbers[3] === placeFour) {
        fourPlace = "Four";
    }

    rankOne.innerHTML = "Tile " + numbers[0] + ", Player " + onePlace;
    rankTwo.innerHTML = "Tile " + numbers[1] + ", Player " + twoPlace;
    rankThree.innerHTML = "Tile " + numbers[2] + ", Player " + threePlace;
    rankFour.innerHTML = "Tile " + numbers[3] + ", Player " + fourPlace;

    // LADDERS
    if (placeOne === 4) {
        updatesEl1.innerHTML = "Congrats Player One, you found a ladder!  Proceed to Space 16.";
        ladderRungs4()
        ladder4();
    } 
    if (placeTwo === 4) {
        updatesEl2.innerHTML = "Congrats Player Two, you found a ladder!  Proceed to Space 16.";
        ladderRungs4()
        ladder4();
    }
    if (placeThree === 4) {
        updatesEl3.innerHTML = "Congrats Player Three, you found a ladder!  Proceed to Space 16.";
        ladderRungs4()
        ladder4();
    }
    if (placeFour === 4) {
        updatesEl4.innerHTML = "Congrats Player Four, you found a ladder!  Proceed to Space 16.";
        ladderRungs4()
        ladder4();
    }
/////////////////////////////////////////////////////////////////////
    if (placeOne === 9) {
        updatesEl1.innerHTML = "Congrats Player One, you found a ladder!  Proceed to Space 40.";
        ladder9();
        ladderRungs9();
    }
    if (placeTwo === 9) {
        updatesEl2.innerHTML = "Congrats Player Two, you found a ladder!  Proceed to Space 40.";
        ladder9();
        ladderRungs9();
    }
    if (placeThree === 9) {
        updatesEl3.innerHTML = "Congrats Player Three, you found a ladder!  Proceed to Space 40.";
        ladder9();
        ladderRungs9();
    }
    if (placeFour === 9) {
        updatesEl4.innerHTML = "Congrats Player Four, you found a ladder!  Proceed to Space 40.";
        ladder9();
        ladderRungs9();
    }
/////////////////////////////////////////////////////////////////////
    if (placeOne === 21) {
        updatesEl1.innerHTML = "Congrats Player One, you found a ladder!  Proceed to Space 42.";
        ladder21();
        ladderRungs21();
    }
    if (placeTwo === 21) {
        updatesEl2.innerHTML = "Congrats Player Two, you found a ladder!  Proceed to Space 42.";
        ladder21();
        ladderRungs21();
    }
    if (placeThree === 21) {
        updatesEl3.innerHTML = "Congrats Player Three, you found a ladder!  Proceed to Space 42.";
        ladder21();
        ladderRungs21();
    }
    if (placeFour === 21) {
        updatesEl4.innerHTML = "Congrats Player Four, you found a ladder!  Proceed to Space 42.";
        ladder21();
        ladderRungs21();
    }
//////////////////////////////////////////////////////////////////////
    if (placeOne === 28) {
        updatesEl1.innerHTML = "Congrats Player One, you found a ladder!  Proceed to Space 83.";
        ladder28();
        ladderRungs28();
    }
    if (placeTwo === 28) {
        updatesEl2.innerHTML = "Congrats Player Two, you found a ladder!  Proceed to Space 83.";
        ladder28();
        ladderRungs28();
    }
    if (placeThree === 28) {
        updatesEl3.innerHTML = "Congrats Player Three, you found a ladder!  Proceed to Space 83.";
        ladder28();
        ladderRungs28();
    }
    if (placeFour === 28) {
        updatesEl4.innerHTML = "Congrats Player Four, you found a ladder!  Proceed to Space 83.";
        ladder28();
        ladderRungs28();
    }
    /////////////////////////////////////////////////////////
    if (placeOne === 60) {
        updatesEl1.innerHTML = "Congrats Player One, you found a ladder!  Proceed to Space 67.";
        ladder60();
        ladderRungs60();
    }
    if (placeTwo === 60) {
        updatesEl2.innerHTML = "Congrats Player Two, you found a ladder!  Proceed to Space 67.";
        ladder60();
        ladderRungs60();
    }
    if (placeThree === 60) {
        updatesEl3.innerHTML = "Congrats Player Three, you found a ladder!  Proceed to Space 67.";
        ladder60();
        ladderRungs60();
    }
    if (placeFour === 60) {
        updatesEl4.innerHTML = "Congrats Player Four, you found a ladder!  Proceed to Space 67.";
        ladder60();
        ladderRungs60();
    }
    ////////////////////////////////////////////////////////////
    if (placeOne === 73) {
        updatesEl1.innerHTML = "Congrats Player One, you found a ladder!  Proceed to Space 91.";
        ladder73();
        ladderRungs73();
    }
    if (placeTwo === 73) {
        updatesEl2.innerHTML = "Congrats Player Two, you found a ladder!  Proceed to Space 91.";
        ladder73();
        ladderRungs73();
    }
    if (placeThree === 73) {
        updatesEl3.innerHTML = "Congrats Player Three, you found a ladder!  Proceed to Space 91.";
        ladder73();
        ladderRungs73();
    }
    if (placeFour === 73) {
        updatesEl4.innerHTML = "Congrats Player Four, you found a ladder!  Proceed to Space 91.";
        ladder73();
        ladderRungs73();
    }
    /////////////////////////////////////////////////////////////
    if (placeOne === 80) {
        updatesEl1.innerHTML = "Congrats Player One, you found a ladder!  Proceed to Space 98.";
        ladder80();
        ladderRungs80();
    }
    if (placeTwo === 80) {
        updatesEl2.innerHTML = "Congrats Player Two, you found a ladder!  Proceed to Space 98.";
        ladder80();
        ladderRungs80();
    }
    if (placeThree === 80) {
        updatesEl3.innerHTML = "Congrats Player Three, you found a ladder!  Proceed to Space 98.";
        ladder80();
        ladderRungs80();
    }
    if (placeFour === 80) {
        updatesEl4.innerHTML = "Congrats Player Four, you found a ladder!  Proceed to Space 98.";
        ladder80();
        ladderRungs80();
    }
    // SNAKES ///////////////////////////////
    if (placeOne === 14) {
        updatesEl1.innerHTML = "Oh no, Player One has been caught by a snake!  Go back to Space 7."
        snake14();
    }
    if (placeTwo === 14) {
        updatesEl2.innerHTML = "Oh no, Player Two has been caught by a snake!  Go back to Space 7."
        snake14();
    }
    if (placeThree === 14) {
        updatesEl3.innerHTML = "Oh no, Player Three has been caught by a snake!  Go back to Space 7."
        snake14();
    }
    if (placeFour === 14) {
        updatesEl4.innerHTML = "Oh no, Player Four has been caught by a snake!  Go back to Space 7."
        snake14();
    }
    ///////////////////////////
    if (placeOne === 57) {
        updatesEl1.innerHTML = "Oh no, Player One has been caught by a snake!  Go back to Space 37."
        snake57();
    }
    if (placeTwo === 57) {
        updatesEl2.innerHTML = "Oh no, Player Two has been caught by a snake!  Go back to Space 37."
        snake57();
    }
    if (placeThree === 57) {
        updatesEl3.innerHTML = "Oh no, Player Three has been caught by a snake!  Go back to Space 37."
        snake57();
    }
    if (placeFour === 57) {
        updatesEl4.innerHTML = "Oh no, Player Four has been caught by a snake!  Go back to Space 37."
        snake57();
    }
    //////////////////////////////////
    if (placeOne === 62) {
        updatesEl1.innerHTML = "Oh no, Player One has been caught by a snake!  Go back to Space 12."
        snake62();
    }
    if (placeTwo === 62) {
        updatesEl2.innerHTML = "Oh no, Player Two has been caught by a snake!  Go back to Space 12."
        snake62();
    }
    if (placeThree === 62) {
        updatesEl3.innerHTML = "Oh no, Player Three has been caught by a snake!  Go back to Space 12."
        snake62();
    }
    if (placeFour === 62) {
        updatesEl4.innerHTML = "Oh no, Player Four has been caught by a snake!  Go back to Space 12."
        snake62();
    }
    ////////////////////////////////////////////////
    if (placeOne === 64) {
        updatesEl1.innerHTML = "Oh no, Player One has been caught by a snake!  Go back to Space 51."
        snake64();
    }
    if (placeTwo === 64) {
        updatesEl2.innerHTML = "Oh no, Player Two has been caught by a snake!  Go back to Space 51."
        snake64();
    }
    if (placeThree === 64) {
        updatesEl3.innerHTML = "Oh no, Player Three has been caught by a snake!  Go back to Space 51."
        snake64();
    }
    if (placeFour === 64) {
        updatesEl4.innerHTML = "Oh no, Player Four has been caught by a snake!  Go back to Space 51."
        snake64();
    }
    /////////////////////////////////////////////////////
    if (placeOne === 87) {
        updatesEl1.innerHTML = "Oh no, Player One has been caught by a snake!  Go back to Space 35."
        snake87();
    }
    if (placeTwo === 87) {
        updatesEl2.innerHTML = "Oh no, Player Two has been caught by a snake!  Go back to Space 35."
        snake87();
    }
    if (placeThree === 87) {
        updatesEl3.innerHTML = "Oh no, Player Three has been caught by a snake!  Go back to Space 35."
        snake87();
    }
    if (placeFour === 87) {
        updatesEl4.innerHTML = "Oh no, Player Four has been caught by a snake!  Go back to Space 35."
        snake87();
    }
    /////////////////////////////////////////
    if (placeOne === 88) {
        updatesEl1.innerHTML = "Oh no, Player One has been caught by a snake!  Go back to Space 78."
        snake88();
    }
    if (placeTwo === 88) {
        updatesEl2.innerHTML = "Oh no, Player Two has been caught by a snake!  Go back to Space 78."
        snake88();
    }
    if (placeThree === 88) {
        updatesEl3.innerHTML = "Oh no, Player Three has been caught by a snake!  Go back to Space 78."
        snake88();
    }
    if (placeFour === 88) {
        updatesEl4.innerHTML = "Oh no, Player Four has been caught by a snake!  Go back to Space 78."
        snake88();
    }
    /////////////////////////////////////////
    if (placeOne === 93) {
        updatesEl1.innerHTML = "Oh no, Player One has been caught by a snake!  Go back to Space 72."
        snake93();
    }
    if (placeTwo === 93) {
        updatesEl2.innerHTML = "Oh no, Player Two has been caught by a snake!  Go back to Space 72."
        snake93();
    }
    if (placeThree === 93) {
        updatesEl3.innerHTML = "Oh no, Player Three has been caught by a snake!  Go back to Space 72."
        snake93();
    }
    if (placeFour === 93) {
        updatesEl4.innerHTML = "Oh no, Player Four has been caught by a snake!  Go back to Space 72."
        snake93();
    }
    ////////////////////////////////////////////////////////////
    if (placeOne === 97) {
        updatesEl1.innerHTML = "Oh no, Player One has been caught by a snake!  Go back to Space 76."
        snake97();
    }
    if (placeTwo === 97) {
        updatesEl2.innerHTML = "Oh no, Player Two has been caught by a snake!  Go back to Space 76."
        snake97();
    }
    if (placeThree === 97) {
        updatesEl3.innerHTML = "Oh no, Player Three has been caught by a snake!  Go back to Space 76."
        snake97();
    }
    if (placeFour === 97) {
        updatesEl4.innerHTML = "Oh no, Player Four has been caught by a snake!  Go back to Space 76."
        snake97();
    }


    // PLAYER REACHES 100 //
    function endGame() {
        if (finishedPlayers === 0) {
            placement = "first";
            finishedPlayers++;
        } else if (finishedPlayers === 1) {
            placement = "second";
            finishedPlayers++;
        } else if (finishedPlayers === 2) {
            placement = "third";
            finishedPlayers++;
        } else {
            placement = "fourth";
            finishedPlayers++;
        }
    }

    if (placeOne === 100) {
        playerNum = "One";
        endGame();
        updatesEl1.innerHTML = "Congratulations Player " + playerNum + ", you finished " + placement + "!"
        inputOneEl.value = 105 - finishedPlayers;
    }
    if (placeTwo === 100) {
        playerNum = "Two";
        endGame();
        updatesEl2.innerHTML = "Congratulations Player " + playerNum + ", you finished " + placement + "!";
        inputTwoEl.value = 105 - finishedPlayers;
    }
    if (placeThree === 100) {
        playerNum = "Three";
        endGame();
        updatesEl3.innerHTML = "Congratulations Player " + playerNum + ", you finished " + placement + "!";
        inputThreeEl.value = 105 - finishedPlayers;
    }
    if (placeFour === 100) {
        playerNum = "Four";
        endGame();
        updatesEl4.innerHTML = "Congratulations Player " + playerNum + " you finished " + placement + "!";
        inputFourEl.value = 105 - finishedPlayers;
    }
}


// ALL SNAKES & LADDERS
// snake14();
// snake57();
// snake62();
// snake64();
// snake87();
// snake93();
// snake97();
// snake88();
// ladder4();
// ladderRungs4();
// ladder9();
// ladderRungs9();
// ladder21()
// ladderRungs21();
// ladder28();
// ladderRungs28();
// ladder60();
// ladderRungs60();
// ladder73();
// ladderRungs73();
// ladder80();
// ladderRungs80();

// MODAL (INSTRUCTIONS) DISPLAY
let showBtnEl = document.getElementById("show-btn");
let modalEl = document.getElementById("modal");
let hideBtnEl = document.getElementById("hide-btn")

showBtnEl.addEventListener("click", showModal)
hideBtnEl.addEventListener("click", hideModal)

function showModal() {
    modalEl.style.display = "block";
}

function hideModal() {
    modalEl.style.display = "none";
}
