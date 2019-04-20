import React from "react";

import { Input, InputNumber, Icon, Row, Col } from 'antd';

import styles from "./SpecificationsValue.css";

export default class SpecificationsValue extends React.Component {

  removeSpecificationsList = (k) => {
    this.props.removeSpecificationsList(k)
  }

  pushSpecificationsList = () => {
    this.props.pushSpecificationsList()
  }

  handleChange = (id, field, value) => {
    this.props.onChange(id, { [field]: value });
  }

  renderRow = (rowData) => {

    return (
      <div className={styles.card_box}>
        <Row>
          <Col span={24}>
            <span>
              <span className={styles['required']}>*</span>规格名称
            </span>
          </Col>
          <Col span={24} >
            <Input value={rowData.sku_name} onChange={(event) => this.handleChange(rowData.id, 'sku_name', event.target.value)} />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <span>
                  <span className={styles['required']}>*</span>价格
                </span>
              </Col>
              <Col span={24} >
                <InputNumber min={1} value={rowData.price} onChange={(value) => this.handleChange(rowData.id, 'price', value)} />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <span>
                  份量
                </span>
              </Col>
              <Col span={24} >
                <Input style={{ width: 80 }} value={rowData.component} onChange={(event) => this.handleChange(rowData.id, 'component', event.target.value)} />
              </Col>
            </Row>
          </Col>
        </Row>

        {
          this.props.showClose && <div className={styles['close__icon']}>
            <Icon
              style={{ fontSize: 20, }}
              type="close" color="#999CA7"
              className={styles['minus_circle']}
              onClick={() => this.removeSpecificationsList(rowData.id)}
            />
          </div>
        }


      </div>

    )
  }

  render() {
    const {
      value
    } = this.props;

    return (
      <div>
        {this.renderRow(value)}
      </div>
    );
  }



}
