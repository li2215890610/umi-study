import { message } from "antd";

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
      message.error(err.message);
    },
    initialState: {
      global: {
        text: 'hi umi + dva',
      },
    },
  },
};

