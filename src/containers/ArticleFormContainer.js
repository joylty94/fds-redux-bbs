import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ArticleForm from '../components/ArticleForm';
import { createArticle } from '../ducks/article';

class ArticleFormContainer extends Component {
  render() {
    const { success, ...rest } = this.props;
    if (success) {
      return (
        <Redirect to="/list" />
      );
    }
    return (
      <ArticleForm {...rest} />
    );
  }
}

export default connect(
  // mapStateToProps
  state => ({
    creating: state.article.creating,
    success: state.article.success,
    errorMessage: state.article.errorMessage,
  }),
  // mapDispatchToProps
  dispatch => ({
    onSubmit: ({ title, content }) => {
      dispatch(createArticle({ title, content }));
    },
  }),
)(ArticleFormContainer);

