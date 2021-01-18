//文章信息

export default {
  'GET /mock/articleApi/list': {
    result: {
      list: [
        {
          title: '我是文章标题',
          id: 1,
          pv: 0,
          status: null,
        },
        {
          title: '我是文章标题2',
          id: 2,
          pv: 0,
          status: 'SUCCESS',
        },
        {
          title: '我是文章标题3',
          id: 3,
          pv: 0,
          status: 'REJECT',
        },
        {
          title: '我是文章标题4',
          id: 4,
          pv: 0,
          status: 'PENDING',
        },
      ],
      page: 1,
      totalPage: 20,
      pageSize: 5,
    },
    code: 0,
    msg: '',
  },
  'POST /mock/articleApi/delete': {
    result: null,
    code: 0,
    msg: '',
  },
};
