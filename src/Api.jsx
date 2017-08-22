import React, { Component } from 'react';
import './styles/api.css';

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: '',
    };
  }

  componentDidMount() {
    let base = this;
    let api = 'https://www.reddit.com/r/webdev/top.json?limit=100&t=week';
    fetch(api).then((response) => {
      return response.json(); //get me the json from reddit
    }).then((json) => {
      let child = json.data.children; //json Data
      //target specifically the children within the json data...
      let childArray = child.map(function (x) {
        return x.data;
      });

      // these are the children or the individual posts on Reddit
      // console.log(child)

      let permaUrl = childArray.map(function(child) {
        return 'https://www.reddit.com' + child.permalink.toString()
      });

      //urls with permalink added
      let webdevPosts = [];
      // push each post to the state by setting the event target to a setAttribute
      for (let i = 0; i < childArray.length; i++) {
        webdevPosts.push(
          <ul key={i} className="posts">
            <a href={permaUrl[i]}>
              <div>
                <img alt={i} src={childArray[i].thumbnail} width='200px' height='200px' onError={(event) => event.target.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/4/43/Reddit.svg')}/>
              </div>
              <i>{[i + 1]}.
              </i>
              <span> {childArray[i].title}</span>
              <span className="fa fa-thumbs-o-up"> {childArray[i].ups} upvotes</span>
            </a>
          </ul>
        );
      };

      // this is each post being pushed to the state in real time.
      base.setState({ posts: webdevPosts });
    }).catch((ex) => {
      console.log('An error occured while parsing!', ex); //errors
    });
  }

  render() {
    let posts = this.state.posts;
    return (
      <div>
        <div>
          <h3>
            This component uses JSON data from Reddit to display the top 100 posts this week on <a href="https://www.reddit.com/r/webdev/"> r/webdev!</a>
          </h3>
          <ul className="post-container">{posts}</ul>
        </div>
      </div>
    );
  }
}
export default Api;
