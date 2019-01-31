import React from 'react';
import { Spin } from 'antd';
import style from "./index.css";
// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => (
  <div className={style['loading_box']}>
    <Spin size="large" />
  </div>
);
