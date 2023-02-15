function getComputerChoice() {
    const cOptions = ["Rock", "Paper", "Scissors"];
    cInput = cOptions[Math.floor(Math.random() * 3)];
    return cInput;
}
let player = 0;
let computer = 0;
let output = document.querySelector(".output");
let output1 = document.querySelector(".output1");
let rockbtn = document.querySelector(".btn1");
let paperbtn = document.querySelector('.btn2');
let scissorsbtn = document.querySelector('.btn3');
let computerscore = document.querySelector('.score1');
let playerscore = document.querySelector('.score2');
const box1 = document.querySelector('.box1');
console.log(rockbtn);
rockbtn.addEventListener("click", () => {
    const playerSelection = "ROCK";
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
});
paperbtn.addEventListener("click", () => {
    const playerSelection = "PAPER";
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
});
scissorsbtn.addEventListener("click", () => {
    const playerSelection = "SCISSORS";
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
});
function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS") {
        result = "INCORRECT INPUT!!"
    }
    else if (playerSelection == "ROCK" && computerSelection == "Scissors") {
        result = "You Win! Rock beats Scissors";
        player++;
    }
    else if (playerSelection == "PAPER" && computerSelection == "Rock") {
        result = "You Win! Paper beats Rock";
        player++;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "Paper") {
        result = "You Win! Scissors beats Paper";
        player++;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "Rock") {
        result = "You Lose! Rock beats Scissors";
        computer++;
    }
    else if (playerSelection == "ROCK" && computerSelection == "Paper") {
        result = "You Lose! Paper beats Rock";
        computer++;
    }
    else if (playerSelection == "PAPER" && computerSelection == "Scissors") {
        result = "You Lose! Scissors beats Paper";
    }
    else {
        result = "Its a tie";
    }
    output.textContent = result;
    if (player == 5 && computer < 5) {
        f = 1;
        output1.textContent = "Player wins the match";
        rockbtn.disabled = true;
        paperbtn.disabled = true;
        scissorsbtn.disabled = true;

    }
    else if (computer == 5 && player < 5) {
        f = 1;
        output1.textContent = "Computer wins the match";
        rockbtn.disabled = true;
        paperbtn.disabled = true;
        scissorsbtn.disabled = true;
        const name = document.createElement('button');
        name.setAttribute('style', 'width: 200px;height: 100px;font - size: 1.4em;borderRadius: 10px;backgroundColor: aqua; ');
    }
    game();
}
function game() {
    document.getElementById('score1').textContent = player;
    document.getElementById('score2').textContent = computer;
}