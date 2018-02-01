import React from 'react';
import TopMenuContainer from './TopMenuContainer';
import withAuth from '../hocs/withAuth';
import ArticleListContainer from './ArticleListContainer';

const ListPage = () => (
  <div>
    <TopMenuContainer />
    <ArticleListContainer />
  </div>
);

export default withAuth(ListPage);
