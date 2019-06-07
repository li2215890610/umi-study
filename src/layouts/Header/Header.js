import React from 'react';

import styles from "./Header.css";

import { Layout, Col, Row, Modal, Select } from 'antd';

import { getOptionList } from "@utils/publicUtils";

import { setLocale, formatMessage, getLocale } from 'umi/locale';

import { storageGetItem, storageSetItem } from "@utils/localStorage";

import logo from "../../assets/favicon.png";

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

    return (
      <Header>
        <Row type="flex" justify="space-between">
          <Col span={6}>
            <Row type="flex" justify="start" align="middle" className={styles['user__handle']}>
              <img src={logo} alt='logo' width='150' height='24' /> <span className={styles['logo_font']}>商家后台</span>
            </Row>
          </Col>

          <Col span={18}>
            <Row type="flex" justify="end" align="middle" className={styles['user__handle']}>

              <Col className={styles['col___styles--handle']}>
                <Select className={styles['select__input']} defaultValue={storageGetItem('locale') || getLocale()} onChange={this.languageHandleChange} className={styles['select__input']}>
                  {getOptionList(languageList)}
                </Select>
              </Col>

              <Col className={styles['col___styles--handle']}>
                <div className={styles.header_go_out}>
                  <span>欢迎～{userName}</span>
                  <a onClick={this.loginOrd}>{formatMessage({ id: 'Header.sign_out' })}</a>
                </div>
              </Col>

            </Row>
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
}


export default Headers;