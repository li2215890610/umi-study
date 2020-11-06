import React, { useContext } from 'react';
import { Layout, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import Authorization from '@/components/Authorization';
import TokenMonitor from '@/components/TokenMonitor';
import styles from './index.less';
import { FusionContext } from './context';

const { Header, Footer, Content } = Layout;

const BasicLayout: React.FC<{}> = props => {
  const { nolayout } = useContext(FusionContext);
  return (
    <ConfigProvider locale={zhCN}>
      {nolayout ? (
        <div style={{ width: '100%' }}>{props.children}</div>
      ) : (
        <Layout className={styles.layout}>
          <Header className={styles.header}>
            <div className={styles.headerInner}>
              <GlobalHeader />
              {/* <TokenMonitor /> */}
            </div>
          </Header>
          <Content className={styles.content}>
            <div className={styles.contentInner}>
              <Authorization>{props.children}</Authorization>
            </div>
          </Content>
        </Layout>
      )}
    </ConfigProvider>
  );
};

export default BasicLayout;
