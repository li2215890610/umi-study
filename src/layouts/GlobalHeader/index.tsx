import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import { useSelector, useDispatch } from 'umi';

const GlobalHeader: React.FC<{}> = () => {
  return (
    <Row>
      <Col span={12}>
        <LeftContent />
      </Col>
      <Col span={12}>
        <RightContent />
      </Col>
    </Row>
  );
};

export default GlobalHeader;
