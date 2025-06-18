const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


const selectwinScore = document.querySelector('#winScore')
const reSetButton = document.querySelector('#reSet');


let p1Score = 0;
let p2Score = 0;
let winScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
        if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
    if (player.score === winScore) {
        isGameOver = true;
        player.display.classList.add('has-text-primary')
        opponent.display.classList.add('has-text-danger')
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    }
}

p1.button.addEventListener('click', function() {
    updateScores(p1, p2)
});


p2.button.addEventListener('click', function() {
    updateScores(p2, p1)
});

selectwinScore.addEventListener('change', function() {
    winScore = parseInt(this.value);
    reSet();
});

reSetButton.addEventListener('click', reSet);

function reSet() {
    isGameOver = false;
    for (let p of [p1,p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-primary', 'has-text-danger');
    p.button.disabled = false;
    }
}