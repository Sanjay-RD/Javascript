console.log('rd');
// alert('danger');
	
// var name =prompt('Enter your name');
// console.log(name);

document.getElementById('changeText').innerHTML = 'sanjay Rd';

function text(){
	console.log('sanjay');
}

text();

// function in javascript


function name(){
	console.log('rd')
}

name();

// function entname(){
// 	var name = prompt("Enter your name")
// 	console.log('your name is'+' '+ name);
// }
// entname();

function nameis(entname){
	console.log('your name is '+' '+ name);
}

// var name = prompt('Enter your Name : ');
// nameis(name);



// while loop
var num = 0;

while(num<100){
	num += 1;
	// console.log(num);
}

// for loop

for (let a=100;a>0;a--){
	// console.log(a);
}

// datatype

// string in javascript
let fruit  = 'baNana';
console.log(fruit);
console.log(fruit.length);
console.log(fruit.indexOf('b'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('nan','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[1]);

let fruit1 = 'banana,apple,mango';
console.log(fruit1.split(','));
console.log(fruit1.split(''));


console.log('sanjay');
// let fruits = 'orange';
// console.log(fruits.length);
// console.log(fruits.toUpperCase());
// console.log(fruits[2]);
// console.log(fruits.split(''));
// console.log(fruits.replace('ra','sa'));
// console.log(fruits);

let fruits = ['orange','apple','mango'];
console.log(fruits);
// console.log(fruits.length);
console.log(fruits.push('blackberry'),fruits);
console.log(fruits.pop('blackberry'),fruits);
for(let i=0;i<fruits.length;i++)
{
	console.log(fruits[i]);
}

let vegetable = ['tomato','cowleflower','brocoli'];
let allgrocerles = fruits.concat(vegetable);
console.log(allgrocerles);
console.log(allgrocerles.reverse());
console.log(allgrocerles.slice(1,4));
console.log(allgrocerles.sort());

let num1 = [3,5,7,9,1,5,0,2];
console.log(num1.sort());

let num = [];
for(let j=0;j<5;j++)
{
	let num3 = prompt('Enter 5 number');
	num.push(num3);
}
console.log(num.sort());



// object in javascript

let student = {
	firts:'sanjay',
	last:'Rishidev',
	age:22,
	height:170,
	studentInfo:function(){
		return this.firts + ' '+ this.last;
	}
}

console.log(student.firts);
// console.log(sanjay.firts + ' '+student.last);
console.log(student.age++);
console.log(student.studentInfo());



// condition

var age = prompt("Enter your Age");
if((age >=18) && (age<=35))
{
	status = 'your are in';
	console.log(status);
}else{
	status = 'you are not in';
	console.log(status);
}

// switch statement



console.log('sanjay');


// using let we can reasigned value

/*let a= 31;
a= 33;
console.log(a);*/

let name = 'sanjay';

console.log(name.length,name.toUpperCase());

console.log(name.split(''));

const fruits = ['apple','mango','orange'];
console.log(fruits);

fruits.push('graps');

console.log(fruits);

// object in js

const person = {
	firstname:'sanjay',
	lastname:'Rd',
	age:25,
	hoddies:['music','programming','sleeping'],
	address:{
		street:'kdafl',
		city:'kathmandu',
		state:'nepal'
	}
};

console.log(person.hoddies[0]);

// const { firstname, lastname} = person;
// console.log(firstname);

const {firstname,lastname,address:{city}} = person;
console.log(city);

// arry of object

const todo = [
	{
		id:1,
		text: 'taking out trash',
		iscompleted:true
	},
	{
		id:2,
		text: 'meeting with boss',
		iscompleted:true
	},
	{
		id:3,
		text: 'checking up',
		iscompleted:false
	}
];

console.log(todo[0].id);

const todoJson = JSON.stringify(todo);
console.log(todoJson);

// loop

// for loop
// for(let i =0 ;i<=10;i++){
// 	console.log(`for loop number: ${i}`);
// }

for(let i =0 ;i<todo.length;i++){
	console.log(todo[i].text);
}

for(let t of todo){
	console.log(t.id);
}

// High Order Array Method
// 1->forEach

todo.forEach(function(t){
	console.log(t.id);
});

// 2->map map is a return type
const todoText = todo.map(function(t){
	return t.text;
});

console.log(todoText);

// 3->Filter

const todoCompleted = todo.filter(function(t){
	return t.iscompleted === true;
}).map(function(t1){
	return t1.text;
})
console.log(todoCompleted);

// If statement
// Double ==
const x1 =10;

if(x1 == 10){
	console.log('x1 is 10');
}

// Triple === it will check data type also

const y = '10';
if(y === 10){
	console.log('y is not 10 it may be string');
}

// multiple if else condition

// const x = prompt("Enter any number");
const x = 10;
if(x === 10){
	console.log('x is equal to 10');
}else if(x>10){
	console.log('x is greater than 10');
}else{
	console.log('x is smaller than 10');
}

const a = 20;

const color = a>10 ? 'red' : 'blue';
console.log(color);

switch(color){
	case 'red':
	console.log('color is red');
	break;
	case 'blue':
	console.log('color is blue');
	break;
	default:
	console.log('color is not red or blue');
	break;
}

class Person{
	constructor(firstName,lastName,dob){
		this.firstName=firstName;
		this.lastName=lastName;
		this.dob = new Date(dob);
	} 
	getBirthYears(){
		return this.dob.getFullYear();
	}
	getFullName(){
		return `${this.firstName} ${this.lastName}`;
	}
}

const person1 = new Person('sanjay','rd','1-2-199');
console.log(person1.getBirthYears());
console.log(person1.getFullName());
console.log(person1);
