const wordEl = document.getElementById('word');
const messageEl = document.getElementById('message');
const hintsEl = document.getElementById('hints');

let words = [
    {
        word:'sanjay',
        hints:'sijan Best Friend'
    },
    {
        word:'Ashok',
        hints:'College Jhushe Sathi'
    },
    {
        word:'Bimal',
        hints:'school friend last Boka r khadus sathi'
    }
];

let selectedWord = words[Math.floor(Math.random()*words.length)];
let word = selectedWord.word;
let hints = selectedWord.hints;
console.log(word);
console.log(hints);

// let selectedWord = 'sanjay';

let correctletter = [];

function randowLetter(){
    let random =  word[Math.floor(Math.random()*word.length)];
    correctletter.push(random);
}

randowLetter();
randowLetter();
// console.log(s)


let wrongletter = [];

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

    if(innerWord === selectedWord){
        messageEl.innerText = 'You Have Won The Game';
    }


}

displayWord();


