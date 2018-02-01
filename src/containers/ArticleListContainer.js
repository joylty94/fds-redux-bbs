import { connect } from 'react-redux';

import ArticleList from '../components/ArticleList';
import { fetchArticleList } from '../ducks/articleList';
import withLoading from '../hocs/withLogin';

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
)(withLoading(ArticleList));
