let humanScore = 0;
let computerScore = 0;

console.log("Human: ",humanScore);
console.log("Computer: ",computerScore);

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

// console.log(getComputerChoice());

function getHumanChoice(){
    let human_result = prompt("Enter your choice (rock,paper,scissor) :")

    return human_result.toLowerCase();
}

// console.log(getHumanChoice());

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

const human = getHumanChoice();
const computer = getComputerChoice();

playRound(human,computer);

console.log(`scores -> Human: ${humanScore},Computer: ${computerScore}`)