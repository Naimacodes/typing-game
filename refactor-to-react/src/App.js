import React, { Fragment, useState, useEffect } from 'react';

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

  const [text, setText] = useState('');
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const onChange = e => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <div className='App'>
      <button id='settings-btn' className='settings-btn'>
        <i className='fas fa-cog'></i>
      </button>
      <div id='settings' className='settings'>
        <form action='' id='setting-form'>
          <div>
            <label for='difficulty'></label>
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
          text={text}
        />
        <p className='time-container'>
          Time left: <span id='time'>10s</span>
        </p>
        <p className='score-container'>
          Score <span id='score'></span>
        </p>
        <div id='end-game-container' className='end-game-container'></div>
      </div>
    </div>
  );
}

export default App;
