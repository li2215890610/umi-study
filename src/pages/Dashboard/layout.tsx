import React, { useState, useCallback } from 'react';
import {
  Col,
  Row,
  Menu,
  Card,
  Breadcrumb,
  Tooltip,
  Divider,
  Space,
  Affix,
} from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  ShopOutlined,
  ContainerOutlined,
  TagOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FundOutlined,
} from '@ant-design/icons';
import styles from './layout.less';
import { history, Link } from 'umi';
import { RouteComponentProps } from 'dva/router';
import { second } from '@/utils/location';
// import classnames from 'classnames';
// import CheckAccess from '@/components/CheckAccess';
// import { routeRequiredAccess } from '@/utils/access';
// import OrderCount from './Order/components/OrderCount';

const breadcrumbNameMap: {
  [url: string]: any;
} = {
  '/dashboard': <HomeOutlined />,
  '/dashboard/main': '概况总揽',

  '/dashboard/category': '文章分类',

  '/dashboard/article': '订单管理',
  '/dashboard/article/list': '订单查询',
  '/dashboard/article/detail': '订单详情',

  '/dashboard/analysis': '数据分析',
  '/dashboard/setting': '设置',

  '/dashboard/locales': '国际化',
  '/dashboard/hooks': 'hooks',
};

const DashboardLayout: React.FC<RouteComponentProps> = props => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const breadcrumbItems = pathSnippets
    .map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return breadcrumbNameMap[url] ? (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      ) : null;
    })
    .filter(item => item);

  const selectedKey = second(props.location.pathname);

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = useCallback(() => {
    setCollapsed(collapsed ? false : true);
  }, [collapsed]);

  const menuList = [
    {
      key: 'main',
      label: '概况总揽',
      icon: <AppstoreOutlined />,
    },
    {
      key: 'category',
      label: '文章分类',
      icon: <AppstoreOutlined />,
    },
    {
      key: 'article',
      label: '文章管理',
      icon: (
        <Space>
          <ContainerOutlined />
          {/* {
            <OrderCount
              type="dot"
              filter={OrderListFilter.WAIT_DELIVERY}
              style={{ marginLeft: -39, marginTop: -10 }}
            />
          } */}
          {/* 2222 */}
        </Space>
      ),
    },
    {
      key: 'analysis',
      label: '数据分析',
      icon: <FundOutlined />,
    },
    {
      key: 'setting',
      label: '设置',
      icon: <SettingOutlined />,
    },
    {
      key: 'locales',
      label: '国际化',
      icon: <ShopOutlined />,
    },
    {
      key: 'hooks',
      label: 'hooks',
      icon: <TagOutlined />,
    },
  ];

  return (
    <Row className={`${styles.dashboard} ${collapsed ? styles.collapsed : ''}`}>
      <Col className={styles.menu}>
        <Affix offsetTop={0}>
          <div className={styles.menuInner}>
            <Menu
              className="menu1"
              mode="inline"
              selectedKeys={[selectedKey]}
              onClick={({ key }) => {
                if (key === selectedKey) {
                  return;
                }
                history.push(`/dashboard/${key}`);
              }}
            >
              {menuList.map(menuItem => (
                <Menu.Item key={menuItem.key}>
                  <Tooltip
                    overlayStyle={{ left: -100 }}
                    placement="right"
                    title={collapsed ? menuItem.label : undefined}
                  >
                    <div className={styles.item}>
                      {menuItem.icon}
                      <span className={styles.label}>{menuItem.label}</span>
                    </div>
                  </Tooltip>
                </Menu.Item>
              ))}
            </Menu>

            <Divider style={{ margin: 0 }}></Divider>
            <div className={styles.trigger} onClick={toggleCollapsed}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
          </div>
        </Affix>
      </Col>
      <Col className={styles.content}>
        <div className={styles.breadcrumb} style={{ zIndex: 9 }}>
          <Card
            style={{ background: 'transparent' }}
            bordered={false}
            title={<Breadcrumb>{breadcrumbItems}</Breadcrumb>}
            headStyle={{
              fontSize: 14,
              color: '#595959',
              background: '#fff',
            }}
            bodyStyle={{
              display: 'none',
            }}
          ></Card>
        </div>

        <Card
          style={{ background: 'transparent' }}
          bordered={false}
          headStyle={{
            display: 'none',
          }}
          bodyStyle={{
            margin: '16px',
            background: '#fff',
            border: '1px solid #f0f0f0',
          }}
        >
          {/* <CheckAccess
            required={routeRequiredAccess(location.pathname, 1)}
            denyType="display"
          > */}
          {props.children}
          {/* </CheckAccess> */}
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardLayout;
