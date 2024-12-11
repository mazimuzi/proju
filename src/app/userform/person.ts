export class Person {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    passwordConfirmation: string;
    personalId: string;
    termsAccepted: boolean;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.username = '';
        this.password = '';
        this.passwordConfirmation = '';
        this.personalId = '';
        this.termsAccepted = false;
    }
}
