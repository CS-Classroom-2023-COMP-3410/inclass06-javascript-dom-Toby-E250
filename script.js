const randIndex = function(lastIndex) {
    return Math.floor(Math.random() * lastIndex);
}

function restartGame() {
    stopTimer();
    seconds = 0;
    timerRunning = false;
    updateTimerDisplay();

    moves = 0;
    matches = 0;
    first = null;
    second = null;
    locked = false;

    document.getElementById("moveCount").textContent = "Moves = 0";

    deck = shuffle(deck);
    gameDeck = [];

    for (let i = 0; i < 8; i++) {
        gameDeck.push(deck[i]);
    }

    gameDeck = gameDeck.concat(gameDeck);
    gameDeck = shuffle(gameDeck);

    for (let i = 0; i < 16; i++) {
        const card = document.getElementById("card-" + i);
        card.innerHTML = cover;
        card.onclick = handleClick;
    }
}


function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function resetTurn() {
    first = null;
    second = null;
    locked = false;
}

function startTimer() {
    if (timerRunning) return;

    timerRunning = true;
    timer = setInterval(() => {
        seconds++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function updateTimerDisplay() {
    document.getElementById("timer").textContent =
        "Time = " + seconds + "s";
}

const handleClick = function(event) {

    if (locked) return;
    const card = event.target;
    const index = card.id.slice(5);

    if (card === first) {
        return;
    }

    card.innerHTML = gameDeck[index];

    if(!first) {
        if(moves === 0) {
            startTimer();
        }
        first = card;
        return;
    }

    second = card;
    locked = true;
    
    moves++;

    document.getElementById("moveCount").textContent = "Moves = " + moves;
    if (first.innerHTML === second.innerHTML) {
        first.onclick=null;
        second.onclick=null;
        resetTurn();
        matches++;
        
        if (matches === 8) {
            alert("You win!");
            stopTimer();
        }
        
    }


    else{
        setTimeout(() => {
            first.innerHTML = cover;
            second.innerHTML = cover;
            resetTurn();
        }, 800);
    }
}


let deck = [
    
    "&#127137;", // ace of spades
    "&#127138;", // two of spades
    "&#127139;", // three of spades
    "&#127140;", // four of spades
    "&#127141;", // five of spades
    "&#127142;", // six of spades
    "&#127143;", // seven of spades
    "&#127144;", // eight of spades
    "&#127145;", // nine of spades
    "&#127146;", // ten of spades
    "&#127147;", // jack of spades
    "&#127148;", // knight of spades
    "&#127149;", // queen of spades

  
    "&#127153;", // ace of hearts
    "&#127154;", // two of hearts
    "&#127155;", // three of hearts
    "&#127156;", // four of hearts
    "&#127157;", // five of hearts
    "&#127158;", // six of hearts
    "&#127159;", // seven of hearts
    "&#127160;", // eight of hearts
    "&#127161;", // nine of hearts
    "&#127162;", // ten of hearts
    "&#127163;", // jack of hearts
    "&#127164;", // knight of hearts
    "&#127165;", // queen of hearts
    "&#127166;", // king of hearts

  
    "&#127169;", // ace of diamonds
    "&#127170;", // two of diamonds
    "&#127171;", // three of diamonds
    "&#127172;", // four of diamonds
    "&#127173;", // five of diamonds
    "&#127174;", // six of diamonds
    "&#127175;", // seven of diamonds
    "&#127176;", // eight of diamonds
    "&#127177;", // nine of diamonds
    "&#127178;", // ten of diamonds
    "&#127179;", // jack of diamonds
    "&#127180;", // knight of diamonds
    "&#127181;", // queen of diamonds
    "&#127182;", // king of diamonds

  
    "&#127185;", // ace of clubs
    "&#127186;", // two of clubs
    "&#127187;", // three of clubs
    "&#127188;", // four of clubs
    "&#127189;", // five of clubs
    "&#127190;", // six of clubs
    "&#127191;", // seven of clubs
    "&#127192;", // eight of clubs
    "&#127193;", // nine of clubs
    "&#127194;", // ten of clubs
    "&#127195;", // jack of clubs
    "&#127196;", // knight of clubs
    "&#127197;", // queen of clubs
    "&#127198;", // king of clubs

  ];
  
let cover = "&#127136;"; // playing card back

let seconds=0;
let timer=null
let timerRunning=false;

let cardBack = cover;
deck.shift();

let gameDeck = [];
deck = shuffle(deck);

for (let i=0; i<8; i++) {
    gameDeck.push(deck[i]);
}

gameDeck = gameDeck.concat(gameDeck);
gameDeck = shuffle(gameDeck);


let moves=0;
let first=null;
let second=null;
let locked = false;

let clickedCards=[];
let matches=0;

for (let i=0; i<16; i++) {
    document.querySelector('#card-' + i).onclick = handleClick;
}

document.getElementById("restart").onclick = restartGame;