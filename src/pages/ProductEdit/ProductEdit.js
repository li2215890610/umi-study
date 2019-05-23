
import React, { Component } from 'react';

import { Card, Form, Button } from 'antd';

import { connect } from 'dva';

import Link from 'umi/link';

import {
  SelectProductMainCategory,
  ProductName,
  UploadImgList,
  ProductDesc,
  ProductAttribute,
  ProductSpecificationsADD
} from "@components/ProductEditForm";

import { ProductSpecifications } from "./Components/index";

import styles from './ProductEdit.css';

class ProductEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {

    this.props.dispatch({
      type: "ProductEdit/getMainCategoryList",
      payload: {}
    })

    if (this.props.location && this.props.location.query && this.props.location.query.product_id) {
      this.props.dispatch({
        type: "ProductEdit/getRestaurantProductDetail",
        payload: {
          dish_id: this.props.location.query.product_id
        }
      })
    }
  }

  render() {

    const formTailLayout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 12 },
      labelAlign: 'left'
    }

    let { main_category_list, productDetail } = this.props;

    return (
      <Form {...formTailLayout} onSubmit={this.handleSubmit}>
        <Card bordered={false} title="基本信息（灰色底不可修改）">
          <SelectProductMainCategory initialValue={productDetail.types} form={this.props.form} optionalAllValue={main_category_list} />

          <ProductName initialValue={productDetail.name_jp} form={this.props.form} />

          <ProductDesc initialValue={productDetail.description_jp} form={this.props.form} />

          <UploadImgList disabled={false} imgRequired={false} labelFont="商品图片" labelkey="image_urls" initialValue={productDetail.image_urls} form={this.props.form} />

        </Card>

        <Card bordered={false} title="售卖信息">

          <ProductSpecificationsADD initialValue={[]} form={this.props.form} />

          {/* <ProductSpecifications initialValue={[{}]} form={this.props.form} disabled={true} /> */}

          <ProductAttribute initialValue={productDetail.store_dish && productDetail.store_dish.attribute ? productDetail.store_dish.attribute : []} form={this.props.form} />

        </Card>

        <Card bordered={false}>
          <Button htmlType="submit" className={`${styles['submit__btn']}`} type='primary'>
            保存
            </Button>
          <Link to='/dashboard/product/restaurant_product'>
            <Button className='cancel_btn'>取消</Button>
          </Link>
        </Card>

      </Form>
    )
  }


  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);


      }
    });
  }
}


// export default ProductEdit;
// export default Form.create()(ProductEdit)


export default connect(({ ProductEdit }) => {
  return {
    main_category_list: ProductEdit.main_category_list,
    productDetail: ProductEdit.productDetail
  }
})(Form.create()(ProductEdit));

