import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Well } from 'react-bootstrap';
import Api from './Api';
import DrumMachine from './DrumMachine';

const Topics = () => (
  <Router>
    <div className="text-center">
        <ul>
          <h1>
            Here are a few components I've built with React!
          </h1>
        </ul>

        <Well>
          <DrumMachine />
        </Well>
        <hr/>
        <Well>
          <Api />
        </Well>
    </div>
  </Router>
);

export default Topics;
