//文章信息

export default {
  'GET /mock/articleApi/list': {
    result: {
      list: [
        {
          title: '我是文章标题',
          id: 1,
          pv: 0,
          status: 0,
        },
        {
          title: '我是文章标题2',
          id: 2,
          pv: 0,
          status: 0,
        },
        {
          title: '我是文章标题3',
          id: 3,
          pv: 0,
          status: 2,
        },
        {
          title: '我是文章标题4',
          id: 4,
          pv: 0,
          status: 1,
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
  'POST /mock/articleApi/batch/up_down_shelf': {
    result: null,
    code: 0,
    msg: '',
  },
};
