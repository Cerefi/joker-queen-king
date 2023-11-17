const choices = ['joker', 'queen', 'king'];
const jokerBtn = document.querySelector('#joker');
const queenBtn = document.querySelector('#queen');
const kingBtn = document.querySelector('#king');
const cScore = document.querySelector('#computerScore');
const pScore = document.querySelector('#playerScore');
const declare = document.querySelector('.declaration-div');
let computerScore = 0;
let playerScore = 0;

jokerBtn.addEventListener('click', () => {
    round('joker', randomChoice());
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    win();
})

queenBtn.addEventListener('click', () => {
    round('queen', randomChoice);
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    win();
})

kingBtn.addEventListener('click', () => {
    round('king', randomChoice);
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    win();
})


function randomChoice() {
    const random = Math.floor(Math.random()*3);
    return choices[random];
}

function win() {
    if (playerScore === 3) {
        declare.textContent = 'YOU WIN!';
    }
    else if (computerScore === 3) {
        declare.textContent = 'YOU LOSE!';
    }
    return;
}

function round(player, computer) {
    if (player === 'joker') {
        if (computer === 'queen') {
            computerScore++;
        }
        else if (computer === 'king') {
            playerScore++;
        }
    }
    else if (player === 'queen') {
        if (computer === 'joker') {
            playerScore++;
        }
        else if (computer === 'king') {
            computerScore++
        }
    }
    else {
        if (computer === 'king') {
            if (computer === 'joker') {
                computerScore++;
            }
            else if (computer === 'queen') {
                playerScore++;
            }
        }
    }

    return;
}