import React from 'react';

import { Card } from "antd";

import BasicsModal from "./BasicsModal/BasicsModal";

import InformationConfirmModal from "./InformationConfirmModal/InformationConfirmModal";

import styles from "./Modal.css";

class Modal extends React.Component {

  render() {
    return (
      <div>
        <Card title='基础模态框' className={styles.card}>
          <BasicsModal/>
        </Card>
        <Card title='信息确认框' className={styles.card}>
          <InformationConfirmModal/>
        </Card>
      </div>
    );
  }
}

export default  Modal ;
