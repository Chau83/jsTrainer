'use strict';

// let hasDriversLecense = false;
// const passTest = true;

// if (passTest) hasDriversLecense = true;
// if (hasDriversLecense) console.log('I can driver :D');

// const interface ='Audio';
// const private = 534;



//FUNCTION:
/*
function logger() {
    console.log('My name is Chou');
}

// calling / running / onvoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/



//function declaration
/*
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

// Arrow function
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName ) =>{
    const age = 2037 - birthYear;
    const retirement = 65 -age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
function cutFruitPieces(fruit) {
    return fruit*4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces= cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
    return juice;
}
console.log(fruitProcessor(2,3));
*/

/*
const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName ) =>{
    const age = calcAge(birthYear);
    const retirement = 65 -age;

    if(retirement > 0){
        return retirement;
    } else {
        return -1;
    }

    // return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/



//CODE CHALLENGE 1
/*
const calcAverage = (a,b,c) => (a+b+c)/3;
console.log(calcAverage(3,4,5));

//test 1
let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2*avgKoalas){
        console.log(`Dolphins win  (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas>= 2*avgDolphins){
        console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576,111);

//Test2
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/


/*
const friend1= 'Michael';
const friend2= 'Steven';
const friend3= 'Peter';

const friend =['Michael', 'Steven', 'Peter'];
console.log(friend);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friend[0]);

console.log(friend.length);
console.log(friend[friend.length-1]);

friend[2] = 'Jay';
console.log(friend);
// friend = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas =['Chau', 'Nguyen', 2022 - 2003, 'student', friend];
console.log(jonas);
console.log(jonas.length);

//exercise
const calcAge = function(birthYear){
    return 2037 - birthYear
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[years.length -1]);
console.log(age1, age2, age5);

const ages = [];
*/

/*
const friend =['Michael', 'Steven', 'Peter'];

//Add elements
const newLength = friend.push('Jay');
console.log(friend);
console.log(newLength);

friend.unshift('John');
console.log(friend);

//Remove elements
friend.pop(); //last
const popped = friend.pop(); 
console.log(popped);
console.log(friend);

friend.shift(); //first
console.log(friend);

console.log(friend.indexOf('Steven'));

friend.push(23)
console.log(friend.includes('Steven'));
console.log(friend.includes('Bob'));
console.log(friend.includes('23')); //String
console.log(friend.includes(23));

if(friend.includes('Steven')){
    console.log('You have a friend called Steven');
}
*/


//CODE CHALLENGE 2
/*
const calcTip = function(bill){
    return bill >=50 && bill<=300 ? bill *0.15 : bill *0.2;
}
// Use arrow function
//const calcTip = bill => bill >=50 && bill<=300 ? bill *0.15 : bill *0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log(bills, tips, totals);
*/

//Array
/*
const chauArray =[
    'Chau',
    'Nguyen',
    2022-2003,
    'student',
    ['Michael', 'Peter', 'Steven']
];

//Object
const jonas = {
    firstName: 'Nguyen',
    lastName: 'Chau',
    age: 2022-2003,
    jop: 'student',
    friends: ['Michael', 'Peter', 'Steven']
};
*/


/*
const jonas = {
    firstName: 'Nguyen',
    lastName: 'Chau',
    age: 2022-2003,
    jop: 'student',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first'+ nameKey]);
console.log(jonas['last'+ nameKey]);

// console.log(jonas.['last'+ nameKey) //Don't work 

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else{
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

jonas.location = 'Nghe An';
jonas['facebook']= 'Chau Nguyen';
console.log(jonas);

// CHALLENGE
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.lastName} has ${jonas.friends.length} friend, and his best friend is called ${jonas.friends[0]}`);
*/

/*
const jonas = {
    firstName: 'Nguyen',
    lastName: 'Chau',
    age: 19,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){
    //     return 2022 - birthYear
    // }

    // calcAge: function(){
    //     // console.log(this)
    //     return 2022 - this.age;
    //  }

    calcAge: function(){
        this.birthYear = 2022-this.age;
        return 2022 - this.birthYear;
    },

    getSummary: function() {
        return `${this.lastName} is a ${this.age}-year ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(jonas.calcAge());

console.log(jonas.calcAge(jonas.birthYear));
console.log(jonas.calcAge());
console.log(jonas.calcAge());

// console.log(jonas['calcAge'](2003));

//Challenge
//"Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonas.getSummary());
*/



//CODE CHALLENGE
/*
const mark = {
    fullName: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);
if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else{
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}

*/



//LOOP
/*
// console.log('Lifting weights repetition 1 🏋️');
// console.log('Lifting weights repetition 2 🏋️');
// console.log('Lifting weights repetition 3 🏋️');
// console.log('Lifting weights repetition 4 🏋️');
// console.log('Lifting weights repetition 5 🏋️');

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}
*/

/*
const chauArray =[
    'Chau',
    'Nguyen',
    2022-2003,
    'student',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for(let i =0; i < chauArray.length;i++) {
    //Reading from Chau array
    console.log(chauArray[i], typeof chauArray[i]);

    //Filling types array
    // types[i] = typeof chauArray[i];
    types.push(typeof chauArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];


for(let i = 0; i < years.length; i++){
    ages.push(2022 - years[i]);
}
console.log(ages)


//continue and break
console.log('--- ONLY STRING ---');
for(let i = 0; i < chauArray.length; i++){
    if(typeof chauArray[i] !== 'string') continue;

    console.log(chauArray[i], typeof chauArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < chauArray.length; i++){
    if(typeof chauArray[i] === 'number') break;

    console.log(chauArray[i], typeof chauArray[i]);
}
*/


/*
const chauArray =[
    'Chau',
    'Nguyen',
    2022-2003,
    'student',
    ['Michael', 'Peter', 'Steven'],
    true
];

// beginning at 0,1,...
// beginning at ...->0

for(let i= chauArray.length-1; i>=0; i--){
    console.log(i, chauArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++){
    console.log(`------ Starting exercise ${exercise}`);

    for(let rep=1; rep<6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
*/



//WHILE LOOP
// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }
/*
let rep=1;
while (rep<=10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
    rep++;
}

let dice= Math.trunc(Math.random() *6)+1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice= Math.trunc(Math.random() *6)+1;
    if(dice ===6) console.log('Loop is about to end...');
}
*/


//CODE CHALLENGE 4
const calcTip = function(bill){
    return bill >= 50 && bill <=300 ? bill*0.15 : bill*0.2;
}
const bills= [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips =[];
const totals =[];

for(let i=0; i< bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function(arr){
    let sum =0;
    for (let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    // console.log(sum);
    return sum/arr.length
}
console.log(calcAverage([6,2]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
