let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result>p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function getcompchoice() {
    const choice = ['r', 'p', 's']
    const value = Math.floor(Math.random() * 3)
    const compresponse = choice[value]
    return (compresponse);

}

function result(value) {
    switch (value) {
        case 'r':
            return ('Rock');
            break;
        case 'p':
            return ('Paper');
            break;
        case 's':
            return ('Scissor');
            break;


    }

}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = 'user'.fontsize(3).sup();
    const smallComp = 'comp'.fontsize(3).sup();
    result_p.innerHTML = `${result(userChoice)}${smallUser} beats ${result(computerChoice)}${smallComp} !! YOU WIN🔥🕹`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const smallUser = 'user'.fontsize(3).sup();
    const smallComp = 'comp'.fontsize(3).sup();
    result_p.innerHTML = `${result(computerChoice)}${smallComp} beats ${result(userChoice)}${smallUser} !! YOU LOSE💩🕹`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500);
}

function tie(userChoice, computerChoice) {
    userScore = userScore;
    computerScore = computerScore;
    result_p.innerHTML = "!!ITS A DRAW🕹🔥"

}

function game(userChoice) {
    const computerChoice = getcompchoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;

        case 'sr':
        case 'rp':
        case 'ps':
            lose(userChoice, computerChoice);
            break;

        case 'rr':
        case 'ss':
        case 'pp':
            tie(userChoice, computerChoice);
            break;

    }

}

function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    })

    paper_div.addEventListener('click', function() {
        game('p');
    })

    scissor_div.addEventListener('click', function() {
        game('s');
    })
}
main()