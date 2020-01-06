/*
Game Function:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
  Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again even listener
game.addEventListener('mousedown', e => {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    console.log(guess);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, you Win!`);
    } else {
        // wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game Over - lost
            gameOver(
                false,
                `Game Over, you lost. The correct number was ${winningNum}`
            );
        } else {
            // game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';

            // clear input
            guessInput.value = '';

            // Tell user its the wrong number
            setMessage(
                `${guess} is incorrect, ${guessesLeft} guesses left`,
                'red'
            );
        }
    }
});

// Game over
function gameOver(won, msg) {
    let color;
    won === true ? (color = 'green') : (color = 'red;');
    //Disable Input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    // set text color
    message.style.color = color;

    setMessage(msg);

    // Play again?
    guessBtn.value = 'Play Again';
    guessBtn.className += `play-again`;
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
