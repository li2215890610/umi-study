import Header from "./Header/Header";

import Footer from "./Footer/Footer";

import SiderMenu from "./SiderMenu/SiderMenu";

import Content from "./Content/Content";

import { Layout } from 'antd';

import styles from './index.css';
    
function BasicLayout(props) {
  
  return (
    <Layout>
      <SiderMenu/>
      <Layout>
        <Header/>
        <Content children={
          props.children
        }/>
        <Footer/>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
