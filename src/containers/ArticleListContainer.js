import { connect } from 'react-redux';

import ArticleList from '../components/ArticleList';
import { fetchArticleList } from '../ducks/articleList';

export default connect(
  // mapStateToProps
  state => ({
    articles: state.articleList.articles,
  }),
  // mapDispatchToProps
  dispatch => ({
    onMount: () => {
      dispatch(fetchArticleList());
    },
  }),
)(ArticleList);
