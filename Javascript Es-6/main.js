//1. arrow function
// using regular function
function arrowFunctionExample1(){
	console.log('Example');
}

arrowFunctionExample1();

// using arrow function
arrowFunctionExample2=(name)=>{
	console.log(`my name is ${name}`);
}

arrowFunctionExample2('sanjay');

// 2.spread Operator
// it is used to copy the element in above example using spread Operator we can get the single array ie[1,2,3,4] .if we don't use spread Operator we wil get ie[[1,2,3],4] array of array
const arr1=[1,2,3];
const arr2 = [...arr1,4];
console.log(arr2);

const person1={
	name:'sanjay',
	age:23
}

const person2={
	...person1,
	email:'rishidevsanjay9@gamil.com'
}

console.log(person2);

// 3.Destructuring
// it is used to assign the value which make your code easier
const person3 = {
	name:'sanjay',
	hobbies:['playing game','reading','programming'],
	location:{
		street:'gaurighat chok',
		city:'ktm'
	}
}

const { street,city } = person3.location;

console.log(street,city);

// 4.classes
class person4{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	hello(){
		return `hello my name is ${this.name} and i am ${this.age} years old`;
	}
}

// const person5 = new person4('Bob',12);
// const person6 = new person4('jeff',32)
// console.log(person5.hello());
// console.log(person6.hello());


// 5.subclass
class person7 extends person4{
	constructor(name,age,salary){
		super(name,age);
		this.salary=salary;
	}
	info(){
		return `Mr ${this.name} earns Rs.${this.salary} per month`;
	}
}

const person8 = new person7('sanjay',32,44444);
console.log(person8.info());