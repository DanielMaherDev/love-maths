document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');
    runGame("addition")
    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            }
            else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType)

            }
        } )
    }
})

/**
 * The main game "loop" called, when a gametype is selected
 */
function runGame(gameType){
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2)
    }
    else{
        alert(`Unknown Game type ${gameType}`)
        throw `Unknown Game type ${gameType}. Aborting!`

    }
};

/**
 * Checks against the first answer
 * in the calculateCorrectAnswer function
 */
function checkAnswer(){
 let userAnswer = parseInt(document.getElementById('answer-box').value);
 let calculatedAnswer = calculateCorrectAnswer();
let isCorrect = userAnswer === calculatedAnswer[0];

if (isCorrect){
alert('Hey, you got it right :D !')
}
else{
    alert(`Aww.. you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`)
}
runGame(calculatedAnswer[1])
};
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator');

    if (operator.innerText == "+"){
        return [operand1 + operand2, 'addition'];
    }
    else{
        alert(`Unimplemented operator ${operator}`)
        throw `Unimplemented Operator ${operator}. Aborting! `  }
};
function incrementScore(){

};
function incrementWrongAnswer(){

};
function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
};
function displaySubtractQuestion(){

};
function displayMultiplyQuestion(){

};

