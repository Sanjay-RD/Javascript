const companies = [
	{name: "conpany One",category: "Finance",start:1981,end:2003},
	{name: "conpany Two",category: "Retail",start:1992,end:2008},
	{name: "conpany Three",category: "Auto",start:1999,end:2007},
	{name: "conpany Four",category: "Retail",start:1989,end:2010},
	{name: "conpany Five",category: "Technology",start:2009,end:2014},
	{name: "conpany Six",category: "Finance",start:1987,end:2010},
	{name: "conpany Seven",category: "Auto",start:1986,end:1996},
	{name: "conpany Eight",category: "Technology",start:1911,end:2016},
	{name: "conpany Nine",category: "Retail",start:1981,end:1989},
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];


// 1. for Each loop
// console.log(companies[0].name);

// first for loop
for(let i = 0; i< companies.length; i++){
	console.log(companies[i].name);
}

// for Each loop
companies.forEach(function(company){
	console.log(company.category);
});


// 2.Filter
/*
let canDrink = [];
for(let i=0;i<ages.length;i++){
	if(ages[i]>=21){
		canDrink.push(ages[i]);
	}
}
console.log(canDrink);

// Filter 
const canDrink = ages.filter(function(age){
	if(age>=21){
		return true;
	}
});
console.log(canDrink);

const canDrink = ages.filter(age => age>=21);
console.log(canDrink);
*/

const retailCompany = companies.filter(retail => (retail.category === 'Retail'));
console.log(retailCompany);	

const eightiesCompanies = companies.filter
(eighties => (eighties.start >= 1980 && 
	eighties.end <= 1990));
console.log(eightiesCompanies);	


const tenYearsCompanies = companies.filter
(tenyears => (tenyears.end - tenyears.start > 10));
console.log(tenYearsCompanies);

// 3.map
// const companyName = companies.map(function(company){
// 	return company.name;	
// });

const companyName = companies.map(company => company.name);
console.log(companyName);


const companyNameDate = companies.map(function(company){
	return `${company.name} [${company.start}-${company.end}]`;
});
console.log(companyNameDate);

// Short Hand Santax
const companyNameDateSa = companies.map(company => `${company.name} [${company.start}-${company.end}]`);
console.log(companyNameDateSa);

// square root of age
const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// multiple by 2
const agesTwice = ages.map(age => age*2);
// console.log(agesTwice);

// mixing two map
const ageMap = ages
	.map(age => Math.sqrt(age))
	.map(age => age*2);

// console.log(ageMap);


// 4.Sort
// age ascending
const ageAscending = ages.sort(function(a,b){
	return a-b;
});

console.log(ageAscending);
// short hand
const ageAscendingShort = ages.sort((a,b) => a-b);
console.log(ageAscendingShort);

// for Descending
const ageDescendingShort = ages.sort((a,b) => b-a);
console.log(ageDescendingShort);

// companies sort according to their date
const companySort = companies.sort(function(c1,c2){
	if(c1.start>c2.start){
		return 1;
	}else{
		return -1;
	}
});
console.log(companySort);
// short hand
const companySortShort = companies.sort((a,b) => (a.start>b.start ? 1 :-1));
console.log(companySortShort);





//5.Reduce Function

// using for conditon
let ageSum = 0;
for(let i =0;i<ages.length;i++){
	ageSum += ages[i];
};
console.log(ageSum);

// using Reduce 
const ageSumReduce = ages.reduce(function(total,age){
	return total+age;
},0);
console.log(ageSumReduce);

// Short Hand 
const ageSumReduceShort = ages.reduce((a,b) => (a+b),0);
console.log(ageSumReduceShort);

// get Total years of Companies

const getSumofCompanies = companies.reduce((total,company) => (total+(company.end-company.start)),0);
console.log(getSumofCompanies);

// combaning all function

const combine = ages
	.map(age => age*2)
	.filter(age => age>=42)
	.sort((a,b) => a-b)
	.reduce((a,b) => a+b,0);
	

console.log(combine);

