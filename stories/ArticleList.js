import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ArticleList from '../src/components/ArticleList';

storiesOf('ArticleList', module)
  .add('default', () => (
    <ArticleList />
  ));
