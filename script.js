const phrases = ["Java Developer", "Frontend Developer"];
let currentPhraseIndex = 0;
let currentText = "";
let typing = true; // true means typing, false means deleting
let charIndex = 0;
const typingElement = document.getElementById("typing");
const typingSpeed = 150; // ms per letter
const deletingSpeed = 80; // ms per letter
const pauseDelay = 1500; // ms pause after typing full phrase

function typeLoop() {
    const fullText = phrases[currentPhraseIndex];

    if (typing) {
        // add next character
        currentText = fullText.substring(0, charIndex + 1);
        typingElement.textContent = currentText;
        charIndex++;

        if (charIndex === fullText.length) {
            // done typing full phrase, pause then start deleting
            typing = false;
            setTimeout(typeLoop, pauseDelay);
        } else {
            setTimeout(typeLoop, typingSpeed);
        }

    } else {
        // deleting characters
        currentText = fullText.substring(0, charIndex - 1);
        typingElement.textContent = currentText;
        charIndex--;

        if (charIndex === 0) {
            // done deleting, move to next phrase
            typing = true;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(typeLoop, typingSpeed);
        } else {
            setTimeout(typeLoop, deletingSpeed);
        }
    }
}

typeLoop(); // start the loop