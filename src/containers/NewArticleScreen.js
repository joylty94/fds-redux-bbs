import React from 'react';
import TopMenuContainer from './TopMenuContainer';
import withAuth from '../hocs/withAuth';
import ArticleScreenContainer from './ArticleScreenContainer';

const NewArticleScreen = () => (
  <div>
    <TopMenuContainer />
    <ArticleScreenContainer />
  </div>
);

export default withAuth(NewArticleScreen);
