window.addEventListener('load',init);

// Available Label
const levels = {
	easy :5,
	medium : 3,
	hard : 2,
}
// to change level
let currentLevels = levels.easy;


// golbal Variable
let time = currentLevels;
let score = 0;
let isPlaying;

// DOM Element
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const second = document.querySelector('#seconds');
const select = document.querySelector('#select');


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


select.addEventListener('change',changeLevel);
function changeLevel(){
	// update Value
	currentLevels = levels[select.value];
	second.innerHTML = currentLevels;
	
}

function init(){
	// time = currentLevels;
	// show num of second
	second.innerHTML = currentLevels;
	// show randow words
	showWord(words);
	// setTimer
	setInterval(timer,1000);
	// getStatus
	setInterval(getStatus,50);
	// matching words
	wordInput.addEventListener('input',startMatch);
}



function showWord(words){
	// geting randon index
	var randIndex = Math.floor(Math.random() * words.length);
	// Getting Random Word From Array
	currentWord.innerHTML = words[randIndex];
}

function timer(){
	if(time > 0) {
		// decrease time
		time--;
	}else if(time === 0){
		isPlaying = false;
	}
	// displaying timer
	timeDisplay.innerHTML = time;
}


function getStatus(){
	if(!isPlaying && time === 0){
		// getting message if isplaying is not true 
		message.innerHTML = 'Game Over !!';
		score = -1;
	}
}

function startMatch(){
	if(matchWord()){
		wordInput.value = '';
		showWord(words);
		time = currentLevels + 1;
		score++;
	}
	if(score === -1){
		scoreDisplay.innerHTML = 0;
	}else{
		scoreDisplay.innerHTML = score;
	}
	
}

function matchWord(){
	if(wordInput.value === currentWord.innerHTML){
		message.innerHTML = 'Correct !!';
		return true;
	}else{
		message.innerHTML = '';
		return false;
	}
}
















