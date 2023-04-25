
const moynarma = {
    name: 'moyna',
    address: 'dhaka',
    money: 55000,
    subject: ['cse', 'math', 'english', 'psycology'],
    exam: function () {
        return this.name + ' ' + 'is participating in an exam'  //this.subject[0];
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
// const result = moynarma.exam();
// console.log(result);

const tiarma = {
    name: 'tia',
    money: 4000
}

// here tiarma is borrowing method from moynarma
const result2 = moynarma.exam.call(tiarma);
console.log(result2);

//to borrow another method object properties name have to be same
const result3 = moynarma.treatDey.call(tiarma, 200, 20);
console.log(result3);

//call and apply are almost same but different in condition writing
const result4 = moynarma.treatDey.apply(tiarma, [300, 30]);
console.log(result4);