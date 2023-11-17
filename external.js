const choices = ['joker', 'queen', 'king'];
const jokerBtn = document.querySelector('#joker');
const queenBtn = document.querySelector('#queen');
const kingBtn = document.querySelector('#king');
const pScore = document.querySelector('.computer-div .score');
const cScore = document.querySelector('.player-div .score')
let computerScore = 0;
let playerScore = 0;

jokerBtn.addEventListener('click', () => {
    round('joker', randomChoice);
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
})

queenBtn.addEventListener('click', () => {
    round('queen', randomChoice);
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
})

kingBtn.addEventListener('click', () => {
    round('king', randomChoice);
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
})


function randomChoice() {
    const random = Math.floor(Math.random()*3);
    return choices[random];
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