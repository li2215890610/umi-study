import React from 'react';

import { Card, Row, Col } from "antd";

import { Button } from 'antd';

// import { Messages}  from "utils/MessageUtlis";

import Success from "./Success/Success";

import Error from "./Error/Error";

import Info from "./Info/Info";

import Warning from "./Warning/Warning";

import styles from "./Message.css";

class Message extends React.Component {

  onMessages = () =>{
    // Messages('loading','通知',5)
  }

  render() {
    return (
      <div>
        <Card title='通知提醒框 (message)' className={styles.card}>
          <Row>
            <Col span='4'>
              <Success/>            
            </Col>
            <Col span='4'>
              <Error/>            
            </Col>
            <Col span='4'>
              <Info/>            
            </Col>
            <Col span='4'>
              <Warning/>            
            </Col>
            <Col span='4'>
              <Button type="primary" onClick={this.onMessages}>自定义封装</Button>            
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default  Message ;
