// console.log(1);

window.addEventListener('load',init);

// Globals Variable
let time = 5;
let score = 0;
let isPlaying;

// DOM Element
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const second = document.querySelector('#seconds');

// console.log(second);

const words = [
	'sanjay any things',
	'sijan',
	'google',
	'discription',
	'birthday',
	'world',
	'galaxy',
	'wikipedia',
	'ironic',
	'disintereted',
	'pronounce',
	'function',
	'array',
	'javascript',
	'meaninng',
	'current',
	'laravel',
	'forEach',
	'searches'
];


// Initialize Game
function init(){
	// Load word from array
	showWord(words);

	// Match typing word and given word
	wordInput.addEventListener('input',startMatch);
	// call countdown every second
	setInterval(countdown,1000);

	// Check Status
	setInterval(checkStatus,50);
}

// Start Match
function startMatch(){
	if(matchWord()){
		isPlaying = true;
		wordInput.value = '';
		showWord(words);
		time = 6;
		score++;
	}
	if(score === -1){
		scoreDisplay.innerHTML = 0;
	}else{
		scoreDisplay.innerHTML = score;
	}
	
}

// Match current word to input word
function matchWord(){
	if(wordInput.value === currentWord.innerHTML){
		message.innerHTML = 'Correct!!';
		return true;
	}else{
		message.innerHTML = '';
		return false;
	}
}

// pick and show random word
function showWord(words){
	// Generate random array index
	const randIndex = Math.floor(Math.random() * words.length);
	// output random word
	currentWord.innerHTML = words[randIndex];
}

function countdown(){
	// Make sure time is not run out
	if(time >0){
		// decrease the time
		time--;
	}else if(time === 0){
		// game is over
		isPlaying = false;
	}
	timeDisplay.innerHTML = time;
	// console.log(time);
}


function checkStatus(){
	if(!isPlaying && time === 0){
		message.innerHTML = 'Game Over!!';
		score = -1;
	}
}