// you can write js here

const humanchoice = document.getElementById('user');
const robotchoice = document.getElementById('computer');
const result = document.getElementById('result');

const getUserChoice = () => {
    let userInput = prompt('Rock , paper or scissors ?')
    userInput.toLowerCase();
    humanchoice.value = userInput;
    if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
        return userInput;
    } else if (userInput === 'bomb'){
        return userInput;
    } else {
        console.log('Enter rock, paper or scissors');
    }
}

const getComputerChoice = () => {
    let number = Math.floor(Math.random() * 3);
    let choice = ""

    switch(number){
        case 0:
            choice = "rock";
            break;
        case 1 :
            choice = "paper";
            break;
        case 2 : 
            choice = "scissors";
            break;
    }
    robotchoice.value = choice;
    return choice;
}

const determineWinner = (userChoice, computerChoice) => {
    computerChoice.toLowerCase();
    if (userChoice == computerChoice){
        result.value = 'Tied';
    } else if (userChoice !== computerChoice) {
        if (userChoice === 'rock') {
            if (computerChoice === 'Scissors') {
                result.value = 'User won !';
            } else {
                result.value = 'User lost !';
            }
        }

        if (userChoice === 'paper'){
            if (computerChoice === 'Rock'){
                result.value = 'User won !';
            } else {
                result.value = 'User lost !';
            }
        }

        if (userChoice === "scissors"){
            if(computerChoice === 'Paper'){
                result.value = 'User won !';
            } else {
                result.value = 'User lost !';
            }
        }

        if (userChoice === 'bomb'){
            result.value = 'User won !';
        }
    }
}

const playGame = () => {
    let userchoice = getUserChoice();
    let computerChoice = getComputerChoice();
    determineWinner(userchoice, computerChoice);
}

playGame();