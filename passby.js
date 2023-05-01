//primitive types pass by value
let num1 = 5;
let num2 = 7;

function multiply(a, b) {
    a = 2;
    const result = a * b;
    return result;
}
//a value stay same before and after calling function
console.log(num1);
const output = multiply(num1, num2);
console.log(output);
console.log(num1);

//pass by reference:object and array pass by reference

const student1 = { name: 'jalil', partner: 'borsha' }
const student2 = { name: 'raj', partner: 'anika' }

function makeMovie(couple1, couple2) {
    couple1.name = 'anonto';
    couple2.partner = 'mim';
}

//changes before and after calling function
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);
