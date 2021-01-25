import React, { useEffect } from 'react';
import { useDispatch, useSelector, Link } from 'umi';
import { Table, Space, Tabs, Popconfirm } from 'antd';
import { RootState } from '@/models/RootState';
import { TNAME } from '@/utils/action';
import * as Model from './model';
import * as Action from './action';

const { TabPane } = Tabs;

const List: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const fetching = useSelector((state: RootState) => {
    return !!state.loading.effects[TNAME(Action.ActionTypes.Fetch, Model.NS)];
  });

  const state = useSelector((state: RootState) => {
    return state.article;
  });

  console.log(state);

  useEffect(() => {
    dispatch(
      Action.fetch({
        pageNum: 1,
        pageSize: 5,
        statusFilter: 0,
      }),
    );
  }, []);

  return (
    <>
      <Tabs
        defaultActiveKey=""
        type="card"
        size="large"
        onChange={key => {
          dispatch(
            Action.fetch({
              pageNum: 1,
              pageSize: 5,
              statusFilter: +key,
            }),
          );
        }}
      >
        {[...Model.articleStatus].map(([filter, label]) => (
          <TabPane tab={label} key={filter.toString()} />
        ))}
      </Tabs>
      <Table
        loading={fetching}
        columns={[
          {
            title: '文章名称',
            dataIndex: ['article', 'name'],
            key: 'name',
          },
          {
            title: '浏览量',
            dataIndex: ['article', 'pv'],
            key: 'pv',
            render: pv => pv || '_',
          },
          {
            title: '创建时间',
            dataIndex: ['article', 'createTime'],
            key: 'createTime',
            render: createTime => createTime || '_',
          },
          {
            title: '操作',
            key: 'x',
            render: (_, article) => (
              <Space size="middle">
                {/* <Popconfirm
                  placement="topRight"
                  title={'确定要下架吗?'}
                  onConfirm={() => {
                    const { status} = article.article
                    dispatch(
                      Action.batchUpDownShelfProduct({
                        status: status,
                        ids: [article.id],
                      }),
                    );
                  }}
                  okText="确定"
                  cancelText="取消"
                >
                  <a>上架</a>
                </Popconfirm>
                 */}
                <Link to={`/dashboard/article/detail/${article.id}`}>编辑</Link>
                <Popconfirm
                  placement="topLeft"
                  title={'确定要删除吗?'}
                  onConfirm={() => {
                    dispatch(
                      Action.deleteArticle({
                        id: article.id,
                      }),
                    );
                  }}
                  okText="确定"
                  cancelText="取消"
                >
                  <a>删除</a>
                </Popconfirm>
              </Space>
            ),
          },
        ]}
        dataSource={state.list}
        rowKey="id"
      />
    </>
  );
};

export default List;
