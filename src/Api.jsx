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
      return response.json()
    }).then((json) => {
      let child = json.data.children
      let childArray = child.map(function (x) {
        return x.data;
      })
      let permaUrl = childArray.map(function(child) {
        return 'https://www.reddit.com' + child.permalink.toString();
      })
      let webdevPosts = []
      for (let i = 0; i < childArray.length; i++) {
        webdevPosts.push(
          <ul key={i} className="posts text-center">
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
      base.setState({ posts: webdevPosts });
    }).catch((ex) => {
      console.log('An error occured while parsing!', ex);
      base.setState({ posts: <h1>Reddit isn't working... SORRY 503!</h1> });
    });
  }

  render() {
    let posts = this.state.posts;
    return (
      <div>
        <div>
          <p>
            This component was built after completing General Assembly's React course. It uses JSON data from Reddit to display the top 100 posts on <a href="https://www.reddit.com/r/webdev/"> r/webdev this week.</a>
          </p>
          <ul className="post-container">{posts}</ul>
        </div>
      </div>
    );
  }
}
export default Api;
