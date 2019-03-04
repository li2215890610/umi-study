import React from "react";

import { Form, InputNumber, Icon, Button, Row, Col } from 'antd';

import styles from "./RenderDiscountList.css";

const FormItem = Form.Item;

// 接收优惠配置数组
/**
 * props = {
 *    value: [{
 *      key: xx,
 *      discount: 10,
 *      fullAmount: 10
 *    }, ...],
 *    onChange: // 通知form更新字段值
 * }
 */
class MyC extends React.Component {


  removeDiscountList = (k) => {
    // const { value } = this.props;
    this.props.removeDiscountList(k)
  }

  pushDiscountList = () => {
    this.props.pushDiscountList()
  }

  handleChange = (key, field, value) => {

    const row = this.props.value.find((item) => {
      return item.key === key;
    });

    if (row) {
      row[field] = value ? value : 1;
    }
    this.props.onChange([...this.props.value]);
  }

  renderRow = (rowData, index, array) => {

    return (
      <Row key={rowData.key} type="flex" justify="start" align="middle" className={styles.card_box}>
        <Col span={4}>
          <span>
            满减优惠
          </span>
        </Col>
        <Col span={4} className={styles.card_box_col}>
          <div className={styles.discount_font}>
            满
          </div>
          <InputNumber min={1} value={rowData.discount} onChange={(value) => this.handleChange(rowData.key, 'discount', value)} />
        </Col>
        <Col span={4} className={styles.card_box_col}>
          <span className={styles.discount_font}>
            减
          </span>
          <InputNumber min={1} value={rowData.fullAmount} onChange={(value) => this.handleChange(rowData.key, 'fullAmount', value)} />
          <span className={styles.discount_font}>
            元
          </span>
        </Col>
        <Col span={3}>
          <div className={styles.discount_input_right}>
            {array.length > 1 ? (
              <Icon
                className={styles.plus_circle}
                type="minus-circle-o"
                disabled={array.length === 1}
                onClick={() => this.removeDiscountList(rowData.key)}
              />
            ) : null}
            <Icon
              className={styles.minus_circle}
              type="plus-circle"
              onClick={this.pushDiscountList}
            />
          </div>
        </Col>
      </Row>
    )
  }

  render() {
    const {
      value
    } = this.props;

    return (value.map(this.renderRow));
  }
}

class renderDiscountList extends React.Component {

  constructor() {
    super()

    let rawData = [{
      discount: 11,
      fullAmount: 22
    }, {
      discount: 11,
      fullAmount: 22
    }, {
      discount: 11,
      fullAmount: 22
    }, {
      discount: 11,
      fullAmount: 22
    }]

    this.state = {
      rawData: this.normalize(rawData),
    }
  }

  static inc = 1

  normalize = (rawData) => {
    return rawData.map((r) => {
      return { ...r, key: 'key_' + renderDiscountList.inc++ }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  pushDiscountList = () => {
    const { rawData } = this.state;
    rawData.push({
      discount: 1,
      fullAmount: 1
    })
    this.setState({
      rawData: this.normalize(rawData)
    })
  }

  removeDiscountList = (key) => {
    const { rawData } = this.state;

    rawData.map((item, index) => {
      if (item.key === key) {
        return rawData.splice(index, 1)
      }
    })
    this.setState({
      rawData: rawData
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { rawData } = this.state;
    console.log(rawData);

    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };

    const formItem = <FormItem className={styles.box_col_form_item}>
      {getFieldDecorator('youhui', {
        initialValue: rawData,
      })(
        <MyC pushDiscountList={this.pushDiscountList} removeDiscountList={this.removeDiscountList} />
      )}
    </FormItem>;

    return (
      <Form onSubmit={this.handleSubmit}>
        {formItem}
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(renderDiscountList);