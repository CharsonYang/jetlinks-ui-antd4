import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2020 Jetlinks Pro"
    links={[
      {
        key: 'Jetlinks',
        title: 'Jetlinks Pro',
        href: 'https://github.com/jetlinks',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/jetlinks',
        blankTarget: true,
      },
      {
        key: 'Jetlinks Pro',
        title: 'Jetlinks Pro',
        href: 'https://github.com/jetlinks',
        blankTarget: true,
      },
    ]}
  />
);
