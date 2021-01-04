import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'umi';
import { Table, Tag, Space } from 'antd';
import { RootState } from '@/models/RootState';
import { TNAME } from '@/utils/action';
import { Article } from './entities/Article';
import * as Model from './model';
import * as Action from './action';

export type CategorySelectorItem = Pick<Article, 'id'>;

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
    dispatch(Action.fetch());
  }, []);

  // Article{fetching}
  return (
    <>
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
            title: '状态',
            dataIndex: ['article', 'status'],
            key: 'status',
            render: status => Model.articleStatus.get(status) || '全部',
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
