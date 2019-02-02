import React from 'react';

import { Row, Col } from "antd";

import DefaultModal from "./DefaultModal/DefaultModal";

import LevelMiddleModal from "./LevelMiddleModal/LevelMiddleModal";

class BasicsModal extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col span='6'>
            <DefaultModal />
          </Col>
          <Col span='6'>
            <LevelMiddleModal />
          </Col>
        </Row>
      </div>
    );
  }
}

export default BasicsModal;
