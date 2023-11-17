const choices = ['joker', 'queen', 'king'];
const jokerBtn = document.querySelector('#joker');
const queenBtn = document.querySelector('#queen');
const kingBtn = document.querySelector('#king');
const cScore = document.querySelector('#computerScore');
const pScore = document.querySelector('#playerScore');
const declare = document.querySelector('.declaration-div');
const playerDisplay = document.querySelector('#player-display');
const computerDisplay = document.querySelector('#computer-display');
let playerCard = document.createElement('img');
let computerCard = document.createElement('img');
let computerScore = 0;
let playerScore = 0;

jokerBtn.addEventListener('click', () => {
    let rChoice = randomChoice();
    round('joker', rChoice);
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    display('joker', rChoice);
    win();
})

queenBtn.addEventListener('click', () => {
    let rChoice = randomChoice();
    round('queen', rChoice);
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    display('queen', rChoice);
    win();
})

kingBtn.addEventListener('click', () => {
    let rChoice = randomChoice();
    round('king', rChoice);
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    display('king', rChoice);
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

function display(player, computer) {
    if (player === 'joker') {
        playerDisplay.setAttribute('src', '/player-joker.png')
    }
    else if (player === 'queen') {
        playerDisplay.setAttribute('src', '/player-queen.png')
    }
    else {
        playerDisplay.setAttribute('src', '/player-king.png')
    }

    if (computer === 'joker') {
        computerDisplay.setAttribute('src', '/computer-joker.png')
    }
    else if (computer === 'queen') {
        computerDisplay.setAttribute('src', '/computer-queen.png')
    }
    else {
        computerDisplay.setAttribute('src', '/computer-king.png')
    }
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