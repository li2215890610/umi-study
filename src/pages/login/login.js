import React from 'react';

import styles from "./Login.css";

import { Form, Input, Button } from 'antd'

import router from 'umi/router';

const FormItem = Form.Item;

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {//每次进入登录页清除之前的登录信息

  }

  loginReqClick = () => {
    router.push('/home');
  };

  render() {
    return (
      <div>
        <div className={styles.login_header}>
          <div className={styles.logo}>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="慕课后台管理系统" />
            umi全家桶后台管理系统学习
            </div>
        </div>
        <div className={styles.login_content_wrap}>
          <div className={styles.login_content}>
            <div className={styles.word}>低碳环保 <br />引领城市新经济发展</div>
            <div className={styles.login_box}>
              <div className={styles.error_msg_wrap}>
                <div
                  className={this.state.errorMsg ? "show" : ""}>
                  {this.state.errorMsg}
                </div>
              </div>
              <div className={styles.title}>欢迎使用</div>
              <LoginForm ref="login" loginSubmit={this.loginReqClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class LoginForm extends React.Component {

  loginSubmit = (e) => {
    e && e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let formValue = this.props.form.getFieldsValue();
        this.props.loginSubmit({
          username: formValue.username,
          password: formValue.password
        });
      }
    });
  };

  checkUsername = (rule, value, callback) => {
    let reg = /^\w+$/;
    if (!value) {
      callback('请输入用户名!');
    } else if (!reg.test(value)) {
      callback('用户名只允许输入英文字母');
    } else {
      callback();
    }
  };

  checkPassword = (rule, value, callback) => {
    if (!value) {
      callback('请输入密码!');
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className={styles.login_form}>
        <FormItem>
          {getFieldDecorator('username', {
            initialValue: 'username',
            rules: [{ validator: this.checkUsername }]
          })(
            <Input placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            initialValue: '123456',
            rules: [{ validator: this.checkPassword }]
          })(
            <Input type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" onClick={this.loginSubmit} className={styles.login_form_button}>
            登录
            </Button>
        </FormItem>
      </Form>
    )
  }
}

LoginForm = Form.create({})(LoginForm);
