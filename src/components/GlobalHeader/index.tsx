import React from 'react';
import { Row, Col } from 'antd';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

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
