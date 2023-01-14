export  class Question
{
    question = [];
    answer = [];
    
    constructor(question = [], answer = [])
    {
        this.answer = answer;
        this.question = question;
    }

    getQuestion()
    {
        return this.question;
    }

}