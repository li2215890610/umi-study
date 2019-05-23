import React from "react";

import { Menu, Icon, Button, Layout } from 'antd';

import { NavLink } from 'dva/router';

import menuConfig from "../../config/MenuConfig.js";

import styles from "./SiderMenu.css";

const SubMenu = Menu.SubMenu;

const { Sider } = Layout;

class SiderMenu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      openKeys: [],
      current: ""
    };
  }

  componentDidMount = () => {

    this.renderPathname(window.location.pathname, (data) => {
      this.setState({
        current: data.menu,
        openKeys: data.openKeys
      })
    })
  }

  // src/config/MenuConfig.js menuList里面第一层key
  rootSubmenuKeys = ['/home','/home/user','/home/product_edit','/home/ui', '/home/form', '/table', '/city', '/order', '/user','/permission']

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  onOpenChange = (openKeys) => {
    
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  handleClick = ({ item, key }) => {
    console.log("item, keyitem, key", item, key)
    this.renderPathname(key, (data) => {
      this.setState({
        current: data.menu,
      })
    })
  }

  renderMenu(dataSource) {
    return (
      dataSource.map((menu, index) => {
        if (menu.children) {
          return (
            <SubMenu key={menu.key}
              title={
                <span>
                  <Icon type={menu.icon} />
                  <span>
                    {menu.title}
                  </span>
                </span>
              }
            >
              {this.renderMenu(menu.children)}
            </SubMenu>
          )
        } else {
          return (<Menu.Item title={menu.title} key={menu.key}>{
            <NavLink className={styles.link_font_color} to={menu.key}>
              <span>
                {
                  menu.icon ? <Icon type={menu.icon} /> : ''
                }
                <span>
                  {menu.title}
                </span>
              </span>
            </NavLink>
          }</Menu.Item>)
        }
      })
    )
  }


  render() {

    let { collapsed, current, openKeys } = this.state;

    let theme = 'inline' // dark;

    return (
      <div className={`nav_left ${styles.nav_left}`}>
        <div className={styles.nav_left_top}>
          <Button type="primary" onClick={this.toggleCollapsed}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
        </div>
        <Sider
          trigger={null}
          collapsed={collapsed}
        >
          <Menu
            mode="inline"  // 菜单样式
            theme={theme} //定义主题颜色
            defaultOpenKeys={['/home']} // 默认展开的 一级菜单项
            selectedKeys={[current]} //默认选中
            onClick={this.handleClick} //点击 MenuItem 调用此函数
            openKeys={openKeys} //当前展开的 SubMenu 菜单项 key 数组
            onOpenChange={this.onOpenChange}  //SubMenu 展开/关闭的回调
            inlineCollapsed={collapsed} //菜单收起状态 Boolrn
          >
            {this.renderMenu(menuConfig)}
          </Menu>

        </Sider>
      </div>
    );
  }


  renderPathname = (data, cb) => {

    if (data.search(`/form/`) !== -1) {
      cb({
        menu: data,
        openKeys: [`/home/form`]
      })
    } else if (data.search(`/order/`) !== -1) {
      cb({
        menu: data,
        openKeys: [`/home/order`]
      })
    } else if (data.search(`/table/`) !== -1) {
      cb({
        menu: data,
        openKeys: [`/home/table`]
      })
    } else if (data.search(`/ui/`) !== -1) {
      cb({
        menu: data,
        openKeys: [`/home/ui`]
      })
    } else {
      cb({
        menu: data,
        openKeys: []
      })
    }
  }

}

export default SiderMenu;



