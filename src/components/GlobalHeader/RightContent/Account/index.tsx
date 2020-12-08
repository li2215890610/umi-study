import React from 'react';
import { Menu, Dropdown, Space } from 'antd';
import styles from './index.less';
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { RootState } from '@/models/RootState';
import { useSelector, useDispatch } from 'umi';

const Account: React.FC<{}> = () => {
  const userState = useSelector((state: RootState) => {
    return state.user;
  });

  const dispatch = useDispatch();

  return (
    <Dropdown
      overlay={
        <Menu
          onClick={({ key }) => {
            switch (key) {
              case 'setting':
                window.open('/setting/user');
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
        <div>{userState.nickname || '暂未设置昵称'}</div>
      </div>
    </Dropdown>
  );
};

export default Account;
