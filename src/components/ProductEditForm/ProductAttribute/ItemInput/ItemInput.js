import React from "react";

import { Input, Col, Icon, Button} from 'antd';

import styles from "./ItemInput.css";

export default class ItemInput extends React.Component {

  handleChange = (id, field, value) => {
    this.props.onChange(id, { [field]: value });
  }

  handleItemRemoveValue = (id) => {
    this.props.onDelete(id)
  }

  handleItemHandleAdd = ()=>{
    this.props.onAdd()
  }

  renderRow = (rowData) => {
    let { disabled} = this.props;
    return <Col span={18}>
      {rowData.map((item, index)=>{
        return (
          <div key={index}  className={styles['item__input']}>
            <Input disabled={disabled} className={styles['input']}  value={item.name} onChange={(event) => this.handleChange(item.id, 'name', event.target.value)} />
            {
              rowData.length !== 1 && !disabled && <Icon className={styles['remove_value_btn']} onClick={()=>{this.handleItemRemoveValue(item.id)}} type="close-circle" />
            }
          </div>
        )
      })}

      {
        rowData.length < 8 && !disabled && <Button onClick={this.handleItemHandleAdd}>
          添加选项
        </Button>
      }
      
    </Col>;
  }

  render() {
    const {
      value
    } = this.props;

    return (
      <div>
        {this.renderRow(value)}
      </div>
    );
  }
}

