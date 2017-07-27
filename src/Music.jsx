import React, { Component } from 'react';

class Music extends Component {
  render() {
    return (
      <div >
        <div>
          <div className='text-center'>
            <h1>Music Portfolio</h1>
            <h2>Check Out Some of My Music</h2>
            <div>
                <div>
                  <p>Soundcloud:
                  </p>
                  <iframe title="audio" name="audio" width="90%" height="600" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1198477&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
                  <p>Youtube:
                  </p>
                  <iframe title="video" name="video" width="90%" height="700" src="https://www.youtube.com/embed/videoseries?list=PLZqP2eTUCIkEDLf8j085ZbbvOGZ-uqSkl" ></iframe>
                </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Music;
