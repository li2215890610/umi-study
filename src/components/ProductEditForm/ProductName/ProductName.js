import { Form, Input } from 'antd';

const FormItem = Form.Item;

export default ({ form, initialValue, disabled = false }) => {

  return (
    <FormItem label="商品名称">
      {
        form.getFieldDecorator('name_jp', {
          initialValue: initialValue,
          rules: [{
            required: true,
            message: '请输入商品名称'
          }]
        })(
          <Input placeholder="请输入商品名称" className='product__create--input' disabled={disabled}/>
        )
      }
    </FormItem>
  )
}