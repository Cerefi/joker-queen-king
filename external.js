const choices = ['joker', 'queen', 'king']
const jokerBtn = document.querySelector('#joker');

alert(randomChoice());

function randomChoice() {
    const random = Math.floor(Math.random()*3);
    return choices[random];
}