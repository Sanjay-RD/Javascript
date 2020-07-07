const wordEl = document.getElementById('word');
const messageEl = document.getElementById('message');
const popup = document.getElementById('popup-container');
const wrong = document.getElementById('wrong');
const notificationEl = document.getElementById('notification-container');
const button = document.getElementById('play-again');
const figurePart = document.querySelectorAll('.figure-part');
const hintsEl = document.getElementById('hints');
const hintsmsg = document.getElementById('hints-message');


let words = [
    {
        word:'sanjay',
        hints:'sijan Best Friend'
    },
    {
        word:'cow',
        hints:'Nepal National Animal'
    },
    {
        word:'pubg',
        hints:'Royal Battel Ground'
    },
    {
        word:'sarina',
        hints:'sanjay sister'
    },
    {
        word:'hangman',
        hints:'Now playing game'
    },
    {
        word:'pubg',
        hints:'Royal Battel Ground'
    },
    {
        word:'exam',
        hints:'Always fail'
    },
    {
        word:'tampo',
        hints:'Three wheel Vechicle'
    }
];

let selectedWord = words[Math.floor(Math.random()*words.length)];
let word = selectedWord.word;
let hints = selectedWord.hints;

// let selectedWord = 'sanjay';

let correctletter = [];

function randomLetter(){
    let random =  word[Math.floor(Math.random()*word.length)];
    correctletter.push(random);
}

randomLetter();
randomLetter();
// console.log(s)


let wrongletter = [];

function showNotification(){
    notificationEl.classList.add('show');

    setTimeout(()=>{
        notificationEl.classList.remove('show');
    },2000)
}

function showWrongMessage(){
    wrong.innerHTML = `
        ${wrongletter.length>0 ? '<h3>Wrong</h3>' : ''}
        <span>${wrongletter}</span>
    `

    wrong.style.display = 'block';

    figurePart.forEach((part,index)=>{
        const error = wrongletter.length;

        if(error > index){
            part.style.display = 'block';
        }else{
            part.style.display = 'none';
        }
    })

    if(wrongletter.length === figurePart.length){
        messageEl.innerText = 'You Have Lost The Game';
        
        popup.style.display = 'flex';
    }

    if(wrongletter.length >= 2){
        hintsEl.style.display = 'block';
        hintsmsg.innerText = hints;
    }
}

function displayWord(){
    wordEl.innerHTML = `
        ${word
        .split('')
        .map((letter)=>`
            <span class="letter">
                ${correctletter.includes(letter) ? letter : ''}
            </span>
        `).join('')
        }
    `;

    const innerWord = wordEl.innerText.replace(/\n/g,'');        

    // console.log(wordEl.innerText,innerWord);

    if(innerWord === word){
        messageEl.innerText = 'You Have Won The Game';
        
        popup.style.display = 'flex';
    }
}

window.addEventListener('keydown',(e)=>{
    // console.log(e.keyCode);
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;
        if(word.includes(letter)){
            if(correctletter.includes(letter)){
                showNotification();
            }else{
                correctletter.push(letter);
                displayWord();
            }
        }else{
            if(wrongletter.includes(letter)){
                showNotification();
            }else{
                wrongletter.push(letter);
                showWrongMessage();
            }
        }
    }
})


button.addEventListener('click',(e)=>{
    // console.log(e);
    
    wrongletter=[];
    selectedWord = words[Math.floor(Math.random()*words.length)];
    word = selectedWord.word; 
    hints = selectedWord.hints;
    correctletter = [];
    randomLetter();
    randomLetter();
    displayWord();

    hintsEl.style.display = 'none';
    showWrongMessage(); 
    

    popup.style.display = 'none';

})

displayWord();


