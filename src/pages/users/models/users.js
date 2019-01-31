

export default {
  namespace: 'users', 
  state: { 
    shop_logo: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI6gOB8gpSiafJSMq9QsI2PrMBnwTvcx1rsptdCRIWmhMN0Vg1sdiae2LrSOqhs8qH3MlLXW7n8yYXw/132',
  },
  effects: { 
    * getUsersList({ payload: data }, { put, call, select }) {
      console.log("....getUsersList")
    },
  },
  // 订阅数据
  subscriptions: {
    //history 监听路由变化、dispatch 触发 effects与reducers 的方法
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {  
        console.log(pathname,'users');
      });
    },
  }
};



