var pc = 0;
var QuestionNum = []

const Questions = [{
    id: 0,
    question: 'Who is the main character?',
    answers: [
        {text: 'Donquixote Doflamingo', correct: false},
        {text: 'Monkey D. Luffy', correct: true},
        {text: 'Roronoa Zoro', correct: false},
        {text: 'Buggy', correct: false}
    ]},
{
    id: 1,
    question: 'Who is the world strongest swordsmen?',
    answers: [
        {text: 'Arlong', correct: false},
        {text: 'Shanks', correct: false},
        {text: 'Gecko Moria', correct: false},
        {text: 'Dracule Mihawk', correct: true}
    ],
},
{
    id: 2,
    question: 'What is the only sword Zoro kept from the beginning of the series?',
    answers: [
        {text: 'Sandai Kitetsu', correct: false},
        {text: 'Enma', correct: false},
        {text: 'Wado Ichimonji', correct: true},
        {text: 'Yoru', correct: false}
    ],
},
{
    id: 3,
    question: 'Who is Gol D. Rogers son?',
    answers: [
        {text: 'Ace', correct: true},
        {text: 'Sabo', correct: false},
        {text: 'Luffy', correct: false},
        {text: 'Sanji', correct: false}
    ],
},
{
    id: 4,
    question: 'How many swords does zoro use',
    answers: [
        {text: '1', correct: false},
        {text: '2', correct: false},
        {text: '3', correct: true},
        {text: '4', correct: false}
    ],
},
]

var start = true;

function iterate(id){
    var result = document.getElementsByClassName("result");
    result[0].innerText = '';

    const question = document.getElementById("question");
  
  
    // Setting the question text
    question.innerText = Questions[id].question;
  
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
  
  
    // Providing option text 
    op1.innerText = Questions[id].answers[0].text;
    op2.innerText = Questions[id].answers[1].text;
    op3.innerText = Questions[id].answers[2].text;
    op4.innerText = Questions[id].answers[3].text;
  
    // Providing the true or false value to the options
    op1.value = Questions[id].answers[0].correct;
    op2.value = Questions[id].answers[1].correct;
    op3.value = Questions[id].answers[2].correct;
    op4.value = Questions[id].answers[3].correct;
  
    var selected = "";
  
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
  
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
  
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
  
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })
  
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
  
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = Questions[id].question + " = True";
            result[0].style.color = "green";
            QuestionNum.push(Questions[id]++)
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}
  
if (start) {
    iterate("0");
}
  
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 4) {
        id++;
        iterate(id);
        console.log(id);
    }
    if(id = 4){
    }
})