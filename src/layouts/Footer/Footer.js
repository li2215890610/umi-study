import React from 'react';

import { Layout } from 'antd';

import styles from "./Footer.css";

const { Footer } = Layout;


class Footers extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  link_url = 'https://github.com/li2215890610/dva-antd-React'
  render(){
    let {link_url} = this;
    return (
      <Footer>
        <div className={styles.footer}>
            Ant React ©2018 UED 视觉交互 版权所有 归属 <a className={styles.link} href={link_url} rel="_blank">杨大侠</a>
        </div>
      </Footer>
    );
  }
}

export default Footers