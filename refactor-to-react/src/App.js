import React, { useState, useEffect } from 'react';

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

  
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [score, setScore] = useState(initialScore);
  const [addClass, setAddClass] = useState(false);
  

  const onChange = e => {
    const insertedText = e.target.value;
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

  const pickDifficulty = e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
  };

  const toggle = () => {
    setAddClass(!addClass);
  };

  let seconds = 10;

  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(seconds);

  
  useEffect(() => {
    
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
  
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
    
    
  }, [timeLeft]);

  const difficultySelect = () =>
    localStorage.getItem('difficulty') !== null
      ? localStorage.getItem('difficulty')
      : 'medium';

  return (
    <div className='App'>
      <button id='settings-btn' onClick={toggle} className='settings-btn'>
        <i className='fas fa-cog'></i>
      </button>
      <div id='settings' className={addClass ? 'settings hide' : 'settings'}>
        <form action='' id='setting-form' onChange={pickDifficulty}>
          <div>
            <label htmlFor='difficulty'></label>
            <select name='' id='difficulty'>
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
          
        />
        <p className='time-container'>
          Time left: <span id='time'>{timeLeft}s</span>
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
