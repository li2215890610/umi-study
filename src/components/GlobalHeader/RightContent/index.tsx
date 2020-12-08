import React from 'react';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import styles from './index.less';
import Account from './Account';

const RightContent: React.FC<{}> = () => (
  <div className={styles.rc}>
    <Tooltip title="源码地址" placement="bottom">
      <a
        target="_blank"
        href="https://github.com/li2215890610/umi-study"
        rel="noopener noreferrer"
        className={styles.action}
      >
        <QuestionCircleOutlined />
      </a>
    </Tooltip>
    <Account />
  </div>
);

export default RightContent;
