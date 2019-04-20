import { getRestaurantProductDetail, getMainCategoryList } from "../Services/index";

export default {
  namespace: 'RestaurantProductEdit',
  state: {
    productDetail: {
      // name:"",
      // description:"",
      // image_urls: "",
      // sku: [],
      // attribute: [],
      // types: []
    },

    main_category_list: []
  },
  reducers: {
    initProductData(state, { payload: productDetail }) {
      return {
        ...state,
        productDetail: {
          ...productDetail,
          attribute: productDetail.store_dish.attribute,
          types: productDetail.store_dish.types && productDetail.store_dish.types.split(",")
        },

      };
    },

    mainCategoryList(state, { payload }) {
      //组织数据
      /***
       * [{
       *  title: 'Node1',
       *   value: '0-0',
       *   key: '0-0',
       *   children: [{
       *     title: 'Child Node1',
       *      value: '0-0-1',
       *      key: '0-0-1',
       *    }],
       *  }, 
       *  {
       *   title: 'Node2',
       *   value: '0-1',
       *   key: '0-1',
       * }]
       */

      let main_category_list = [];

      payload.list && payload.list.forEach((item, index) => {
        if (item.verified) {

          main_category_list.push({
            title: item.name_jp,
            children: [],
            value: item.id,
            key: `main__category___${index}`
          })

          if (item.type2.length !== 0) {
            item.type2.forEach((items) => {
              if (items.verified) {
                main_category_list[index].children.push({
                  title: items.name_jp,
                  value: `${item.id}_${items.id}`,
                  key: `main__category___${index}${item.id}_${items.id}`,
                })
              }
            })
          }
        }
      });

      return {
        ...state,
        ...payload,
        main_category_list: main_category_list,
      }
    },

  },
  effects: {
    * getRestaurantProductDetail({ payload }, { put, call }) {

      const result = yield call(getRestaurantProductDetail, payload);

      if (result) {
        // put 相当于发送一个 dispatch 触发 action
        yield put({
          type: 'initProductData',
          payload: result.data
        });
      }
    },

    * getMainCategoryList({ payload }, { put, call, }) {

      const result = yield call(getMainCategoryList, { ...payload });

      if (result.data) {
        yield put({
          type: 'mainCategoryList',
          payload: {
            list: result.data.list
          }
        });
      }
    },
  },
  // 订阅数据
  subscriptions: {
    //history 监听路由变化、dispatch 触发 effects与reducers 的方法
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        // console.log(pathname,'ProductStore------------ProductStore');
      });
    },
  }
};



