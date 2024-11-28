//How to Convert number to string
// let number = 20
// let str = String(number)
// console.log(typeof number);
// console.log(typeof str);

//How to Convert string to number
let str = "Madhav"
let number = Number(str)

//If string is number it will converted 
// If string is words it will converted into NaN(Not a Number)
// typeof NaN is number
// console.log(typeof number);


//Simple Conversion

// console.log(2 >= 1);
// console.log(2 >= 0);
// console.log(2 >= 10);

//Conversion when data types are different

// console.log("2" > 1);
// console.log(2 > "1");
// console.log("3" > "1");

// Always ignore this type of conversion just because unpreditable output
//Case 1:- console.log("Zero" >= 1)  Gives False as it Converted into (NaN >= 1)


// Conversion with null
// console.log(null >= 0);
// console.log(null == 0);

//Comparison (like < , > ) works different from Equality (==) check operator
//1. Comparison operator converts null into 0
//2. Equality check operator converts null into NaN

//One Glitch of Javascript

// console.log(null);
// console.log(undefined)

// console.log(typeof null);
// console.log(typeof undefined)


//conversion with undefined
// console.log(undefined == 0);
// console.log(undefined >= 0);






