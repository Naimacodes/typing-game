const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

//List of words for the game
const words = [
  'truculent',
  'force',
  'tidy',
  'bridge',
  'quiver',
  'stereotyped',
  'fear',
  'books',
  'blow',
  'shelter',
  'various',
  'stitch',
  'cannon',
  'sticky',
  'short',
  'tedious',
  'illegal',
  'yoke',
  'suspend',
  'plantation',
  'frantic',
  'hungry',
  'sparkle',
  'hanging',
  'obtainable',
  'flood',
  'breakable',
  'tacit',
  'hushed',
  'bait',
  'smile',
  'foregoing',
  'stranger',
  'expert',
  'oven',
  'share'
];


//Initialize word

let randomWord;

//Initialize score
let score= 0;

//Initialize time
let time= 10;

//generate Random word from array
function getRandomWord () {
  return words[Math.floor(Math.random()* words.length)]
  }

  console.log(getRandomWord())
//add word to dom

const addWordToDom = () => {
  randomWord = getRandomWord()
  word.innerHTML= randomWord;
}

addWordToDom()

//Event Listeners

text.addEventListener("input", e => {
  const insertedText = e.target.value;
  console.log(insertedText)
  if(insertedText === randomWord){
    addWordToDom()

    //clear
    e.target.value =""
  }
})