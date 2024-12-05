export class Question {
    question: string;
    feedback: string = '';
    value: number = 0;

    constructor(question: string) {
        this.question = question;
        this.setFeedback(0);
    }

    setFeedback(value: number) {
        this.value = value;
        if (value <= 33) {
            this.feedback = 'Huono';
        } else if (value <= 66) {
            this.feedback = 'OK';
        } else {
            this.feedback = 'Ei vielä arvosteltu';
        }
    }
}
