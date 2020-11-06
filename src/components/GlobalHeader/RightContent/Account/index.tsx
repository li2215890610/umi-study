import React from 'react';
import { Menu, Dropdown, Space } from 'antd';
import styles from './index.less';
import {
  LogoutOutlined,
  SettingOutlined,
  SwapOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'umi';

const Account: React.FC<{}> = () => {
  // const userState = useSelector((state: RootState) => {
  //   return state.user;
  // });

  // const storeState = useSelector((state: RootState) => {
  //   return state.store;
  // });

  const dispatch = useDispatch();

  return (
    <Dropdown
      overlay={
        <Menu
          onClick={({ key }) => {
            switch (key) {
              case 'switch':
                window.location.href =
                  'https://jinjuxiaodian.com/v3/store/list/ALL/1';
                break;
              case 'setting':
                window.open('https://jinjuxiaodian.com/v3/setting/user');
                break;
              case 'logout':
                dispatch({
                  type: 'user/logout',
                });
                break;
              default:
                break;
            }
          }}
        >
          <Menu.Item key="setting">
            <Space align="center">
              <SettingOutlined />
              账号设置
            </Space>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="switch">
            <Space align="center">
              <SwapOutlined />
              切换店铺
            </Space>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="logout">
            <Space align="center">
              <LogoutOutlined />
              退出登录
            </Space>
          </Menu.Item>
        </Menu>
      }
      placement="bottomRight"
    >
      <div className={styles.account}>
        <div>{'未命名店铺' || '未命名店铺'}</div>
      </div>
    </Dropdown>
  );
};

export default Account;
