// console.log(this);

const moynarma = {
    name: 'moyna',
    address: 'dhaka',
    money: 55000,
    subject: ['cse', 'math', 'english', 'psycology'],
    exam: function () {
        // this in a method of object refer to the object of that method(for normal function)
        console.log(this);
        return this.name + ' ' + 'is participating in an exam'  //this.subject[0];
    },
    examArrow: () => {
        //this in arrow function method will refer to global method window
        console.log(this);
    },
    improveExam: function (subject) {
        //a  method can be called in another method
        const exam = console.log(this.exam());
        const statement = `${this.name} is taking improvement exam on ${subject}`
        return exam, statement;

    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }

}

moynarma.exam();
moynarma.examArrow();