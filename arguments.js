function sum(a, b, c) {
    //showing arguments in console[N.B: arguments can be access pnly inside the function]
    console.log(arguments)
    const total = a + b + c;
    return total;
}

//the number that send to function at calling function time known as arguments we can access this by just arguments console.
const result = sum(2, 3, 4, 5, 6, 6);
console.log(result);