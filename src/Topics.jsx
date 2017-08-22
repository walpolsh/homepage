import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Well } from 'react-bootstrap';
import Api from './Api';
import DrumMachine from './DrumMachine';

const Topics = () => (
  <Router>
    <div className="text-center">
        <ul>
          <h3>
            React.js Examples:
          </h3>
        </ul>

        <Well>
          <DrumMachine />
        </Well>

        <Well>
          <Api />
        </Well>
    </div>
  </Router>
);

export default Topics;
