import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'umi';
import { Table, Space, Tabs } from 'antd';
import { RootState } from '@/models/RootState';
import { TNAME } from '@/utils/action';
import * as Model from './model';
import * as Action from './action';

const { TabPane } = Tabs;

// export type CategorySelectorItem = Pick<Article, 'id'>;

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

  // Article{fetching}
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
            key: 'action',
            render: () => (
              <Space size="middle">
                <a>下架</a>
                <a>删除</a>
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
