function getComputerChoice(){
    const cOptions = ["Rock" , "Paper" , "Scissors"];
    let cInput;
    cInput = cOptions[Math.floor(Math.random() * 3)];
    console.log(cInput);
    return cInput;
}
function playRound(playerSelection,computerSelection)
{
    let result;
    if(playerSelection=="ROCK" && computerSelection=="Scissors")
    {
        result="You Win! Rock beats Scissors";
    }
    else if(playerSelection=="PAPER" && computerSelection=="Rock")
    {
        result="You Win! Paper beats Rock";
    }
    else if(playerSelection=="SCISSORS" && computerSelection=="Paper")
    {
        result="You Win! Scissors beats Paper";
    }
    else if(playerSelection=="SCISSORS" && computerSelection=="Rock")
    {
        result="You Lose! Rock beats Scissors";
    }
    else if(playerSelection=="ROCK" && computerSelection=="Paper")
    {
        result="You Lose! Paper beats Rock";
    }
    else if(playerSelection=="PAPER" && computerSelection=="Scissors")
    {
        result="You Lose! Scissors beats Paper";
    }
    else
    {
        result="Its a tie";
    }
    return result;
}
function game()
{
    for(let i=1;i<=5;i++)
    {
        let playerSelection = prompt ("Enter your choice");
        playerSelection=playerSelection.toUpperCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}
game();