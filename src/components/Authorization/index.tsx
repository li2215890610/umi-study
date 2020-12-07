import React, { useEffect } from 'react';
import { Result, Spin, Button } from 'antd';
import { useSelector, useDispatch } from 'umi';
import { RootState } from '@/models/RootState';
import styles from './index.less';

const Authorization: React.FC<{}> = props => {
  const dispatch = useDispatch();

  /**
   * 加载状态
   */
  // const loading = useSelector((state: RootState) => {
  //   return (
  //     !!state.loading.effects['user/fetch'] ||
  //     !!state.loading.effects['store/fetch']
  //   );
  // });

  /**
   * 通过获取用户信息 和 店铺信息检查登录状态
   */
  const state = useSelector((state: RootState) => {
    return {
      user: { jinjuId: null }, //state.user
      store: { ...state.store, id: null },
    };
  });
  // useEffect(() => {
  //   dispatch({
  //     type: 'store/fetch',
  //   });

  //   dispatch({
  //     type: 'user/fetch',
  //   });
  // }, []);

  return (
    <>
      {`state.user.jinjuId && state.store.id` ? (
        props.children
      ) : (
        <div className={styles.content}>
          {false ? (
            <Spin />
          ) : (
            <Result
              status="warning"
              subTitle={
                <div>
                  登录状态失效，
                  <a
                    onClick={() => {
                      dispatch({
                        type: 'user/logout',
                      });
                    }}
                  >
                    重新登录
                  </a>
                </div>
              }
            />
          )}
        </div>
      )}
    </>
  );
};

export default Authorization;
