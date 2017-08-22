import React, { Component } from 'react';
import { Grid, Image, Row, Col, Jumbotron, Clearfix } from 'react-bootstrap';
import Topics from './Topics';
import './styles/Home.css';
const photo = require('./images/paul.png');
const plateAgain = require('./images/plateagain.png');

class Home extends Component {
  componentDidMount() {
    let el = document.querySelector('.fade');
    el.classList.add('fade-in');
  };

  render() {
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
    return (
      <div>
        <div className="fade">
          <Jumbotron style={styles.fade} className="text-center">
            <h1>Paul Walsh</h1>
            <h2>Web Developer And Musician</h2>
            <Image alt="Paul" src={photo} style={styles.selfie} circle></Image>
            <p>
              I am a web developer and classically trained rock musician with a passion for solving new problems, and improving on existing solutions.
            </p>
            <hr/>
          </Jumbotron>
          <Grid>
            <Row className="show-grid" width='860px'>
              <Col xs={6} md={6}>
                My interest in web development was spurred by someone who is also a musician, and after a few discussions I realized I'd found a deep passion for the problem solving and optimization aespects of programming! After a year of self study I decided I really wanted to make the full commitment so I signed up for a semester at BitMaker.
              </Col>

              <Col xs={6} md={6}>
                At BitMaker's January 2017 Web Development Cohort I spent 9 weeks immersively building full-stack Ruby on Rails applications. For my final project I worked with an Agile team to create <a href='https://plateagain.herokuapp.com/'>
                    Plate Again
                </a>, an app designed to connect the needy of our society with providers of excess food.
              </Col>
            </Row>
          </Grid>

          <a href='https://plateagain.herokuapp.com/'>
          <img alt="plateAgain" style={styles.image} src={plateAgain}></img></a>

          <Grid marginHeight='10px'>
            <Row style={styles.paragraph} className="show-grid" width='860px'>
              <Col xs={6} md={6}>
                Since then as a developer I've continued to build cool and interesting things with Javascript frameworks and libraries, and am open for new opportunities in many languages. I'm currently using HTML5, CSS3, JavaScript ES5/ES6, jQuery, AJAX, PostgresSQL, SQLite, MongoDB, React.js, Express.js, Node.js, Ruby on Rails and version control on Github.
              </Col>

              <Col xs={6} md={6}>
                Ultimately what I want to do is create things that people will actually be useful to people in their daily lives. On my own time I like to keep busy by reading, working on new projects, exercising or playing guitar.
              </Col>
            </Row>
          </Grid>
        </div>
        <div>
          <Topics />
        </div>
      </div>
    );
  }
}

export default Home;
