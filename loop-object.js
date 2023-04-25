//1. for of can't be use in object 
const bottle = { color: 'blue', isCleaned: true, price: 50, capacity: 2 };

//get keys of object
const keys = Object.keys(bottle);
console.log(keys)

//ways to get object property
// 1. bottle.color; //called dot notation
// 2. bottle['color'];
// 3. bottle[variable];//to use this we have to put key into a variable

//as we got the keys into an array we can use 'for of' for that array
//[N.B: this is not the best practice,we will not use it]
for (const key of keys) {
    // console.log(key);//to get the property
    // console.log(bottle[key]);//to get the property value of bottle object
    // console.log(key, bottle[key]);//to show key and value paralal
}

//for in loop,we will use it mostly
for (const key1 in bottle) {
    // console.log(key1);
    // console.log(bottle[key1]);
    // console.log(key1, bottle[key1]);
}

//advanced
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}