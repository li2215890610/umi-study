import { Form, Input } from 'antd';

const FormItem = Form.Item;

const { TextArea } = Input;

export default ({ form, initialValue, disabled = false }) => {
  
  return (
    <FormItem label="商品描述">
      {
        form.getFieldDecorator('description', {
          initialValue: initialValue,
        })(
          <TextArea placeholder="请输入商品描述" className='product__create--input' disabled={disabled}/>
        )
      }
    </FormItem>
  )
}