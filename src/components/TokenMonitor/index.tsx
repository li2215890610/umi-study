import React, { useEffect, useRef } from 'react';
import { Modal, Button, Space } from 'antd';
import Cookies from 'js-cookie';

const TokenMonitor: React.FC<{}> = () => {
  const [modal, contextHolder] = Modal.useModal();

  const timer = useRef<any>();
  const token = useRef<string | undefined>(Cookies.get('token'));
  const session = useRef<string | undefined>(Cookies.get('JINJU_SESSION'));

  useEffect(() => {
    timer.current = setInterval(() => {
      if (
        Cookies.get('token') !== token.current ||
        Cookies.get('JINJU_SESSION') !== session.current
      ) {
        clearInterval(timer.current);
        modal.warning({
          title: '提示',
          content: '登录信息发生变化，请刷新页面',
          okText: '刷新',
          onOk: () => {
            window.location.reload();
          },
        });
      }
    }, 2000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return <>{contextHolder}</>;
};

export default TokenMonitor;
