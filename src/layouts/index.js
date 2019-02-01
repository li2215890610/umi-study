import withRouter from 'umi/withRouter';

import Header from "./Header/Header";

import Footer from "./Footer/Footer";

import SiderMenu from "./SiderMenu/SiderMenu";

import Content from "./Content/Content";

import { Layout } from 'antd';
    
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

