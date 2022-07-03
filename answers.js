const quizform = document.querySelector(".quiz-form");
const button = document.querySelector("#answer");
const marks = document.querySelector(".marks");

const correct_answer = ["90", "right-angled", "Equilateral", "85", "no"];

const checkAns = () =>{
    let score = 0;
    let index = 0;
    const formentries = new FormData(quizform);
    for (let value of formentries.values()){
        if(value === correct_answer[index]){
            score += 2;
        }
        index += 1;
    }

    marks.innerText = "Your score is :- " + score;
};

button.addEventListener("click",checkAns, false);