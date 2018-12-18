

export default {
  namespace: 'global', 
  state: { 
    
  },
  effects: { 
  },
  // 订阅数据
  subscriptions: {
    //history 监听路由变化、dispatch 触发 effects与reducers 的方法
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {  
        console.log(pathname);

        if (pathname === '/') {
          alert("/")
          return
        }
      });
    },
  }
};



