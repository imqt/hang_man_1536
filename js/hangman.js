let wordArray = ["TATTOO", "COMMITTEE", "ELECTRICITY"]; // 10 words to be chosen
let definitions = ["an image", "a group of people", "unlimited power"];
let chosenWord = null; // Random word from wordArray
let displayWordArray = []; // Initially a bunch of dashes
let displayString;
let lives = 7;
let score = 0;
let count = 0;

document.getElementById("lives").innerHTML = "Lives: " + lives;
document.getElementById("score").innerHTML = "Score: " + score;

function chooseWord() {
    // chosenWord = wordArray[Math.floor(Math.random() * 10)];
    random = Math.floor(Math.random() * 3);
    chosenWord = wordArray[random];
    definition = definitions[random];
    document.getElementById("definition").innerHTML = definition;
    for (let i = 0; i < chosenWord.length; i++) {
        displayWordArray.push("_ ");
        displayString = displayWordArray.join('');
    }
}

function check(letter, word) {
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == letter) {
            displayWordArray[i] = letter;
            count++;
            score++;
        }
    }
    if (count == 0) {
        score--;
        lives--;
    }
    if (word == displayWordArray) {
        document.getElementById("gameover").innerHTML = "You win!";
    }
}

function generateButtons() {
    for (let i = 0; i < 26; i++) {
        btn = document.createElement("button");
        document.body.appendChild(btn);
        btn.innerHTML = String.fromCharCode(65 + i);
        let allButtons = document.querySelectorAll("button");
        allButtons[i].id = i;
        allButtons[i].className = "letters";
        btn.onclick = function () {
            document.getElementById(i).disabled = true;
            check(String.fromCharCode(65 + i), chosenWord);
            displayString = displayWordArray.join('');
            document.getElementById('guessString').innerHTML = displayString;
            document.getElementById("lives").innerHTML = "Lives: " + lives;
            document.getElementById("score").innerHTML = "Score: " + score;
            gameStatus(chosenWord);
        }
    }
    restart_btn = document.createElement("button");
    document.getElementById("restart").appendChild(restart_btn);
    restart_btn.innerHTML = "Restart";
    restart_btn.onclick = restartGame;
}

function getLetter(letter) {
    console.log(letter);
}

function displayScore() {
    name = prompt('Enter your name:');
    console.log(name, score);
    document.getElementById('display').innerHTML = name + ', your score is ' + score;
}

function gameStatus(chosenWord) {
    if (lives == 0) {
        document.getElementById("gameover").innerHTML = "You died! Game over.";
        displayScore();
    }
    if (chosenWord == displayString) {
        document.getElementById("gameover").innerHTML = "You win!";
        let buttons = document.getElementsByClassName("letters");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        setTimeout(displayScore, 0);
    }
}

function restartGame() {
    lives = 7;
    score = 0;
    count = 0;
    displayWordArray = [];
    document.getElementById('display').innerHTML = "";
    document.getElementById("gameover").innerHTML = "";
    chooseWord();
    let buttons = document.getElementsByClassName("letters");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
    document.getElementById("lives").innerHTML = "Lives: " + lives;
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById('guessString').innerHTML = displayString;
}

chooseWord();
document.getElementById('guessString').innerHTML = displayString
generateButtons();