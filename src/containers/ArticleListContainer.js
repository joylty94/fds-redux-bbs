import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleList from '../components/ArticleList';
import { fetchArticleList } from '../ducks/articleList';
import withLoading from '../hocs/withLogin';

const ArticleListWithLoading = withLoading(ArticleList);

class ArticleListContainer extends Component {
  static defaultProps = {
    onMount: () => {},
  }

  componentDidMount() { // 맨처음 그릴 때, 한번 호출.
    this.props.onMount();
  }

  render() {
    const { onMount, ...rest } = this.props; // props 중에 onMount를 빼고 props를 만들기.
    return (
      <ArticleListWithLoading {...rest} />
    );
  }
}

export default connect(
  // mapStateToProps
  state => ({
    articles: state.articleList.articles,
    loading: state.articleList.loading,
  }),
  // mapDispatchToProps
  dispatch => ({
    onMount: () => {
      dispatch(fetchArticleList());
    },
  }),
)(ArticleListContainer);
