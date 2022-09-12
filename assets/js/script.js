document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');
    runGame("addition")
    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit!")
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
function checkAnswer(){

};
function calculateCorrectAnswer(){

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

