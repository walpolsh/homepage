import React, { Component } from 'react';
import './styles/Social.css';

class Social extends Component {
  render(){
    return(
      <div className="text-center">
        <hr></hr>
        <div className="fa-container">
          <a href="https://github.com/walpolsh" className="fa fa-github">GitHub</a>
          <a href="https://www.linkedin.com/in/pauljosephwalsh/" className="fa fa-linkedin-square">LinkedIn</a>
          <a href="https://www.facebook.com/paulwalshmusic" className="fa fa-facebook">Facebook</a>
          <a href="https://avanttemporal.bandcamp.com" className="fa fa-bandcamp">Bandcamp</a>
          <a href="https://www.youtube.com/channel/UCSCgCC24REe-_Iy05MR_mKQ" className="	fa fa-youtube">Youtube</a>
        </div>
      </div>
    )
  };
}

export default Social;
