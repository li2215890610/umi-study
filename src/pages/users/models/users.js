

export default {
  namespace: 'users', 
  state: { 
    shop_logo: 'http://wx.qlogo.cn/mmopen/98Nz5LFElxzjUXYDtia8tTpU3fQGqB80BasKdDFVMKibwNnIib3ZMD9Km53YM58sMFCdHxB74aicFVibyM37ZAYibmpNpQyYiafeibzu/0',
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



