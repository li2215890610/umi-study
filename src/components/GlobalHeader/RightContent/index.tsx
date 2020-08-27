import React from 'react';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import styles from './index.less';
import Account from './Account';

const RightContent: React.FC<{}> = () => (
  <div className={styles.rc}>
    <Tooltip title="帮助文档" placement="bottom">
      <a
        target="_blank"
        href="www.baidu.com"
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
