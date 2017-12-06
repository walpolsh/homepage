import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Well } from 'react-bootstrap';
import Api from './Api';
import DrumMachine from './DrumMachine';
const plateAgain = require('./images/plateagain.png');

const styles = {
  image: {
    display: 'block',
    height: '100%',
    width: '80%',
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
    <div className="text-center">
        <Well>
          <p>
              At BitMaker's January 2017 Web Development Cohort I spent 9 weeks immersively building full-stack Ruby on Rails applications. For my final project I worked with an Agile team to create&nbsp;
              <a href='https://plateagain.herokuapp.com/'>
              Plate Again
              </a>, an app designed to connect the needy of our society with providers of excess food.
          </p>
          <a href='https://plateagain.herokuapp.com/'>
          <img alt="plateAgain" style={styles.image} src={plateAgain}></img></a>

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
