import React from "react";

import { Input, Icon, Row, Col, } from 'antd';

import ItemInput from "../ItemInput/ItemInput";

import styles from "./AttributeValue.css";

const genId = (function* () {
  let id = 1000;
  while(true) {
    yield 'tmp_' + id++;
  }
}());


export default class AttributeValue extends React.Component {

  handleChange = (id, field, value) => {
    this.props.onChange(id, { [field]: value });
  }

  itemHandleChange = (id, {name_jp})=>{

    let { value, id:rowItemId} = this.props.values;

    const newValue = [...value];

    const attribute = newValue.find(v => v.id.toString() === id.toString());

    if (attribute) {
    
      const idx = newValue.indexOf(attribute);

      newValue[idx] = {...newValue[idx],name_jp:name_jp};

      this.props.onChange(rowItemId, { value:[
        ...newValue
      ] });
    }
  }

  itemHandleDelete = (id)=>{

    let { value, id:rowItemId} = this.props.values;

    const newValue = [...value];
    
    const attribute = newValue.find(v => v.id.toString() === id.toString());
    
    if (attribute) {
      const idx = newValue.indexOf(attribute);

      newValue.splice(idx, 1);

      this.props.onChange(rowItemId,{
        ...this.props.values,
        value:newValue
      });
    }
  }

  itemHandleAdd = ()=>{

    let { value, id:rowItemId} = this.props.values;

    const newValue = [...value];
        
    newValue.push({ 
      name_jp:"",id: genId.next().value,
    });

    this.props.onChange(rowItemId,{
      ...this.props.values,
      value:newValue
    });
  }

  renderRow = (rowData) => {
    let { disabled} = this.props;

    return (
      <div className={styles.card_box}>
        <Row>
          <Col span={5}>
            <span>
              名称
            </span>
          </Col>
          <Col span={19} >
            <span>
              可选项
            </span>
          </Col>
        </Row>

        <Row>
          <Col span={5}>
            <Row>
              <Col span={24} >
                <Input disabled={disabled} style={{ width: 74 }} placeholder="如:辣度" value={rowData.name_jp} onChange={(event) => this.handleChange(rowData.id, 'name_jp', event.target.value)} />
              </Col>
            </Row>
          </Col>
          
          <ItemInput 
            disabled={disabled}
            value={rowData.value} 
            onChange={this.itemHandleChange}
            onDelete={this.itemHandleDelete}
            onAdd={this.itemHandleAdd}
          />
        </Row>

        {this.props.showClose ?
          <div className={styles['close__icon']}>
            <Icon
              style={{ fontSize: 20, }}
              type="close" color="#999CA7"
              className={styles['minus_circle']}
              onClick={() => this.props.onDelete(rowData.id)}
            />
          </div>
          : null
        }

      </div>

    )
  }

  render() {
    const {
      values
    } = this.props;

    return (
      <div>
        {this.renderRow(values)}
      </div>
    );
  }
}

