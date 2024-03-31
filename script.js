let question = document.querySelectorAll('.quest')
let answer_list = document.querySelectorAll('.ans')
let bu1 = document.querySelector('.button')
let answer_input = document.querySelectorAll('.answer_input')

class Question{
    constructor(QUESTION, a1, a2, aright){
    this.QUESTION = QUESTION
    this.aright = aright
    this.a1 = a1
    this.a2 = a2
    this.answers = [
        a1,
        a2,
        aright,
    ]
}
    
}
 let questions = [new Question("1+2", "3", "4", "5"),
 new Question("1+7", "8", "9", "10"),new Question("34+7", "41", "56", "38")]


function display(q, i){
    console.log(q, i)
        question[i].innerHTML = q.QUESTION
        i = i * 3
        answer_list[i].innerHTML += q.a1
        answer_input[i].value = q.a1
        answer_list[i+1].innerHTML += q.a2
        answer_input[i+1].value = q.a2
        answer_list[i+2].innerHTML += q.aright
        answer_input[i+2].value = q.aright

}

for (let i = 0; i < 3; i++){
    display(questions[i], i)
}
question_list = [
"1 вопрос","2 вопрос","3 вопрос",
]

answers = [
"ответ1", "ответ2", "ответ3", "ответ4", "ответ5", "ответ6", "ответ7",
"ответ8", "ответ9",
]

//let total_answer = 0
//let cur_question = QUESTION[total_answer]
//cur_question.display()

true_answers = []
corect_answer = 0

bu1.addEventListener('click', function() {
    let answer_input_1 = document.querySelectorAll('.answer_input')
    console.log(answer_input)
    for (let i = 0; i < answer_input.length; i++){
        if (answer_input_1[i].checked){
            true_answers.push(answer_input[i].value)
        }
    }
    for (let i = 0; i < true_answers.length; i++){
        if (true_answers[i] == questions[i].aright){
            corect_answer += 1
        }
    }
    alert(corect_answer)
    true_answers = []
})




        
