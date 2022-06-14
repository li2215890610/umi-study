import React, { FC } from 'react';
import { useDispatch, useSelector } from 'umi';
import { RootState } from '@/models/RootState';
import { Form, Input, Button, Space, Spin } from 'antd';
import { TNAME } from '@/utils/action';
import * as Model from './model';
import * as Action from './action';
import styles from './index.less';

const Login: FC = () => {
  // console.log(login,loading);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const fetching = useSelector((state: RootState) => {
    return !!state.loading.effects[TNAME(Action.ActionTypes.Login, Model.NS)];
  });

  return (
    <Spin spinning={fetching}>
      <div style={{ width: '100vw' }}>
        <div className={styles.login_header}>
          <div className={styles.logo}>
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              alt="慕课后台管理系统"
            />
            Umi全家桶后台管理系统学习V3
          </div>
        </div>
        <div className={styles.login_content_wrap}>
          <div className={styles.login_content}>
            <div className={styles.word}>
              低碳环保 <br />
              引领城市新经济发展
            </div>
            <div className={styles.login_box}>
              {/* <div className={styles.error_msg_wrap}>
                <div className={styles.show}></div>
              </div> */}
              <div className={styles.title}>欢迎使用</div>

              <Form
                className={styles.login_form}
                form={form}
                name="control-hooks"
                onFinish={values => {
                  console.log(values);
                  dispatch(
                    Action.login({
                      username: values.username,
                      password: values.password,
                    }),
                  );
                }}
              >
                <Form.Item
                  name="username"
                  label="账号"
                  rules={[
                    {
                      validator: (_, value) => {
                        if (!value) {
                          return Promise.reject('请输入账号');
                        }
                        if (value.length > 11) {
                          return Promise.reject('账号不可大于11位');
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input placeholder="请输入账号" />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="密码"
                  rules={[
                    {
                      validator: (_, value) => {
                        if (!value) {
                          return Promise.reject('请输入密码');
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input.Password placeholder="请输入密码" />
                </Form.Item>

                {/* <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                  {({ getFieldValue }) => {
                    return getFieldValue('gender') === 'other' ? (
                      <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                        <Input />
                      </Form.Item>
                    ) : null;
                  }}
                </Form.Item> */}

                <Form.Item>
                  <Space>
                    <Button type="primary" htmlType="submit">
                      登陆
                    </Button>
                    <Button
                      htmlType="button"
                      onClick={() => form.resetFields()}
                    >
                      重置
                    </Button>
                    <Button
                      type="link"
                      htmlType="button"
                      onClick={() => {
                        form.setFieldsValue({
                          username: '2215890100',
                          password: '2215890100',
                        });
                      }}
                    >
                      默认填充
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default Login;
