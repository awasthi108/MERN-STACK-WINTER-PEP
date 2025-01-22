//var city="Delhi";

//console.log(city);

// console.log(country)//undefined
// var country = "India";

//re-assignment is not allowed in const

//----------DATATYPES-----
//__________PRIMITIVE_________-
// String-- ' ', "", ~new String()
// Number--write number
// BigInt--->  x
// Boolean-->true or false
// undefined--->x
// null--->x
// Symbol-->x

//__________-NON PRIMITIVE_____
//object

// let city="delhi";
// let pinCode=12345;
// let isUserDefined=false;
// let object={};
// let array=[];

// console.log(typeof city);
// console.log(typeof pinCode);


// const ans1 = 10 + 30;
// console.log(ans1);

// const ans2 = 10 + "Hello";
// console.log(ans2);

// const city = "Delhi";
// const country = "India";
// if(city==country){
//     console.log("Yes")

// }else{
//     console.log("No");
// }


// const nnS = "99";
// const nN = "99";
// if(nnS==nN){
//     console.log("Yes")

// }else{
//     console.log("No");
// }


//-------------------

// const nnS = "99";
// const nN = 99;
// const yes = true;
// const no = false;
// const one = 1;
// const zero = 1;
// if(nnS===nN){
//     console.log("nnS nN");
// }
// else{
//     console.log("no");
// }
// if(yes===one){
//     console.log("one yes");
// }
// else{
//     console.log("no");
// }
// if(no===zero){
//     console.log("one yes");
// }
// else{
//     console.log("no");
// }

//strict equality(primitive)--->if both have same data types, then compares the values.
//                          --->if values are same then true or false

//-------------------------

//------------------ES6- templete literals
// const city="Delhi";
// const country = "India";
// const greetings1 = "Namaste"
// const ans1 = greetings1 + " " + city + " " + country;
// const ans2 = `${greetings1} ${city}, ${country}`;
// console.log(ans1);
// console.log(ans2);;


//---------------------------------------------------------------------
// const likes = 22;
// const hearts = 34;

// const profileName = "Harshal";
// const sentence = "profile has ";
// const lastWord = "engagements";
// const ans = profileName + " " + sentence + likes + hearts + lastWord;
// console.log(ans);
// const ans2 = `${profileName}'s ${sentence} ${likes + hearts} ${lastWord}`;
// console.log(ans2);
//-----------------------------------------------------------------------

//---------------FUNCTION DECLARATION----------

// function greetings(){
//     console.log("hello");
// }
// greetings();

//------------------------------
//Function Assignment
// const temp = function greetings(){
//     console.log("hello");
// };
// temp();
//it cannot be accessed before intialization(it is how const works)
//--------------------------------
//REDECLARATION IS NOT ALLOWED(IT IS HOW CONST WORKS)
// const temp = function greetings(){
//     console.log("hello");
// };
// const temp = function greetings(){
//     console.log("hello");
// };
//-----------------------------------------------------------

// const linkes = 22;
// const hearts = 34;

// function printDataOnScreen(likes, heaarts, name){//parameters
//     const result = `${name}'s engagements on the page are ${likes + hearts}`;
//     console.log(result);

// }
// printDataOnScreen(33, 44, "Niteesh");
// printDataOnScreen(220, 100, "aashrith");

//-----------BLOCK SCOPE & FUNCTION SCOPE
//scope of Let $ const is "block scope"--->{}
// const greet = () => {
//     if (true){
//     var x = 10;
//     }
//     console.log(x);
// };
// greet();
///-----------------------------------------------------

 //const number = prompt("Please enter a number between 1 and 10");
// if(number%2===0){
//     console.log("Number is even");
// }
// else if(number%3===0){
//     console.log("number is divisible by 3");
// }
// else{
//     console.log("1, 5, 7, 10");
// }

//-----------switch case----------

// switch(number){
//     case 1:{
//         console.log("ONE");
//     }
//     case 2:{
//         console.log("TWO");
//     }
//     default: {
//         console.log("NOT 1, 2, 3");
//     }
// }

//---------------------------------------------------------------------------
// const a = "1.1a";
// const b = "2.1b123";
// const c = "3";
// const d = "4.1";

// const na = parseInt(a);------>1
// const nb = parseInt(b);------>2
// const nc = parseInt(c);------>3
// const nd = parseInt(d);--------->4

// console.log(na, nb, nc, nd);
//////--------------------------------------------------------

//OBJECT IS A KEY VALUE PAIR STORE
// const student = {
//     "name": "Renu",
//     "city": "Delhi",
//     "country": "India",
// };
// console.log(student);
// console.log(student.name);
// console.log(student.stack);

// student.stack="MERN";
// console.log(student);
// console.log(student.stack);

///----------loose equality check for two objects are equal will also check for their reference to be equal
// const student1 = {
//     name: "renu",
//     city: "delhi",
// };
// const student2 = student1;
// if(student1 == student2){
//     console.log("yes");
// }else{
//     console.log("no");
// }
//-----------------------------------
// const car ={
//     engine: 'V8',
//     model: 'E6',
//     brand: 'Audi',
// };
// console.log(car);
// car.model="Square";
// car.mileage= "25";

// const newcar = car;
// console.log(newcar);
// delete newcar.model;
// console.log(newcar);

//example of spread operator:: it is nor deep copy
// const student = {
//     name: "Rajat",
//     city: "Jaipur",
//     university: "ABCD",
//     college: "MNOP"
// };
// const student2 = student;
// student2.name="Rohan";
// console.log(student);
// console.log(student2);
//-----------------------    -------------------------------------

// const car1 ={
//     engine: 'V8',
//     model: 'E6',
//     brand: 'Audi',
// };
// console.log(car1);
// const key = prompt("Enter key:");
// const value= prompt("Enter value:");
// car1.engine=value;
// car1[key]=value;
// console.log(car1);

///----------------------------Array-------------------
// const arrObj = {
//     0:"Raj",
//     1:"Om",
//     2:"Sri",
// };
// console.log(arrObj);
// const arrArr = [
//     "Raj",
//      "Om",
//     "Sri",
// ];
// console.log(arrArr);

// const arr = ["Raj", "Om", "Sri"];
// arr[2] = "Harion";
// console.log(arr);
// arr.push("Hritik");
// console.log(arr);
// arr.splice(1, 1);//to delete. we can also use pop,shift
// console.log(arr);

//----------------------------------------------------
// const arr = ["mango", "apple", "papaya"];
// //how do you check the array length?
// const len = arr.length;
// //how to check if the given thing is array or object?
// console.log(typeof arr);
// console.log(Array.isArray(arr));
// //how to convert array to string
// console.log(arr.toString());
//-----------------------------------------------------------


///---------LOOPS---------------------
const arr = ["mango", "apple", "papaya"];
const obj = {
    0: "mango",
    1: "apple",
    2: "papaya",
    3: "grapes",
};
//get all the keys from object
console.log(Object.keys(obj));
for (let i=0; i <arr.length; i++){
    console.log("For loop on array:", arr[i]);
}
for (let i = 0; i < Object.keys(obj); i++){
    console.log("for loop on obj:", obj[i]);
}

for(let i of arr){//only works for iterables
    console.log("For loop on array:", i)
}

for(let i in arr){//only works for iterables
    console.log("For loop on array:", i)
}

for(let i in obj){//only works for iterables
    console.log("For loop on array:", i)
}