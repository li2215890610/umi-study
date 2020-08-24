import React from 'react';
import styles from './index.less';
import { Spin } from 'antd';

export default () => {
  return (
    <div className={styles.loading}>
      <Spin spinning={true} />
    </div>
  );
};
