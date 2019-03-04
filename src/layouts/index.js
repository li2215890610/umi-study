import Header from "./Header/Header";

import Footer from "./Footer/Footer";

import SiderMenu from "./SiderMenu/SiderMenu";

import Content from "./Content/Content";

import { Layout } from 'antd';

function BasicLayout(props) {

  return (
    <Layout>
      <Header />
      <Layout>
        <SiderMenu />
        <Layout>
          <Content children={
            props.children
          } />
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
}


export default BasicLayout;

