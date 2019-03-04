

export default {
  namespace: 'login',
  state: {
    shop_logo: 'http://wx.qlogo.cn/mmopen/98Nz5LFElxzjUXYDtia8tTpU3fQGqB80BasKdDFVMKibwNnIib3ZMD9Km53YM58sMFCdHxB74aicFVibyM37ZAYibmpNpQyYiafeibzu/0',
  },
  effects: {
    //     * getTableList({ payload: id }, { put, call, select }) {
    //       const todos = yield select(state => state.MoneySettlement.page);
    // console.log(todos) 
    //       const result = yield call(getTableList, {
    //         store_id: 1,
    //       });

    //       if (result) {
    //         // put 相当于发送一个 dispatch 触发 action
    //         yield put({
    //           type: 'onHandleCallback',
    //           payload: result.data
    //         });
    //         console.log(result);
    //       }
    //     },
  },
  // 订阅数据
  subscriptions: {
    //history 监听路由变化、dispatch 触发 effects与reducers 的方法
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        console.log(pathname);
      });
    },
  }
};



