import React from 'react';
import TopMenuContainer from './TopMenuContainer';
import withAuth from '../hocs/withAuth';

const ListPage = () => (
  <div>
    <TopMenuContainer />
  </div>
);

export default withAuth(ListPage);
