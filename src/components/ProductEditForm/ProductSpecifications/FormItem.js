import React from "react";

import { Form } from 'antd';

import ProductSpecifications from './ProductSpecifications';

import styles from "./ProductSpecifications.css";

const FormItem = Form.Item;

export default class ProductSpecificationsFormItem extends React.Component {

  render() {

    const {
      initialValue,
      form
    } = this.props;

    return (
      <FormItem className={styles.box_col_form_item} label="商品规格">
        {form.getFieldDecorator('sku', {
          initialValue: initialValue ? initialValue : [],
          rules: [{
            required: true,
            message: '请输入商品名称'
          }]
        })(
          <ProductSpecifications max={10} />
        )}
      </FormItem>
    );
  }
}