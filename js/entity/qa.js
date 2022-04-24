//Javascript Class with four attributes:
//1. question
//2. answer
//3. image
//4. userAnswer
class QA {

    constructor(question, answer, image, userAnswer) {
        this.question = question;
        this.answer = answer;
        this.imgURI = image;
        this.userAnswer = userAnswer;
    }

    //getters & setters
    getQuestion() {
        return this.question;
    }

    setQuestion(question) {
        this.question = question;
    }

    getAnswer() {
        return this.answer;
    }

    setAnswer(answer) {
        this.answer = answer;
    }

    getImgURI() {
        return this.imgURI;
    }

    setImgURI(imgURI) {
        this.imgURI = imgURI;
    }

    getUserAnswer() {
        return this.userAnswer;
    }

    setUserAnswer(userAnswer) {
        this.userAnswer = userAnswer;
    }


}