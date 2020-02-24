import React, { Fragment, useState } from 'react';

import './App.css';

function App() {
  const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
  ];


  let initialScore = 0;

  let difficulty =
    localStorage.getItem('difficulty') !== null
      ? localStorage.getItem('difficulty')
      : 'medium';

  const [text, setText] = useState('');
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [score, setScore] = useState(initialScore);
  const [addClass, setAddClass] = useState(false)
 

  const onChange = e => {
    const insertedText = e.target.value;
    console.log(insertedText);
    if (insertedText === word) {
      setWord(words[Math.floor(Math.random() * words.length)]);
      updateScore();

      //clear
      e.target.value = '';
    }
  };

  function updateScore() {
    setScore(prevscore => prevscore + 1);
  }

  const pickDifficulty =  e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
  };

  

const toggle = () => {
  setAddClass(!addClass);
}

 

  return (
    <div className='App'>
      <button id='settings-btn' onClick={toggle} className='settings-btn' >
            {addClass ? (
              <i className='fas fa-pause'></i>
            ) : (
              <i className='fas fa-play'></i>
            )}>
        <i className='fas fa-cog'></i>
      </button>
      <div id='settings' className={addClass ? 'settings' : 'settings hide'}>
        <form action='' id='setting-form' onChange={pickDifficulty}>
          <div>
            <label for='difficulty'></label>
            <select name='' id='difficulty'
            >
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
          </div>
        </form>
      </div>

      <div className='container'>
        <h2>Speed Typer</h2>
        <small>Type the following</small>
        <h1 id='word'>{word}</h1>
        <input
          type='text'
          id='text'
          autocomplete='off'
          placeholder='type the words here'
          onChange={onChange}
          text={text}
        />
        <p className='time-container'>
          Time left: <span id='time'>10s</span>
        </p>
        <p className='score-container'>
          Score= {score} <span id='score'></span>
        </p>
        <div id='end-game-container' className='end-game-container'></div>
      </div>
    </div>
  );
}

export default App;
