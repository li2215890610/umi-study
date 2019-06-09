

export default {
  namespace: 'global', 
  state: { 
    
  },
  reducers:{

  },
  effects: { 
  },
  // 订阅数据
  subscriptions: {
    //history 监听路由变化、dispatch 触发 effects与reducers 的方法
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {  

        if (pathname === '/') {
          console.log("/global")
          return
        }
      });
    },
  }
};



