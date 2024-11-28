//VAR
//Its Not Recommended
//Do not use var due to limitation of scope

var number = 10;
console.log(number);

//var can both Redefined and Redeclared


//LET
//let has the scope limitation so its always recommended to use let

let name = "Madhav"
console.log(name)

// let should redefined but not support redeclaration
//Case-1 :-

// let a = 20
//let a = 30 (Gives Error)

//Case:-2 :-

//let a = 20
//var a = 20 (Gives Error)

//CONST
//const is constant and can never be changed once initialized 

const age = 20
console.log(age)

//const never support redeclaration and redefinition

//Rule-1:- It is neccesary to initialize the const at the time of declaration
 // const a;(Gives Error)

 // const a = 20
 // a = 30(Gives Error)