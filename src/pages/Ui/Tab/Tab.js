import React from 'react';

import { Card, Row } from "antd";

import BasicsTab from "./BasicsTab/BasicsTab";

import IconTab from "./IconTab/IconTab";

import CustomDynamicAddTab from "./CustomDynamicAddTab/CustomDynamicAddTab";

import styles from "./Tab.css";

class Tab extends React.Component {

  render() {
    return (
      <div>
        <Card title='Tab页签' className={styles.card}>
          <Row>
            <BasicsTab />
          </Row>
        </Card>
        <Card title='Icon-Tab页签' className={styles.card}>
          <Row>
            <IconTab />
          </Row>
        </Card>
        <Card title='自定义Tab页签' className={styles.card}>
          <CustomDynamicAddTab />
        </Card>

      </div>
    );
  }
}

export default Tab;
