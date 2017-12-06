import React, { Component } from 'react';
import './styles/DrumMachine.css';

import clap from './sounds/clap.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick2.wav';
import openhat from './sounds/Hat.wav';
import boom from './sounds/kick1.wav';
import ride from './sounds/ride.wav';
import snare from './sounds/snare.wav';
import tom from './sounds/tom.wav';
import fx from './sounds/Lazer.wav';

class DrumMachine extends Component {
  render() {
    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio)
        return;
      key.classList.add('keydown');
      key.classList.add('shakeit')
      setTimeout(function () {
        key.classList.remove('keydown');
      }, 200);
      setTimeout(function () {
        key.classList.remove('shakeit');
      }, 400);

      audio.currentTime = 0;
      audio.play();
    };

    window.addEventListener('keydown', playSound);

    return (
      <div>
        <p>
          Upon my completion of <a href='https://javascript30.com/'>Wes Bos's JavaScript 30: 30 Day Vanilla JS Coding Challenge</a> It was a very practical learning experience and taught me many new tricks including new ES6 syntax, DOM manipulation, and CSS design concepts. I uploaded all of my work to GitHub if you'd like to check out my code... <a href='https://github.com/walpolsh/Js30'>Paul's JS30 Code</a>. After finishing the course I went back and redesigned his original drum machine with a new layout, animations and custom sounds:
        </p>
        <div>
          <div className="keys">
            <div data-key="65" id="a" className="key">
              <kbd>A</kbd>
              <span className="sound">clap</span>
            </div>
            <div data-key="83" id="s" className="key">
              <kbd>S</kbd>
              <span className="sound">hihat</span>
            </div>
            <div data-key="68" id="d" className="key">
              <kbd>D</kbd>
              <span className="sound">kick</span>
            </div>
          </div>
          <div className="keys">
            <div data-key="70" id="f" className="key">
              <kbd>F</kbd>
              <span className="sound">openhat</span>
            </div>
            <div data-key="71" id="g" className="key">
              <kbd>G</kbd>
              <span className="sound">boom</span>
            </div>
            <div data-key="72" id="h" className="key">
              <kbd>H</kbd>
              <span className="sound">snare</span>
            </div>
          </div>
          <div className="keys">
            <div data-key="74" id="j" className="key">
              <kbd>J</kbd>
              <span className="sound">ride</span>
            </div>
            <div data-key="75" id="k" className="key">
              <kbd>K</kbd>
              <span className="sound">tom</span>
            </div>
            <div data-key="76" id="l" className="key">
              <kbd>L</kbd>
              <span className="sound">fx</span>
            </div>
          </div>
        </div>
        <audio data-key="65" id="aa" src={clap}></audio>
        <audio data-key="83" id="ss" src={hihat}></audio>
        <audio data-key="68" id="dd" src={kick}></audio>
        <audio data-key="70" id="ff" src={openhat}></audio>
        <audio data-key="71" id="gg" src={boom}></audio>
        <audio data-key="72" id="hh" src={snare}></audio>
        <audio data-key="74" id="jj" src={ride}></audio>
        <audio data-key="75" id="kk" src={tom}></audio>
        <audio data-key="76" id="ll" src={fx}></audio>

      </div>
    );
  }
}

export default DrumMachine;
