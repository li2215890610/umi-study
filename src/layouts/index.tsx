import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import Authorization from '@/components/Authorization';
import TokenMonitor from '@/components/TokenMonitor';
import styles from './index.less';

const { Header, Footer, Content } = Layout;

const BasicLayout: React.FC<{}> = props => {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <div className={styles.headerInner}>
            <GlobalHeader />
            <TokenMonitor />
          </div>
        </Header>
        <Content className={styles.content}>
          <div className={styles.contentInner}>
            <Authorization>{props.children}</Authorization>
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default BasicLayout;
