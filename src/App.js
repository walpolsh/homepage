import { Button } from 'react-bootstrap';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Music from './Music';
import Social from './Social';

const divStyle = {
  margin: '2px',
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="text-center" style={divStyle}>
            <Link to="/homepage"><Button bsStyle="primary" bsSize="large" active>Home Page</Button></Link>
            {'       '}
            <Link  to="/portfolio"><Button bsStyle="primary" bsSize="large" active>Web Development Portfolio</Button></Link>
            {'       '}
            <Link  to="/music"><Button bsStyle="primary" bsSize="large" active>My Music</Button></Link>
            {'       '}
          </div>
          <div>
            <Route exact path="/homepage" component={Home}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/music" component={Music}></Route>
          </div>
          <Social/>
        </div>
      </Router>
    );
  }
}

export default App;
