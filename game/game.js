let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
        let guess = Number(document.getElementById("guess").value);
        let message = document.getElementById("message");
        attempts++;

        if (!guess) {
            message.textContent = "Enter a number";
            return;
        }

        if (guess === randomNumber) {
            message.textContent = " Correct! Attempts: " + attempts;
        } else if (guess > randomNumber) {
            message.textContent = "Too high!";
        } else {
            message.textContent = "Too low!";
        }
    }

    function resetGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        document.getElementById("guess").value = "";
        document.getElementById("message").textContent = "";
    }