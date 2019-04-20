import React from "react";

import { Input, InputNumber, Icon, Row, Col, Checkbox, Tooltip } from 'antd';

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

    let { disabled } = this.props;

    return (
      <div className={styles.card_box}>
        <Row>
          <Col span={24}>
            <span>
              <span className={styles['required']}>*</span>规格名称
            </span>
          </Col>
          <Col span={24} >
            <Input disabled={disabled} value={rowData.sku_name} onChange={(event) => this.handleChange(rowData.id, 'sku_name', event.target.value)} />
          </Col>
        </Row>

        <Row>

          <Col span={12}>
            <Row>
              <Col span={12}>
                <Row>
                  <Col span={24}>
                    <span>
                      <span className={styles['required']}>*</span>价格
                    </span>
                  </Col>
                  <Col span={24} >
                    <InputNumber min={1} disabled={disabled} value={rowData.price} onChange={(value) => this.handleChange(rowData.id, 'price', value)} />
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
                    <Input disabled={disabled} style={{ width: 80 }} value={rowData.component} onChange={(event) => this.handleChange(rowData.id, 'component', event.target.value)} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col span={12}>
            <Row>
              <Col span={24}>
                <Row>
                  <Col span={24}>
                    <span>
                      <span className={styles['required']}>*</span>库存
                    </span>
                  </Col>
                  <Col span={24} >
                    <Row>
                      <Col span={12}>
                        <InputNumber min={1} placeholder='当前库存' value={rowData.present_inventory} onChange={(value) => this.handleChange(rowData.id, 'present_inventory', value)} />
                      </Col>
                      <Col span={12} >
                        <InputNumber min={1} placeholder='每日库存' value={rowData.everyday_inventory} onChange={(value) => this.handleChange(rowData.id, 'everyday_inventory', value)} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col span={24}>
                <Tooltip placement="bottom" title="开启后，次日0点自动补货到最大库存">
                  <Checkbox value={rowData.automatic} onChange={(value) => this.handleChange(rowData.id, 'automatic', value)}>自动补库存</Checkbox>
                </Tooltip>
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
