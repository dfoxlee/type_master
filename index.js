let wordListWrapper = document.getElementById("word-list-wrapper");
let resetButton = document.getElementById("reset-button");
let startButton = document.getElementById("start-button");
let introSlider = document.getElementById("intro-slider");
let wpm = document.getElementById("wpm");
let time = document.getElementById("time");

let wordList = [];
let letterList = [];
let currentKeyCheckIndex = 0;
let currentRowCheckIndex = 0;
let startTime = 0;
let record = [];
let capsLockIndicator = 0;

let allowableKeys = ["Backspace", "Tab", "Enter", "Shift", "Shift", "CapsLock", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "+", "-", ".", "/","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ";", "=", ",", "-", ".", "/", "`", "[", "\\", "]", "'", "\"", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"];

let checkableKeys = [" ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "+", "-", ".", "/", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ";", "=", ",", "-", ".", "/", "`", "[", "\\", "]", "'", "\"", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"];

function fillWordList() {
    wordList = ["a", "able", "about", "above", "absolute", "accent", "as", "ashamed", "aside", "ask", "asleep", "assist", "associate", "assume", "assure", "at", "background", "bacon", "bad", "bag", "bake", "balance", "ball", "banana", "band", "bang", "bank", "bar", "bare", "beyond", "big", "bike", "bill", "billion", "bin", "bind", "bird", "birth", "biscuit", "bit", "blow", "blue", "board", "boat", "body", "boil", "bomb", "bond", "bone", "book", "branch", "brand", "brave", "bread", "break", "breakfast", "breast", "breath", "breathe", "breed", "brick", "bush", "business", "busy", "but", "butter", "button", "buy", "by", "cable", "cage", "cake", "calculate", "call", "calm", "camera", "chain", "chew", "chicken", "chief", "child", "chip", "chocolate", "choice", "choose", "chop", "Christmas", "church", "cigarette", "coast", "community", "company", "compare", "competition", "complain", "complete", "curl", "current", "customer", "cut", "dad", "damage", "dance", "danger", "desk", "directed", "direction", "dirty", "disappear", "disappoint", "discipline", "discover", "discuss", "disease", "disgust", "dish", "distance", "district", "disturb", "dive", "divide", "divorce", "do", "doctor", "dog", "doll", "dollar", "door", "double", "doubt", "dump", "during", "dust", "duty", "each", "ear", "early", "earn", "earth", "ease", "east", "easy", "eleven", "else", "email", "embarrass", "emotion", "empire", "employ", "empty", "encourage", "end", "enemy", "energy", "engage", "engine", "engineer", "enjoy", "enormous", "enough", "enter", "entertain", "entire", "envelope", "environment", "equal", "equipment", "escape", "especially", "establish", "estate", "flame", "flash", "flat", "flight", "flip", "float", "flood", "floor", "flow", "flower", "fly", "fold", "folk", "follow", "food", "fool", "foot", "football", "for", "force", "foreign", "forest", "forget", "forgive", "form", "forth", "fortnight", "fortunate", "fortune", "forward", "four", "fox", "frame", "frankly", "free", "freeze", "fresh", "Friday", "friend", "fright", "frog", "from", "front", "frost", "fruit", "frustrate", "fry", "full", "fun", "fund", "fur", "furniture", "further", "future", "gain", "game", "garage", "give", "glad", "glance", "glass", "glory", "go", "group", "grow", "guarantee", "guard", "guess", "guest", "guide", "guilty", "gun", "guy", "heap", "hear", "heart", "heat", "heaven", "heavy", "hedge", "height", "hell", "hello", "help", "here", "hero", "hesitate", "hide", "high", "hill", "hire", "history", "hit", "hobby", "hold", "hole", "holiday", "home", "honest", "honey", "honor", "hook", "hope", "ice", "idea", "identify", "idiot", "if", "ignore", "ill", "illustrate", "image", "imagine", "immediate", "important", "impress", "improve", "in", "inch", "include", "income", "increase", "incredible", "indeed", "indicate", "individual", "industry", "influence", "inform", "injure", "innocent", "inside", "insist", "library", "license", "lid", "lie", "life", "lift", "light", "Mrs.", "much", "mud", "mum", "murder", "muscle", "music", "must", "mystery", "nail", "name", "nanny", "nest", "never", "new", "news", "newspaper", "next", "nice", "night", "nine", "no", "nobody", "noise", "non", "none", "nor", "normal", "north", "northern", "nose", "not", "note", "nothing", "notice", "November", "now", "nowhere", "number", "nurse", "nut", "oak", "object", "panic", "paper", "pardon", "parent", "park", "part", "particular", "partner", "party", "pass", "past", "pat", "patch", "path", "patient", "pattern", "pause", "pay", "peace", "pen", "penny", "pension", "pleasant", "please", "pleasure", "plenty", "plug", "plus", "pocket", "poem", "poet", "point", "poison", "pole", "police", "pride", "prime", "prince", "print", "prison", "privacy", "private", "pump", "punch", "punish", "pup", "purchase", "pure", "purple", "purpose", "push", "put", "qualify", "quality", "quarter", "queen", "question", "quick", "quiet", "quit", "quite", "quote", "rabbit", "race", "radio", "rain", "raise", "range", "rapid", "ring", "rip", "rise", "risk", "river", "road", "roar", "rob", "rock", "role", "sad", "safe", "shoot", "shop", "shore", "short", "should", "shoulder", "shout", "shove", "show", "shower", "shut", "shy", "sick", "side", "sight", "sign", "signal", "silence", "silly", "silver", "similar", "simple", "since", "smile", "smoke", "smooth", "snake", "snap", "snow", "so", "social", "society", "species", "specific", "speech", "speed", "spell", "spend", "tone", "tongue", "tonight", "too", "travel", "tray", "treat", "tree", "trial", "type", "typical", "wind", "window", "wine", "wing", "winter", "wipe", "wire", "wise", "wish", "with", "within", "without", "witness", "wolf", "woman", "zero"];
}

function fillLetterList() {
    let tempWordList = wordList;
    let randomWordList = [];

    for(let i=0; i<tempWordList.length; i++) {
        let randomIndex = Math.floor(Math.random()*tempWordList.length);
        let randomWord = tempWordList.splice(randomIndex, 1, false);
        while(randomWord[0] == false) {
            randomIndex = Math.floor(Math.random()*tempWordList.length);
            randomWord = tempWordList.splice(randomIndex, 1, false);
        }

        randomWordList.push(randomWord[0]);
    }

    let randomWordJoin = randomWordList.join(" ");
    letterList = randomWordJoin.split("");
}

function slideIntro() {
    if(introSlider.style.left == "100vw") {
        return;
    }
    introSlider.style.left = "100vw";
}

function fillWordListWrapper() {
    let currentLetterIndex = 0;
    let currentRowIndex = 0;

    while(currentLetterIndex < letterList.length) {
        let letterRow = document.createElement("div");
        letterRow.classList.add("letter-row");
        letterRow.id = "letter-row-" + currentRowIndex.toString();

        let newRowBool = false;
        let currentLetterRowIndex = 0;

        while(!newRowBool) {
            let letterWrapper = document.createElement("div");
            letterWrapper.classList.add("letter-wrapper");
            letterWrapper.id = "letter-wrapper-" + currentLetterIndex.toString();

            let letterOverlay = document.createElement("div");
            letterOverlay.classList.add("letter-overlay");
            letterOverlay.id = "letter-overlay-" + currentLetterIndex.toString();
            if(currentLetterIndex == 0) {
                letterOverlay.classList.add("active-overlay");
            }

            let letter = document.createElement("span");
            letter.classList.add("letter");
            letter.id = "letter-" + currentLetterIndex.toString();
            if(letterList[currentLetterIndex] == " ") {
                letter.innerHTML = "&#160;";
            }else {
                letter.innerText = letterList[currentLetterIndex];
            }

            letterWrapper.appendChild(letterOverlay);
            letterWrapper.appendChild(letter);
            letterRow.appendChild(letterWrapper);

            if(letterList[currentLetterIndex] == " " && currentLetterRowIndex > 60) {
                newRowBool = true;
                currentLetterIndex++;
                currentLetterRowIndex++;
                if(currentLetterIndex >= letterList.length) {
                    return;
                }
            }else {
                currentLetterIndex++;
                currentLetterRowIndex++;
                if(currentLetterIndex >= letterList.length) {
                    return;
                }
            }
        }
        if(currentRowIndex > 2) {
            letterRow.style.display = "none";
        }
        wordListWrapper.appendChild(letterRow);
        currentRowIndex++;
    }
}

function startGame() {
    slideIntro();
    fillWordList();
    fillLetterList();
    fillWordListWrapper();
}

startButton.addEventListener("click", startGame);

function clearWordListWrapper() {
    while(wordListWrapper.firstChild) {
        wordListWrapper.removeChild(wordListWrapper.lastChild);
    }
}

function resetGame() {
    wordList = [];
    letterList = [];
    currentKeyCheckIndex = 0;
    currentRowCheckIndex = 0;
    record = [];
    startTime = 0;
    
    wpm.innerText = 0;
    
    clearWordListWrapper();
    fillWordList();
    fillLetterList();
    fillWordListWrapper();
}

resetButton.addEventListener("click", resetGame);

function handleRowDisplay() {
    let currentKeyWrapperId = "letter-wrapper-" + currentKeyCheckIndex.toString();
    let currentKeyWrapper = document.getElementById(currentKeyWrapperId);
    let currentKeyWrapperParentId = currentKeyWrapper.parentNode.id;
    let expectedRowId = "letter-row-" + currentRowCheckIndex.toString();

    if(currentKeyWrapperParentId != expectedRowId) {
        let allRows = document.getElementsByClassName("letter-row");
        for(let row of allRows) {
            row.style.display = "none";
        }

        currentRowCheckIndex = parseInt(currentKeyWrapperParentId.slice("letter-row-".length));
        let currentRowCheckId = "letter-row-" + currentRowCheckIndex;
        let currentRowCheckIndex1 = currentRowCheckIndex + 1;
        let currentRowCheckId1 = "letter-row-" + currentRowCheckIndex1;
        let currentRowCheckIndex2 = currentRowCheckIndex + 2;
        let currentRowCheckId2 = "letter-row-" + currentRowCheckIndex2;

        document.getElementById(currentRowCheckId).style.display = "flex";
        document.getElementById(currentRowCheckId1).style.display = "flex";
        document.getElementById(currentRowCheckId2).style.display = "flex";
    }
}

function updateActiveWPM() {
    const d = new Date();
    let timeElapsedSinceStart = d.getTime() - startTime;
    let correct = 0;
    record.forEach((e) => {correct += e});
    let uncorrected = 0;
    record.forEach((e) => {
        if(e == 0) {
            uncorrected++;
        }
    });
    let totalTyped = currentKeyCheckIndex + 1
    let grossWPM = ((currentKeyCheckIndex / 5) / timeElapsedSinceStart) * 60000;
    let newWPM = grossWPM - (uncorrected / timeElapsedSinceStart) * 60000;
    wpm.innerText = Math.floor(newWPM);
}

function lightKeyboard(event) {
    if(allowableKeys.indexOf(event.key) != -1) {

    }
}

function handleKeydownEvent(event) {
    event.preventDefault();
    handleRowDisplay();
    
    if(startTime == 0) {
        const d = new Date();
        startTime = d.getTime();
    }

    if(event.key == "Backspace") {
        if(currentKeyCheckIndex == 0) {
            return;
        }else {
            let currentKeyOverlayId = "letter-overlay-" + currentKeyCheckIndex.toString();
            let currentKeyOverlay = document.getElementById(currentKeyOverlayId);
            currentKeyOverlay.classList.remove("active-overlay");
            record.splice(-1);
            updateActiveWPM();
            currentKeyCheckIndex--;
            currentKeyOverlayId = "letter-overlay-" + currentKeyCheckIndex.toString();
            currentKeyOverlay = document.getElementById(currentKeyOverlayId);
            currentKeyOverlay.className = "letter-overlay active-overlay";
        }
    }else if(event.key == "Shift") {
        return;
    }else if(letterList[currentKeyCheckIndex] == event.key && allowableKeys.indexOf(event.key) != -1) {
        let currentKeyOverlayId = "letter-overlay-" + currentKeyCheckIndex.toString();
        let currentKeyOverlay = document.getElementById(currentKeyOverlayId);
        currentKeyOverlay.classList.remove("active-overlay");
        currentKeyOverlay.classList.add("correct-overlay");
        record.push(1);
        updateActiveWPM();
        currentKeyCheckIndex++;
        currentKeyOverlayId = "letter-overlay-" + currentKeyCheckIndex.toString();
        currentKeyOverlay = document.getElementById(currentKeyOverlayId);
        currentKeyOverlay.classList.add("active-overlay");
    }else if(letterList[currentKeyCheckIndex] != event.key && allowableKeys.indexOf(event.key) != -1) {
        let currentKeyOverlayId = "letter-overlay-" + currentKeyCheckIndex.toString();
        let currentKeyOverlay = document.getElementById(currentKeyOverlayId);
        currentKeyOverlay.classList.remove("active-overlay");
        currentKeyOverlay.classList.add("incorrect-overlay");
        record.push(0);
        updateActiveWPM();
        currentKeyCheckIndex++;
        currentKeyOverlayId = "letter-overlay-" + currentKeyCheckIndex.toString();
        currentKeyOverlay = document.getElementById(currentKeyOverlayId);
        currentKeyOverlay.classList.add("active-overlay");
    }else {
        return;
    }
}

window.addEventListener("keydown", handleKeydownEvent);

