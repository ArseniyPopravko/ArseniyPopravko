let question = document.querySelectorAll('.quest')
let answer_list = document.querySelectorAll('.ans')


class Question{
    constructor(QUESTION, a1, a2, aright){
    this.QUESTION = QUESTION
    this.aright = aright
    this.answers = [
        a1,
        a2,
        aright,
    ]
    display(){
        question.innerHTML = this.QUESTION
        for (let i = 0; i < this.question_list.length; i++){
            answer_list[i].innerHTML = this.question_list[i]
        }
    }
    }}
question_list = [
new Question ('2+3', '5', '6', '7'),
new Question ('2+3', '5', '6', '7'),
new Question ('2+3', '5', '6', '7'),
]

let total_answer = 0
let cur_question = QUESTION[total_answer]
cur_question.display()


        