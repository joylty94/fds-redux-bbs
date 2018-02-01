import React, { Component } from 'react';
import {
  Menu,
} from 'semantic-ui-react';

export default class TopMenu extends Component { // 프레젠테이션 컴포넌트를 유지하기 위해서,
  static defaultProps = { //
    logoProps: {},
    accountProps: {},
  }
  render() {
    const { logoProps, accountProps } = this.props;
    return (
      <Menu>
        <Menu.Item {...logoProps} name="browse">
          게시판
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item {...accountProps} name="signup">
            계정
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
