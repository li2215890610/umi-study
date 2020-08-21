import React from 'react';
import { Button, Result } from 'antd';
import { history } from 'umi';
import styles from './404.less';

const NoFoundPage: React.FC<{}> = () => (
  <div className={styles._404}>
    <Result
      status="warning"
      subTitle="抱歉，没有找到相关页面。"
      extra={
        <Button type="primary" onClick={() => history.goBack()}>
          回到上一页
        </Button>
      }
    />
  </div>
);

export default NoFoundPage;
