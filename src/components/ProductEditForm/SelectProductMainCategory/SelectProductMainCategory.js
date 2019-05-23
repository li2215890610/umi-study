import { Form,TreeSelect } from 'antd';

import styles from "./SelectProductMainCategory.css";

import { Button } from 'antd/lib/radio';

import Link from 'umi/link';

const FormItem = Form.Item;

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

export default ({ form, initialValue, disabled = false, optionalAllValue }) => {
  
  return (
    <FormItem label="商品主分类">
      {
        optionalAllValue && form.getFieldDecorator('types', {
          initialValue: initialValue,
          rules: [{
            required: true,
            message: '请选择商品分类'
          }]
        })(
          <TreeSelect
            multiple
            allowClear
            treeDefaultExpandAll={true}
            disabled={disabled}
            showCheckedStrategy={SHOW_PARENT}
            style={{ width: 300 }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            treeData={optionalAllValue}
            placeholder="请选择主分类"
          />
        )
      }

      {
        !disabled && <Link to="/dashboard/product/main_category">
          <Button className={styles['product__create--btn']}>
            添加分类
          </Button>
        </Link>
      }
    </FormItem>
  )
}