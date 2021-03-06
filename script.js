const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('setting-form');
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
let score = 0;

//Initialize time
let time = 10;

//set dificulty to value in localStorage or medium

let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

  
//Set difficulty select value
difficultySelect.value= localStorage.getItem('difficulty') !== null
? localStorage.getItem('difficulty')
: 'medium';

//focus text on start
text.focus();

//start teh countdown
const timeInterval = setInterval(updateTime, 1000);

//generate Random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

console.log(getRandomWord());
//add word to dom

const addWordToDom = () => {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
};

//update Score

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//update Time

function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';
  if (time === 0) {
    clearInterval(timeInterval);
    //end game
    gameOver();
  }
}

//game over show end screen

function gameOver() {
  endgameEl.innerHTML = `
  <h1>Time ran out!</h1>
  <p>You final score is ${score}.</p>
  <button onclick="location.reload()">Reload</button>`;
  endgameEl.style.display = 'flex';
}

addWordToDom();

//Event Listeners

text.addEventListener('input', e => {
  const insertedText = e.target.value;
  console.log(insertedText);
  if (insertedText === randomWord) {
    addWordToDom();
    updateScore();

    //clear
    e.target.value = '';
    if (difficulty === 'hard'){
      time += 2;
    } else if (difficulty === 'medium'){
      time += 3;
    }else {
      time += 5;
    }

    updateTime();
  }
});

//settings btn click

settingsBtn.addEventListener('click', () => {
  settings.classList.toggle('hide');
});

//settings select

settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  console.log(difficulty);
  localStorage.setItem('difficulty', difficulty);
});
