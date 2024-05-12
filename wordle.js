// Yusuf Günay
var height = 6; 
var width = 5; 

var row = 0; 
var col = 0; 

var gameOver = false;

var wordList = ["about" ,  "above" ,  "after"  , "again" ,  "ahead" ,  "allow" ,  "alone" ,  "along" ,  "among" ,  "angle" , "asset" , "badly" , "baker" , "basin" , "bathe" , "beach" , "beard" , "beast" , "bride" , "carry" , "catch" , "cause" , "chart" , "check" , "chief" , "child" , "class" , "clean" , "clear" , "climb" , "close" , "cloth" , "cloud" , "dance" , "death" , "dress" , "drive" , "early" , "earth" , "eight" , "enjoy" , "enter" , "equal" , "every" , "field" , "fight",
    "first" , "floor" , "frame" , "glass" , "grass" , "great" , "greek" , "green" , "group" , "guess" , "happy" , "heard" , "heart" , "heavy" , "horse" , "house" , "human" , "image" , "issue" , "Joint" , "knife" , "knock" , "large" , "later" , "laugh" , "learn" , "least" , "level" , "light" , "major" , "march" , "match" , "maybe" , "metal" , "might" , "money" , "month" , "never" , "night" , "noise" , "north" , "ocean" , "often" , "order" , "other" , "paint",
    "paise" , "paper" , "party" , "pause" , "piece" , "place" , "plain" , "plane" , "plant" , "point" , "pound" , "power" , "quick" , "quiet" , "quite" , "queen" , "raido" , "raise" , "reach" , "ready" , "relax" , "right" , "river" , "round" , "ruler" , "scale" , "score" , "sense" , "serve" , "seven" , "shall" , "shape" , "sharp" , "shoes" , "short" , "shout" , "sight" , "since" , "table" , "their" , "there" , "these" , "thick" , "thing" , "think" ,
    "third" , "those" , "three" , "today" , "total" , "touch" , "track" , "trade" , "train" , "truck",
]

var guessList = ["about" ,  "above" ,  "after"  , "again" ,  "ahead" ,  "allow" ,  "alone" ,  "along" ,  "among" ,  "angle" , "asset" , "badly" , "baker" , "basin" , "bathe" , "beach" , "beard" , "beast" , "bride" , "carry" , "catch" , "cause" , "chart" , "check" , "chief" , "child" , "class" , "clean" , "clear" , "climb" , "close" , "cloth" , "cloud" , "dance" , "death" , "dress" , "drive" , "early" , "earth" , "eight" , "enjoy" , "enter" , "equal" , "every" , "field" , "fight",
"first" , "floor" , "frame" , "glass" , "grass" , "great" , "greek" , "green" , "group" , "guess" , "happy" , "heard" , "heart" , "heavy" , "horse" , "house" , "human" , "image" , "issue" , "Joint" , "knife" , "knock" , "large" , "later" , "laugh" , "learn" , "least" , "level" , "light" , "major" , "march" , "match" , "maybe" , "metal" , "might" , "money" , "month" , "never" , "night" , "noise" , "north" , "ocean" , "often" , "order" , "other" , "paint",
"paise" , "paper" , "party" , "pause" , "piece" , "place" , "plain" , "plane" , "plant" , "point" , "pound" , "power" , "quick" , "quiet" , "quite" , "queen" , "raido" , "raise" , "reach" , "ready" , "relax" , "right" , "river" , "round" , "ruler" , "scale" , "score" , "sense" , "serve" , "seven" , "shall" , "shape" , "sharp" , "shoes" , "short" , "shout" , "sight" , "since" , "table" , "their" , "there" , "these" , "thick" , "thing" , "think" ,
"third" , "those" , "three" , "today" , "total" , "touch" , "track" , "trade" , "train" , "truck",
] 

guessList = guessList.concat(wordList);

var word = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();
console.log(word);

window.onload = function(){
    intialize();
}


function intialize() {

    
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P" , "Ğ" , "Ü" , "⌫"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş" , "İ" , "Enter"],
        [" ", "Z", "X", "C", "V", "B", "N", "M", "Ö" , "Ç" ," " ]
    ]

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("Q" == key || "W" == key || "E" == key || "R" == key || "T" == key || "Y" == key || "U" == key || "I" == key || "O" == key || "P" == key || "Ğ" == key || "Ü" == key || 
            "A" == key || "S" == key || "D" == key || "F" == key || "G" == key || "H" == key || "J" == key || "K" == key || "L" == key || "Ş" == key || "İ" == key || 
            "Z" == key || "X" == key || "C" == key || "V" == key || "B" == key || "N" == key || "M" == key || "Ö" == key || "Ç" == key) {
                keyTile.id = "Key" + key; 
            } 


            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }
    

    
    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
}

function processKey() {
    e = { "code" : this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return; 

    
    if ("KeyQ" == e.code || "KeyW" == e.code || "KeyE" == e.code || "KeyR" == e.code || "KeyT" == e.code || "KeyY" == e.code || "KeyU" == e.code || "KeyI" == e.code || "KeyO" == e.code || "KeyP" == e.code || "KeyĞ" == e.code || "KeyÜ" == e.code ||
    "KeyA" == e.code ||"KeyS" == e.code ||"KeyD" == e.code ||"KeyF" == e.code ||"KeyG" == e.code ||"KeyH" == e.code ||"KeyJ" == e.code ||"KeyK" == e.code ||"KeyL" == e.code || "KeyŞ" == e.code || "Keyİ" == e.code || 
    "KeyZ" == e.code || "KeyX" == e.code || "KeyC" == e.code || "KeyV" == e.code || "KeyB" == e.code || "KeyN" == e.code || "KeyM" == e.code || "KeyÖ" == e.code || "KeyÇ" == e.code) {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "";
    }

    else if (e.code == "Enter") {
        update();
    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = "Game Over , You Lost";
    }
}

function update() {
    let guess = "";
    document.getElementById("answer").innerText = "";

    
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase(); 
    console.log(guess);

   
    
    
    let correct = 0;

    let letterCount = {}; 
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letterCount[letter]) {
           letterCount[letter] += 1;
        } 
        else {
           letterCount[letter] = 1;
        }
    }

    console.log(letterCount);

    
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        
        if (word[c] == letter) {
            currTile.classList.add("correct");

            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            correct += 1;
            letterCount[letter] -= 1; 
        }

        if (correct == width) {
            document.getElementById("answer").innerText = "👑 Congratulations You Won 👑";
            gameOver = true;
        }
    }

    console.log(letterCount);
    
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        
        if (!currTile.classList.contains("correct")) {
            
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                
                let keyTile = document.getElementById("Key" + letter);
                if (!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }
                letterCount[letter] -= 1;
            } 
            else {
                currTile.classList.add("absent");
                let keyTile = document.getElementById("Key" + letter);
                keyTile.classList.add("absent");
                
            }
        }
    }

    row += 1; 
    col = 0; 
}