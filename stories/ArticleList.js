import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ArticleList from '../src/components/ArticleList';

const articles = [
  {
    id: 'article0',
    title: '게시글 제목',
    createdAt: 1517453824996,
    nickName: '이태용',
  },
  {
    id: 'article1',
    title: '게시글 제목2',
    createdAt: 1517453824996,
    nickName: '이태용',
  },
];

const articlesWithLink = articles.map(article => ({
  ...article,
  itemProps: {
    as: 'a',
    href: 'https://google.com',
  },
}));

storiesOf('ArticleList', module)
  .add('default', () => (
    <ArticleList articles={articles} />
  ))
  .add('links', () => (
    <ArticleList articles={articlesWithLink} />
  ));
