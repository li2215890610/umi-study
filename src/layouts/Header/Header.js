import React from 'react';

import styles from "./Header.css";

import { Layout, Col, Row, Modal, Select } from 'antd';

import { getOptionList } from "@utils/publicUtils";

import { setLocale, formatMessage, getLocale } from 'umi/locale';

import { storageGetItem, storageSetItem } from "@utils/localStorage";

import router from 'umi/router';

const { Header } = Layout;

class Headers extends React.Component {

  state = {

  }

  componentDidMount = () => {
    this.setState({
      userName: "Hello world"
    })
  }

  loginOrd = () => {
    Modal.confirm({
      cancelText: "取消",
      content: "这是Confirm内容",
      okText: "确定",
      title: "确认取消吗?",
      onOk() {
        router.push('/login');
      },
      onCancel() {

      }
    })
  }

  render() {

    let { userName } = this.state;
    const { languageList } = this;
    {/* className={styles.header_top} */ }

    return (
      <Header>
        <Row>
          <Col span={9}>
            <Select defaultValue={storageGetItem('locale') || getLocale()} onChange={this.languageHandleChange} className={styles['select__input']}>
              {getOptionList(languageList)}
            </Select>
          </Col>
          <Col span={9}>
            <div className={styles.header_go_out}>
              <span>欢迎～{userName}</span>
              <a onClick={this.loginOrd}>{formatMessage({id:'Header.sign_out'})}</a>
            </div>
          </Col>
        </Row>
      </Header>
    );
  }

  languageList = [
    {
      id: 'zh-CN',
      name: '🇨🇳简体中文',
    },
    {
      id: 'en-US',
      name: '🇺🇸English'
    },
    {
      id: "ja-JP",
      name: '🇯🇵日语'
    }
  ];

  languageHandleChange = (value) => {
    storageSetItem('locale', value).then((data) => {
      setLocale(value)
    })
  }

  storeStateHandleChange = (data) => {
    router.push('/');
    if (this.props.restaurant_list && this.props.restaurant_list[0].id) {
      this.props.dispatch({
        type: "StoreList/shelfWitch",
        payload: {
          restaurant_id: this.props.restaurant_list[0].id,
          status: data
        }
      })
    }
  }
}


export default Headers;