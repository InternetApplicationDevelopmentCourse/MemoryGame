



/**
 * Saves player name and chosen pairs in localStorage.
 * Hides menu screen and launches the game:
 *          Build all page elements (Timer, Name, Button(ResetGame), Container(for cards))
 * Initiate the timer.
 * Link function to 'Play' button.
 */
// function startGame(){
//     /**
//      * Add check if player name is left empty or card pairs number is not chosen.
//      * only if both received, allow the rest of the function.
//      */
//     const player_name = document.querySelector(".player-name");
//     const card_pairs = document.querySelector(".card-pairs");
//     localStorage.setItem("player_name", player_name);
//     localStorage.setItem("card_pairs", card_pairs)

//     removeMenu();
//     buildGameBoard();
//     startTimer();
// }

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

let chosenCards = []
let score = 0

// function revealCard(element) {
//     if(chosenCards.length < 2 && !element.classList.contains("flipped")){
//         element.classList.add("flipped");
//         chosenCards.push(element);
//         checkMatch();
//     }
    
// }




// $("#game-section").hide();
$("#menu").hide();

const startGame = ()=> {
    // event.preventDefault();
    const player_name = $("#name").val();
    const card_pairs = $("#difficulty").val();
}

const onLoad = () => {
    // $("#game-section").hide();
    // $("#menu").show();
    $("#menu").hide();
    $("#game-section").show();

    $(".card").flip();
    $(".card").flip();
}

const flipCard = (element)=> {
    if(chosenCards.length < 2 && !$(element).hasClass("flipped")){
        revealCard(element);
    }else {
        hideCard(element);
    }
}

const revealCard = (element)=> {
    console.log($(element).hasClass("flipped") , chosenCards.length);
    if(chosenCards.length < 2 && !$(element).hasClass("flipped")){
        console.log(element);
        $(element).flip();
        $(element).addClass("flipped");
        chosenCards.push(element);
        if(chosenCards.length == 2){
            setTimeout(checkMatch, 1000);
        }
    }
}

const hideCards = ()=> {
    console.log("hide cards");
    chosenCards.forEach(element => {
        $(element).flip(false);
        $(element).removeClass("flipped");
    });
    chosenCards = [];
}

function checkMatch() {
    if($(chosenCards[0]).attr("attr_id") === $(chosenCards[1]).attr("attr_id")) {
        score += 1;
    }else {
        hideCards();
    }

    chosenCards = [];
}