import React from 'react';

import styles from "./Header.css";

import { Layout, Col, Row, Modal } from 'antd';

import router from 'umi/router';

const { Header } = Layout;

class Headers extends React.Component {

  state = {

  }

  componentDidMount = () => {
    this.setState({
      userName: "Hello world"
    })
  }

  loginOrd = () => {
    Modal.confirm({
      cancelText: "取消",
      content: "这是Confirm内容",
      okText: "确定",
      title: "确认取消吗?",
      onOk() {
        router.push('/login');
      },
      onCancel() {

      }
    })
  }

  render() {

    let { userName } = this.state;

    return (
      <Header>
        <Row>
          <Col span='24' className={styles.header_top}>
            <div className={styles.header_go_out}>
              <span>欢迎～{userName}</span>
              <a onClick={this.loginOrd}>退出</a>
            </div>
          </Col>
        </Row>
      </Header>
    );
  }
}


export default Headers;