import React from 'react';

import { Layout } from 'antd';

import styles from "./Content.css";

const { Content } = Layout

function RenderContent(props) {
  return (
    <Content className={styles.content} >
      {props.children}
    </Content>
  );
}

export default RenderContent