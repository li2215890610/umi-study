import { Form, Select } from 'antd';

import styles from "../SelectProductMainCategory/SelectProductMainCategory.css";

import { getOptionList } from "@utils/utils";

import { Button } from 'antd/lib/radio';

import Link from 'umi/link';

const FormItem = Form.Item;

export default ({ form, initialValue, disabled = false  }) => {
  
  const selectList = [{id:'',name:"全部"},{id:'1',name:"1"}];

  return (
    <FormItem label="商品子分类">
      {
        form.getFieldDecorator('managerqq', {
          initialValue: initialValue,
          rules: [{
            required: true,
            message: '请选择子商品分类'
          }]
        })(
          <Select className={styles['product__create--select']} disabled={disabled}>
            {getOptionList(selectList)}
          </Select>
        )
      }

      {
        !disabled && <Link to="/dashboard/product/sub_category">
        <Button className={styles['product__create--btn']}>
          添加子分类
        </Button>
      </Link>
      }

    </FormItem>
  )
}

