import { Button } from 'react-bootstrap';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Music from './Music';
import Footer from './Footer';

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
            <Link  to="/music"><Button bsStyle="primary" bsSize="large" active>My Music</Button></Link>
            {'       '}
          </div>
          <div>
            <Route exact path="/homepage" component={Home}></Route>
            <Route path="/music" component={Music}></Route>
          </div>
          <Footer/>
        </div>
      </Router>

    );
  }
}

export default App;
