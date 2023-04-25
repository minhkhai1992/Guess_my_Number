

// (random from 0 - 49) + 1
let secretNumber = Math.trunc(Math.random() * 50) + 1;

let score = 50;
let highscore = 0;


const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('🙄 No Number!');

        // when player win
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');


        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // too high
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '👍 Too High!' : '👎 Too Low!';
            displayMessage(guess > secretNumber ? '👍 Too High!' : '👎 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = '🤨 You Lost the Game!';
            displayMessage('🤨 You Lost the Game!');
        }
    }
});


document.querySelector('.again').addEventListener('click', () => {

    secretNumber = Math.trunc(Math.random() * 50) + 1;
    score = 50;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})