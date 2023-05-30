const images = [
    "/card images/image1.jpg",
    "/card images/image2.jpg",
    "/card images/image3.jpg",
    "/card images/image4.jpg",
    "/card images/image5.jpg",
    "/card images/image6.jpg",
    "/card images/image7.jpg",
    "/card images/image8.jpg",
    "/card images/image9.jpg",
    "/card images/image10.jpg",
    "/card images/image11.jpg",
    "/card images/image12.jpg",
    "/card images/image13.jpg",
    "/card images/image14.jpg",
    "/card images/image15.jpg",
    "/card images/image16.jpg",
    "/card images/image17.jpg",
    "/card images/image18.jpg",
    "/card images/image19.jpg",
    "/card images/image20.jpg",
    "/card images/image21.jpg",
    "/card images/image22.jpg",
    "/card images/image23.jpg",
    "/card images/image24.jpg",
    "/card images/image25.jpg",
    "/card images/image26.jpg",
    "/card images/image27.jpg",
    "/card images/image28.jpg",
    "/card images/image29.jpg",
    "/card images/image30.jpg",
    "/card images/image31.jpg"
]
let chosenCards = []
let score = 0

const startGame = ()=> {
    // event.preventDefault();
    const player_name = $("#name").val();
    const card_pairs = $("#difficulty").val();

    //functions to implement for game functionallity:
    initializeCards(card_pairs);
    $(".card").flip(); //initialize flip parameters for each card.
    startTimer();

    $("#menu-section").hide();
    $("#game-section").show();
}

function initializeCards(card_pairs){
    let generatedImages = generateImages(card_pairs);
    for(let i = 0; i < card_pairs * 2; i++){
        let randomNumber = Math.floor(Math.random()*generatedImages.length);
        createCard(generatedImages.splice(randomNumber,1));
    }
}

function generateImages(card_pairs){
    let generatedImages = new Array();
    let alreadyTaken = new Set();

    //Choose random pictures from images array.
    while(alreadyTaken.size < card_pairs){
        let randomNumber = Math.floor(Math.random()*30);
        if(!alreadyTaken.has(randomNumber)){
            alreadyTaken.add(randomNumber);
            generatedImages.push(images[randomNumber]);
            generatedImages.push(images[randomNumber]);
        }
    }
    return generatedImages;
}

function createCard(image){
    container = document.querySelector(".row");
    const newDiv = document.createElement("div");
    newDiv.classList.add("col-4");
    newDiv.classList.add("col-sm-3");
    newDiv.classList.add("col-xl-2");
    newDiv.classList.add("col-xxl-1");
    newDiv.innerHTML = 
    `<div class="card bg-transparent" onclick="revealCard(this)">
        <div class="front position-absolute">
            <img class="w-100 h-100" src="CardBack.png" alt="Fail to load cardBack img">
        </div>
        <div class="back">
            <img class="w-100 h-100" src="${image}" alt="Fail to load hasbulla img">
        </div>  
    </div>`
    newDiv.setAttribute("image-src", image);
    //Later change, set attribute by image name/number instead of default to 1.
    container.appendChild(newDiv);
}

function launchFirework(){
    //Not implemented yet
}

function startTimer(){
    //Not implemented yet
}

const revealCard = (element)=> {
    if(chosenCards.length < 2 && !$(element).hasClass("flipped")){
        $(element).flip();
        $(element).addClass("flipped");
        chosenCards.push(element);
        if(chosenCards.length == 2){
            setTimeout(checkMatch, 1000);
        }
    }
    else{
        $(element).flip(false);
    }
}

function checkMatch() {
    if($(chosenCards[0]).attr("image-src") === $(chosenCards[1]).attr("image-src")) {
        score += 1;
    }else {
        chosenCards.forEach(element => {
            $(element).flip(false);
            $(element).removeClass("flipped");
        });
    }

    chosenCards = [];
}