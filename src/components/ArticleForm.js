import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';

export default class ArticleForm extends Component {
  static defaultProps = {
    errorMessage: '',
    onSubmit: () => {},
    creating: false,
  }

  state = {
    title: '',
    content: '',
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    const { title, content } = this.state;
    const { errorMessage, creating } = this.props;
    // Form에 스타일을 사용하고 싶지만 브라우저 내장기능을 사용하기 싫을 때, as를 통해 div로 만든다.
    return (
      <Form as="div" loading={creating}>
        <Form.Input name="title" value={title} label="제목" onChange={this.handleChange} />
        <Form.TextArea name="content" value={content} label="내용" onChange={this.handleChange} />
        <Form.Button content="전송" onClick={this.handleSubmit} />
        {
          errorMessage && (
            <Message negative>
              <Message.Header>전송할 수 없습니다.</Message.Header>
              <p>{errorMessage}</p>
            </Message>
          )
        }
      </Form>
    );
  }
}
