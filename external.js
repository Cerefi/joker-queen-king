const choices = ['joker', 'queen', 'king']
const jokerBtn = document.querySelector('#joker');
const queenBtn = document.querySelector('#queen')
const kingBtn = document.querySelector('#king')




function randomChoice() {
    const random = Math.floor(Math.random()*3);
    return choices[random];
}

function round(player, computer) {
    if (player === 'joker') {
        if (computer === 'queen') {
            computerSCore++;
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