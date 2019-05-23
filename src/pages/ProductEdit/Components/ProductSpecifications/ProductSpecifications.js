import React from "react";

import { Button } from "antd";

import SpecificationsValue from "./SpecificationsValue/SpecificationsValue";

import Modals from "@components/ProductEditForm/Modals/Modals";

import styles from "./ProductSpecifications.css";

// 接收配置数组
/**
 * props = {
 *    value: [{
 *      key: xx,
 *      sku_name:"11",
 *      price: 10,
 *      component: 10
 *    }, ...],
 *    onChange: // 通知form更新字段值
 * }
 */

class ProductSpecifications extends React.Component {

  state = {
    modalVisible: false
  }

  static key_index = 1

  normalizeMap = (renderValue) => {
    return renderValue.map((r) => {
      return { ...r, id: 'key_' + ProductSpecifications.key_index++, }
    })
  }

  needShowClose = () => this.props.value.length > 1

  pushSpecificationsList = () => {

    let newRnderValue = [...this.props.value];

    newRnderValue.push({
      sku_name: 1,
      price: 1,
      component: 10
    })

    this.props.onChange(this.normalizeMap(newRnderValue))
  }

  removeSpecificationsList = (id) => {
    if (this.props.disabled) return;

    const newValue = [...this.props.value];

    const attribute = newValue.find(v => v.id.toString() === id.toString());

    if (attribute) {
      const idx = newValue.indexOf(attribute);

      newValue.splice(idx, 1);

      this.props.onChange(newValue);
    }
  }

  handleChange = (id, data) => {

    const newValue = [...this.props.value];

    const attribute = newValue.find(v => v.id.toString() === id.toString());

    if (attribute) {

      const idx = newValue.indexOf(attribute);

      newValue[idx] = { ...newValue[idx], ...data };

      this.props.onChange(newValue);
    }
  }

  onHandleCLickModal = () => {
    let { modalVisible } = this.state;

    this.setState({
      modalVisible: !modalVisible
    })
  }

  render() {

    let { value, disabled } = this.props;

    let { modalVisible } = this.state;

    return (
      <div>

        <div className={styles['info']}>
          商品规格决定价格和库存，如大份、小份 <span className='errored__span' onClick={this.onHandleCLickModal}>查看示例</span>
        </div>

        {
          value && value.map((item) => {
            return <SpecificationsValue
              key={item.id}
              value={item}
              pushSpecificationsList={this.pushSpecificationsList}
              removeSpecificationsList={this.removeSpecificationsList}
              onChange={this.handleChange}
              showClose={this.needShowClose()}
              disabled={disabled}
            />
          })
        }
        {
          !disabled && <Button
            disabled={this.props.value.length > this.props.max}
            style={{ ...this.buttonStyles }}
            onClick={this.pushSpecificationsList}
            className={styles['add_specifications--btn']}
          >
            添加规格
          </Button>
        }


        <Modals visible={modalVisible} hideModal={this.onHandleCLickModal} />

      </div>
    );
  }

  buttonStyles = {
    marginTop: 20,
    marginBottom: 20
  }
}

export default ProductSpecifications;