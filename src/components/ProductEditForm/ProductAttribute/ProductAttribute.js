import React from "react";

import { Button} from 'antd';

import AttributeValue from "./AttributeValue/AttributeValue";

import Modals from "../Modals/Modals";

import styles from "./ProductAttribute.css";

const genId = (function* () {
  let id = 0;
  while(true) {
    yield 'tmp_' + id++;
  }
}());

class ProductAttribute extends React.Component {

  state =  {
    modalVisible: false
  }
  
  needShowClose = () => this.props.value.length > 1

  handleAttributeDelete = (id) => {
    const newValue = [...this.props.value];
    
    const attribute = newValue.find(v => v.id.toString() === id.toString());
    
    if (attribute) {
      const idx = newValue.indexOf(attribute);

      newValue.splice(idx, 1);

      this.props.onChange(newValue);
    }
  }

  handleAttributeChange = (id, data) => {

    const newValue = [...this.props.value];

    const attribute = newValue.find(v => v.id.toString() === id.toString());

    if (attribute) {
    
      const idx = newValue.indexOf(attribute);
    
      newValue[idx] = {...newValue[idx], ...data};
    
      this.props.onChange(newValue);
    }
  }

  handleAttributeAdd = () => {
    const newSubValue = [{ name:"",id:1}, { name:"",id:2}, { name:"",id:3}, { name:"",id:4}, { name:"",id:5} , { name:"",id:6}, { name:"",id:7}, { name:"",id:8}]
    
    const newValue = [...this.props.value, {id: genId.next().value, value:newSubValue},];

    this.props.onChange(newValue);
  }

  onHandleCLickModal = ()=>{

    let { modalVisible} = this.state;

    this.setState({
      modalVisible: !modalVisible
    })
  }

  renderAttributes() {
    let { disabled} = this.props;

    const attributes = this.props.value;
    
    return attributes && attributes.map((item) => {
      return (
        <AttributeValue
          disabled={disabled}
          key={item.id}
          values={item}
          onChange={this.handleAttributeChange}
          onDelete={this.handleAttributeDelete}
          showClose={this.needShowClose()}
        />
      )
    });
  }

  renderAddBtn() {
    let { disabled, value, max} = this.props;
    
    return (
      <div>
        {
          !disabled && <Button
              key="addBtn"
              disabled={value.length > max}
              style={{marginTop:20}}
              onClick={this.handleAttributeAdd}
              className={styles['add_specifications--btn']}
          >
            添加规格
          </Button>
        }

        {
          value.length > max ? <span className={styles['max__text']}>最多添加{max}个属性</span>:""
        }
        
      </div>
    )
  }

  renderWrapper(children) {

    let { modalVisible } = this.state;

    return (
      <div>
          <div className={styles['info']}>
            商品属性是配料不同口味不同的商品，如加糖、无糖 <span className='errored__span' onClick={this.onHandleCLickModal}>查看示例</span>
          </div>
          
          {children}
          
          {this.renderAddBtn()}

          <Modals visible={modalVisible} hideModal={this.onHandleCLickModal}/>
      </div>
    )
  }

/**
   * 定义ProductAttribute数据结构
   * 
   * [{
   *    id: 123,
   *    sku_name: 1,
   *    price: 1,
   *    component: 10
   * }]
   */
  render() {
    return this.renderWrapper([
      this.renderAttributes(),
    ]);
  }
}

export default ProductAttribute;