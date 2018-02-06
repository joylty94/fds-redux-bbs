import React from 'react';
import { Link } from 'react-router-dom';

import TopMenuContainer from './TopMenuContainer';
import withAuth from '../hocs/withAuth';
import ArticleListContainer from './ArticleListContainer';

const ListPage = () => (
  <div>
    <TopMenuContainer />
    {process.env.REACT_APP_API_KEY}
    <Link to="/new-article">새 게시물</Link>
    <ArticleListContainer />
  </div>
);

export default withAuth(ListPage);
