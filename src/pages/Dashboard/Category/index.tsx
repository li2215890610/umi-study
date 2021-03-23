import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'umi';
import {
  Space,
  Button,
  Row,
  Col,
  Input,
  Tooltip,
  List,
  Form,
  Popconfirm,
  Spin,
  Empty,
  Modal,
} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { ReactSortable } from 'react-sortablejs';
import styles from './index.less';
import classnames from 'classnames';
import { RootState } from '@/models/RootState';
import { TNAME } from '@/utils/action';
import * as Model from './model';
import * as Action from './action';

const Category: React.FC<{}> = () => {
  const dispatch = useDispatch();

  /**
   * 页面状态
   */
  const pageState = useSelector((rootState: RootState) => {
    return rootState[Model.NS];
  });
  const listLoading = useSelector((state: RootState) => {
    return state.loading.effects[TNAME(Action.ActionTypes.Fetch, Model.NS)];
  });

  const state = useSelector((state: RootState) => {
    return state.category;
  });

  useEffect(() => {
    dispatch(Action.fetch());
  }, []);

  /**
   * 创建
   */
  const createLoading = useSelector((state: RootState) => {
    return state.loading.effects[TNAME(Action.ActionTypes.Create, Model.NS)];
  });
  const [newCategoryVisible, setNewCategoryVisible] = useState(false);
  const [newCategoryForm] = Form.useForm();
  const { list } = state;

  return (
    <div style={{ marginTop: 16 }}>
      <Row style={{ marginBottom: 16 }}>
        <Col span={12}>
          <Button
            type="primary"
            key="create"
            onClick={() => {
              setNewCategoryVisible(true);
              newCategoryForm.resetFields();
            }}
          >
            + 新建分类
          </Button>
        </Col>
        <Col span={12} className={styles.tip}>
          <Space>
            <ExclamationCircleOutlined />
            可拖动排序
          </Space>
        </Col>
      </Row>

      <Spin spinning={listLoading}>
        {list.length > 0 ? (
          <List
            split
            className={classnames(styles.list, {
              [styles.sorting]: sorting,
            })}
          >
            <ReactSortable
              list={list}
              setList={setList}
              animation={150}
              easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
              ghostClass="itemGhost"
              dragClass="itemDrag"
              chosenClass="itemChosen"
              onStart={() => {
                setSorting(true);
              }}
              onEnd={e => {
                if (e.newIndex !== e.oldIndex) {
                  dispatch(Action.sort(list));
                }
                setSorting(false);
              }}
            >
              {list.map((item, index) => (
                <EditableRow index={index} key={item.id}>
                  <List.Item
                    extra={
                      <Space>
                        <Popconfirm
                          disabled={deleteLoading}
                          placement="left"
                          title="分类删除后不可恢复，但分类下的商品依然保留。确定删除该分类？"
                          onConfirm={() => {
                            setDeleteCategory(item);
                          }}
                          okText="确定"
                          cancelText="取消"
                        >
                          <Button
                            disabled={deleteLoading && deleteCategory !== item}
                            loading={deleteLoading && deleteCategory === item}
                            type="link"
                            size="small"
                          >
                            删除
                          </Button>
                        </Popconfirm>
                        <WeappRequired denyType="click">
                          <a
                            onClick={() => {
                              setGeneralizeVisible(true);
                              setGeneralizeCategory(item);
                            }}
                          >
                            推广
                          </a>
                        </WeappRequired>
                      </Space>
                    }
                  >
                    <EditableCell
                      style={{
                        width: 320,
                      }}
                      record={item}
                      editable
                      disabled={deleteLoading}
                      dataIndex="name"
                      title="名称"
                      handleSave={(item: Model.Category) => {
                        console.log('保存', item);
                        dispatch(Action.update(item));
                      }}
                    >
                      {item.name}
                    </EditableCell>
                  </List.Item>
                </EditableRow>
              ))}
            </ReactSortable>
          </List>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </Spin>

      <Modal
        title="新建分类"
        forceRender
        visible={newCategoryVisible}
        okText="确定"
        onOk={() => {
          newCategoryForm.submit();
        }}
        onCancel={() => {
          setNewCategoryVisible(false);
        }}
        cancelButtonProps={{
          disabled: createLoading,
        }}
        confirmLoading={createLoading}
      >
        <Form
          form={newCategoryForm}
          initialValues={{
            name: '',
          }}
          onFinish={values => {
            dispatch(
              Action.create({
                name: values.name,
                onSuccess: () => {
                  setNewCategoryVisible(false);
                },
              }),
            );
          }}
          labelCol={{ flex: '100px' }}
        >
          <Row>
            <Col span={15}>
              <Form.Item
                name="name"
                label="分类名称"
                rules={[
                  { required: true, message: '分类名称不能为空' },
                  { max: 20, message: '最多20个字符' },
                ]}
              >
                <Input
                  disabled={createLoading}
                  type="text"
                  maxLength={20}
                  placeholder="请输入分类名称"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default Category;
