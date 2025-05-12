const professions = [ "Web Developer",  "Software Engineer",  "Graphics Designer"];

// the span to be popuklated with the current word
const profession = document.getElementById("profession");

let currentWordIndex = 0;
let currentCharIndex = 0;
let currentWord;

/*
0. create an index variable
1. type the next string of the professions list
2. clear the typed string
3.  add 1 to the index if less than the list length, else reset to 0
4. repeat step 1
*/

// this function is responsible for the typing animation
function typingAnimation() {
    currentWord = professions[currentWordIndex];
    const currentWordLength = currentWord.length;
    if(currentCharIndex < currentWordLength) {
        profession.innerHTML += currentWord[currentCharIndex];
        currentCharIndex++;
        setTimeout(typingAnimation, 70)
    } else {
        // wait 3000 miliseconds before deleting the word
        currentCharIndex = 0;
        setTimeout(clearWord, 3000);
    }
}

function clearWord() {
    if(currentWord.length > 0) {
        let tempWord = currentWord.slice(0, -1);
        profession.innerHTML = tempWord;
        currentWord = tempWord;
        setTimeout(clearWord, 40)
    } else {
        currentWordIndex++;
        if(currentWordIndex === professions.length) {
            currentWordIndex = 0;
        }
        typingAnimation();
    }
}

typingAnimation()