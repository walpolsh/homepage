import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Well } from 'react-bootstrap';
import Api from './Api';
import DrumMachine from './DrumMachine';
const plateAgain = require('./images/plateagain.png');
const practiceTracker = require('./images/logo.png');

const styles = {
  image: {
    display: 'block',
    height: '100%',
    width: '80%',
    margin: '0 auto',
  },
  practice: {
    padding: '0',
    display: 'block',
    height: '200px',
    width: '400px',
    margin: '0 auto',
  },
  paragraph: {
    marginTop: '10px',
  },
  selfie: {
    width: '50%',
    height: 'auto',
  },
};

const Portfolio = () => (
  <Router>
    <div>
        <Well>
          <p>
              At BitMaker's January 2017 Web Development Cohort I spent 9 weeks immersively building full-stack Ruby on Rails applications. For my final project I worked with a team to create&nbsp;
              <a href='https://plateagain.herokuapp.com/'>
              Plate Again
            </a> which is designed to connect the hungry with providers of excess food. Built with Ruby on Rails.
          </p>
          <a href='https://plateagain.herokuapp.com/'>
          <img alt="plateAgain" style={styles.image} src={plateAgain}></img></a>
        </Well>
        <Well>
          <p>
              <a href='https://walpolsh.github.io/practice-app/'>
              Practice Tracker's
            </a> goal is to allow music students to track their sessions and provides them with useful practice tools. Current features include a countdown timer, metronome, todo list, and microphone recording. Future iterations will include user database, storable practice cards, and UX/UI redesign. Built with React.
          </p>
          <a href='https://walpolsh.github.io/practice-app/'>
          <img alt="practiceTracker" style={styles.practice} src={practiceTracker}></img></a>
        </Well>

        <Well>
          <DrumMachine />
        </Well>

        <Well>
          <Api />
        </Well>
    </div>
  </Router>
);

export default Portfolio;
