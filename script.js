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
             return "scissors";
    }
}

// console.log(getComputerChoice());

function getHumanChoice(){
    let human_result = prompt("Enter your choice (rock,paper,scissor) :")

    return human_result.toLowerCase();
}

// console.log(getHumanChoice());