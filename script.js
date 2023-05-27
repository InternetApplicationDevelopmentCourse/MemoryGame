let chosen_cards = [];
let score = 0;


/**
 * Saves player name and chosen pairs in localStorage.
 * Hides menu screen and launches the game:
 *          Build all page elements (Timer, Name, Button(ResetGame), Container(for cards))
 * Initiate the timer.
 * Link function to 'Play' button.
 */
function startGame(){
    /**
     * Add check if player name is left empty or card pairs number is not chosen.
     * only if both received, allow the rest of the function.
     */
    const player_name = document.querySelector(".player-name");
    const card_pairs = document.querySelector(".card-pairs");
    localStorage.setItem("player_name", player_name);
    localStorage.setItem("card_pairs", card_pairs)

    removeMenu();
    buildGameBoard();
    startTimer();
}

/**
 * Initiates the game counter.
 */
function startTimer(){

}

function buildGameBoard(){
    /**
     * Builds main container with 1 div as a row inside.
     */
    initiateCards();
}

function initiateCards(){

}

function createCard(){
    container = document.querySelector(".row");
    const newDiv = document.createElement("div");
    newDiv.classList.add("col-6");
    newDiv.classList.add("col-sm-3");
    newDiv.classList.add("col-md-2");
    newDiv.classList.add("col-lg-1");
    newDiv.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${image}" class="card-img">
    </div>`
    container.appendChild(newDiv);
}

function buildMenu(){
    /**
     * Removes game-screen
     * Add menu screen
     * Design:
     * <section class="menu-screen">...innerHTML...<section>
     */
    const game_screen = document.querySelector(".game-screen");
    document.removeChild(game_screen);
}

function removeMenu(){
    const menu_screen = document.querySelector(".menu-screen");
    document.removeChild(menu_screen);
}

function launchFirework(){

}



function revealCard(element){
    if(chosen_cards.length < 2 && !element.classList.contains("flipped")){
        element.classList.add("flipped");
        chosen_cards.push(element);
        if(chosen_cards.length === 2){
            setTimeout(checkMatch, 1000);
        }
        console.log(`revealCard chosen card is: ${chosen_cards.length} cards`);
    }
}

function checkMatch(){
    const result = chosen_cards[0].getAttribute("attr_id") === chosen_cards[1].getAttribute("attr_id");
    if(result){
        score++;
    }
    else{
        chosen_cards[0].classList.remove("flipped");
        chosen_cards[1].classList.remove("flipped");
    }
    chosen_cards = [];
}