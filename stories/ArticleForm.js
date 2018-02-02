import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ArticleForm from '../src/components/ArticleForm';

storiesOf('ArticleForm', module)
  .add('default', () => (
    <ArticleForm onSubmit={action('onSubmit')} />
  ))
  .add('error message', () => (
    <ArticleForm errorMessage="필드를 모두 채워야 합니다." />
  ))
  .add('creating', () => (
    <ArticleForm creating />
  ));
