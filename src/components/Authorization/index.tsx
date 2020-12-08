import React, { useEffect } from 'react';
import { Result, Spin } from 'antd';
import { useSelector, useDispatch } from 'umi';
import { RootState } from '@/models/RootState';
import styles from './index.less';

const Authorization: React.FC<{}> = props => {
  const dispatch = useDispatch();

  /**
   * 加载状态
   */
  const loading = useSelector((state: RootState) => {
    return !!state.loading.effects['user/fetch'];
  });

  /**
   * 通过获取用户信息 和 店铺信息检查登录状态
   */
  const state = useSelector((state: RootState) => {
    return {
      ...state.user,
    };
  });

  useEffect(() => {
    dispatch({
      type: 'user/fetch',
    });
  }, []);

  return (
    <>
      {state.jinjuId ? (
        props.children
      ) : (
        <div className={styles.content}>
          {loading ? (
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
