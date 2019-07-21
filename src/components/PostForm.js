import React, { Component } from "react";
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import PropTypes from 'prop-types';
class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
  //  call action
  this.props.createPost(post);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label>
            <input type="text" name="title" onChange={this.onChange} />
          </div>
          <br />
          <div>
            <label>Body</label>
            <textarea type="text" name="body" onChange={this.onChange} />
          </div>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
PostForm.propTypes={
  createPost:PropTypes.func.isRequired
}
export default connect(null, {createPost})(PostForm);
