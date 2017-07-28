import React, { Component } from 'react';
import { Grid, Image, Row, Col, Jumbotron, Clearfix } from 'react-bootstrap';
import Topics from './Topics';
const photo = require('./images/paul.png');
const plateAgain = require('./images/plateagain.png');


class Home extends Component {
  render() {
    const styles = {
      image: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    };
    return (
      <div>
        <div>
          <Jumbotron className="text-center">
            <h1>Paul Walsh</h1>
            <h2>Web Developer And Musician</h2>
            <Image alt="Paul" src={photo} circle></Image>
            <p>
              I am a web developer and classically trained rock musician with a passion for solving new problems, and improving on existing solutions.
            </p>
            <hr/>
          </Jumbotron>
          <Grid>
            <Row className="show-grid" width='860px'>
              <Col sm={6} md={3}>
                My interest in web development was spurred by someone who is also a musician, and after a few discussions I realized I'd found a deep passion for the problem solving and optimization aespects of programming! After a few months of self study I decided I really wanted to make the full commitment so I signed up for a semester at BitMaker.
              </Col>

              <Col sm={6} md={3}>
                At BitMaker's January 2017 Web Development Cohort I spent 500+ hours immersively building full-stack Ruby on Rails applications. For my final project I worked with an Agile team to create <a href='https://plateagain.herokuapp.com/'>
                    Plate Again
                </a>, an app designed to connect the needy of our society with providers of excess food.
              </Col>

              <Clearfix visibleSmBlock></Clearfix>

              <Col sm={6} md={3}>
                Since then as a developer I've continued to build cool and interesting things with Javascript frameworks and libraries, and am open for new opportunities in many languages. I'm currently using HTML5, CSS3, JavaScript ES5/ES6, jQuery, AJAX, PostgresSQL, SQLite, MongoDB, React.js, Express.js, Node.js, Ruby on Rails and version control on Github.
              </Col>

              <Col sm={6} md={3}>
                On my own time I like to keep myself busy by reading, working on new projects, lifting weights or playing guitar.
              </Col>
            </Row>
          </Grid>

          <a style={styles.image} href='https://plateagain.herokuapp.com/'>
            <img alt="plateAgain" style={styles.image} src={plateAgain}></img>
          </a>
        </div>
        <div>
          <Topics />
        </div>
      </div>
    );
  }
}

export default Home;
