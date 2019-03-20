let wordArray = ["TATTOO", "COMMITTEE", "ELECTRICITY"]; // 10 words to be chosen
let definitions = ["an image", "a group of people", "unlimited power"];
let chosenWord = null; // Random word from wordArray
let displayWordArray = []; // Initially a bunch of dashes
let displayString;
let lives = 7;
let score = 0;

document.getElementById("word").innerHTML = chosenWord;
document.getElementById("lives").innerHTML = "Lives: " + lives;
document.getElementById("score").innerHTML = "Score: " + score;

function chooseWord (){
    // chosenWord = wordArray[Math.floor(Math.random() * 10)];
    chosenWord = wordArray[Math.floor(Math.random() * 3)];
    for (let i = 0; i < chosenWord.length; i++){
        displayWordArray.push("_ ");
     displayString = displayWordArray.join('')
    }
}

function check(letter, word){
    for (let i = 0; i < word.length; i++){
        if (word.charAt(i) == letter){
            displayWordArray[i] = letter
        }
    }
}
function generateButtons () {
    for(let i = 0; i < 26; i++){
        btn = document.createElement("button");
        document.body.appendChild(btn);
        btn.innerHTML = String.fromCharCode(65+i);
        btn.onclick = function (){
            check(String.fromCharCode(65+i), chosenWord);
            displayString = displayWordArray.join('');
            document.getElementById('guessString').innerHTML = displayString

        };  
    }
}

function getLetter(letter) {
    console.log(letter)
}
