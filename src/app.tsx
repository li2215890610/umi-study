import { message } from 'antd';

export const dva = {
  onError(e: Error) {
    message.error(e.message, 3);
  },
};
