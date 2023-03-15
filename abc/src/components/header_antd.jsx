import React, { useState } from 'react';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'FIND A PROPERTY',
    key: 'property',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
  },

  {
    label: 'SERVICES',
    key: 'service',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
    ],
  },

  {
    label: (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="" target="_blank" rel="noopener noreferrer">
        CONTACT US
      </a>
    ),
    key: 'alipay',
  },
];
const HeaderAntd = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default HeaderAntd;