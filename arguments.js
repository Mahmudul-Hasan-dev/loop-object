function sum(a, b, c) {
    //showing arguments in console[N.B: arguments can be access pnly inside the function]
    //arguments is array like object
    //we can use for loop in array like object but we cannot push/pop in array like object
    // console.log(arguments)

    //convert array like object as array by puting it in a variable
    //... means keep all the arguments in there
    const args = [...arguments];
    console.log(args);
    const total = a + b + c;
    return total;
}

//the number that send to function at calling function time known as arguments we can access this by just arguments console.
const result = sum(2, 3, 4, 5, 6, 6);
console.log(result);

// how we can get the parameter of a function
console.log(sum.length)