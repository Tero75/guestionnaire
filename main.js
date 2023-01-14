import {Question} from "./myClasses.js"
var currentQuestionID;
var answerIndexes = [];
var questionaire = new Question();

questionaire.question = ["Paljonko kello on?","Ketuttaako?","Onko jotain mielessä?"];
questionaire.answer = ["Aika paljon","Todella paljon","JuuEi"];

document.getElementById("bodyBlock").addEventListener("onload", onStart());
document.getElementById("buttonStart").addEventListener("click", function startQuestionare() {
    StartQuestionnaire();
});
document.getElementById("buttonStartAgain").addEventListener("click", function StartQuestionaireAgain() {
    onStart();
});

function onStart() {
    document.getElementById("questionsBlock").hidden = true;
    document.getElementById("startBlock").hidden = false;
    document.getElementById("endSummary").hidden = true;
}

function ShowEndSummary() {
    document.getElementById("endSummary").hidden = false;
    document.getElementById("questionsBlock").hidden = true;
    document.getElementById("startBlock").hidden = true;
    let table = document.createElement('table');
    for (let i = 0 ;  i  < questionaire.question.length ; i++) { 
        let tr = document.createElement('tr'); 
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');

        let text1 = document.createTextNode(questionaire.question[i]);
        let text2 = document.createTextNode(questionaire.answer[answerIndexes[i]]);

        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
        document.getElementById("endBlock").appendChild(table);  
    }
    
}

function AskNextQuestion() {
    
    document.getElementById("endSummary").hidden = true;
    document.getElementById("questionsBlock").hidden = false;
    document.getElementById("startBlock").hidden = true;

    if(currentQuestionID < questionaire.question.length) {
        showQuestion(questionaire.question);
    } else {
        ShowEndSummary();
    }
} 


function StartQuestionnaire() {
    document.getElementById("questionsBlock").hidden = true;
    document.getElementById("startBlock").hidden = false;
    document.getElementById("endBlock").innerHTML = " ";
    
    currentQuestionID = 0;
    answerIndexes = [];
    
    AskNextQuestion();
}

function showQuestion(question) {
    
    document.getElementById("questionline").innerHTML =  question[currentQuestionID] + "<br>";    
    
    showAnswerOptions(questionaire.answer);
}


function showAnswerOptions(answer) {
    
    for (let i =0; i < answer.length ; i++) {
        
        let button = document.createElement("button");
        button.id = "answerButton"+i;
        button.innerText = answer[i];
        document.getElementById("questionline").appendChild(button);
        button.addEventListener("click", ()=>{
            AnswerButtonClicked(i);
        })     
    }    
}

function AnswerButtonClicked(index) {
    answerIndexes.push(index);
    currentQuestionID++;
    AskNextQuestion();
}
