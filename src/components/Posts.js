import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => res.json())
      .then(posts => this.setState({ posts: posts }))
      .catch(err => console.log(err));
  }
  render() {
    const postItem = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}-</h3>
        <p>{post.body}</p>
      </div>
    ));
    return <div>{postItem}</div>;
  }
}
export default Posts;
