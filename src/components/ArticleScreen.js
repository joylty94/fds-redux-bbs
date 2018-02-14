import React, { Component } from 'react';

export default class ArticleScreen extends Component {
  state = {
    title: '',
    content: '',
  }
  render() {
    const { title, content } = this.state;
    return (
      <div>
        <div>{title}</div>
        <div>{content}</div>
      </div>
    );
  }
}
