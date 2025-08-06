function getComputerChoice(){
   let com_result = Math.floor(Math.random() * 3);

    switch(com_result){
        case 0 : 
            return "rock";
        case 1 :
             return "paper";
        case 2 :
             return "scissor";
    }
}

function getHumanChoice(){
    let human_result = prompt("Enter your choice (rock,paper,scissor) :")

    return human_result.toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice,computerChoice){
   
    // humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
        console.log("It's a draw!!");
        return 
    }

    else if(humanChoice === "rock" && computerChoice === "scissor"){
        humanScore += 1;
        console.log("You Win!! rock beats scissor")
    }

    else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore += 1;
        console.log("You Lose!! paper beats rock")
    }

    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore += 1;
        console.log("You Win!! paper beats rock")
    }

    else if(humanChoice === "paper" && computerChoice === "scissor"){
        computerScore += 1;
        console.log("You lose!! scissor beats paper")
    }

    else if(humanChoice === "scissor" && computerChoice === "paper"){
        humanScore += 1;
        console.log("You Win!! scissor beats paper")
    }

    else if(humanChoice === "scissor" && computerChoice === "rock"){
        humanScore += 1;
        console.log("You lose!! rock beats scissor")
    }
}

for (let i= 0; i < 5; i++){
   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();

    console.log(`Round ${i+1}: You chose ${humanSelection} , Computer chose ${computerSelection}`);

   playRound(humanSelection, computerSelection);
}

console.log(`Final Score -> You : ${humanScore}, Computer: ${computerScore}`);

if (humanScore > computerScore){
    console.log("🎊Congratulations!!!,You won the game")
}
else if(computerScore > humanScore){
    console.log("Better Luck next time!,You lost the game.")
}
else{
    console.log("The game is Drawn.")
}
}



playGame();