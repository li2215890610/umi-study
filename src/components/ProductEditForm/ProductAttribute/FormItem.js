import React from "react";

import { Form } from 'antd';

import ProductAttribute from './ProductAttribute';

const FormItem = Form.Item;

export default ({ form, initialValue, disabled = false }) => {

    return (
        <FormItem label="商品名称">
            {
                form.getFieldDecorator('attribute', {
                    initialValue: initialValue ? initialValue:[],
                })(
                    <ProductAttribute max={10} disabled={disabled} />
                )
            }
        </FormItem>
    )
}