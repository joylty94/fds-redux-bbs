import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleScreen from '../components/ArticleScreen';
import { readArticle } from '../ducks/articleScreen';

class ArticleScreenContainer extends Component {
  componentDidMount() { // 맨처음 그릴 때, 한번 호출.
    this.props.onMount();
  }

  render() {
    const { ...rest } = this.props;
    return (
      <ArticleScreen {...rest} />
    );
  }
}

export default connect(
  // mapStateToProps
  state => ({
    reading: state.article.reading,
    success: state.article.success,
    errorMessage: state.article.errorMessage,
  }),
  // mapDispatchToProps
  dispatch => ({
    onMount: () => {
      dispatch(readArticle());
    },
  }),
)(ArticleScreenContainer);
