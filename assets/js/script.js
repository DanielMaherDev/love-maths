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
    else if (gameType === "multiply"){
        displayMultiplyQuestion(num1, num2)

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
incrementScore();
}
else{
    alert(`Aww.. you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`)
    incrementWrongAnswer()
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
    else if (operator.innerText == "x"){
        return [operand1 * operand2, 'multiply'];

    }
    else{
        alert(`Unimplemented operator ${operator}`)
        throw `Unimplemented Operator ${operator}. Aborting! `  }
};
function incrementScore(){
  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = ++oldScore;

};
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;

};
function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
};
function displaySubtractQuestion(operand1, operand2){

};
function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
};

