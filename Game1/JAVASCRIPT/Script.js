const ComputerChoiceDisplay = document.getElementById('computer-choice');
const UserChoiceDisplay =  document.getElementById('user-choice');
const Result =  document.getElementById('result'); 
const PossibleChoices = document.querySelectorAll('button');
let UserChoice;
let ComputerChoice;
let result;

PossibleChoices.forEach(PossibleChoices => PossibleChoices.addEventListener('click',(e) => {
    UserChoice= e.target.id;
    UserChoiceDisplay.innerHTML = UserChoice;
    GenerateComputerChoice();
    getResult();
}))

function GenerateComputerChoice(){
    const RandomNumber = Math.floor(Math.random() * PossibleChoices.length)+ 1
    // console.log(RandomNumber);
    if (RandomNumber === 1){
        ComputerChoice = 'Rock'

    }
    if (RandomNumber === 2){
        ComputerChoice = 'Scissors'
    }
    if (RandomNumber === 3 ){
        ComputerChoice = 'Paper'
    }
    ComputerChoiceDisplay.innerHTML = ComputerChoice;
}


function getResult(){
    if(ComputerChoice === UserChoice){
        result = 'its a draw!'
    }
    if (ComputerChoice === 'Rock' && UserChoice === 'Paper'){
        result = "you win!"
    }
    if (ComputerChoice === 'Rock' && UserChoice === 'Scissors'){
        result = "you lost!" 
    }
    if (ComputerChoice === 'Paper' && UserChoice === 'Scissors'){
        result = "you win!"
    }
    if (ComputerChoice === 'Paper' && UserChoice === 'Rock'){
        result = "you lost!"
    }
    if (ComputerChoice === 'Scissors' && UserChoice === 'Rock'){
        result = "you win!"
    }
    if (ComputerChoice === 'Scisssors' && UserChoice === 'Paper'){
        result = "you lose!"
    }
    // console.log(result);
    Result.innerHTML = result;
}