export default {
  'GET /mock/businessAssistantApi/task': {
    result: [
      {
        id: 1,
        title: '小程序授权',
        actions: [
          {
            action_title: '注册小程序',
            action_url: 'https://mp.weixin.qq.com/',
          },
          {
            action_title: '立即授权',
            action_url: '/dashboard/setting/weapp/main',
          },
        ],
        status: false,
      },
      {
        id: 2,
        title: '设置分类',
        actions: [
          {
            action_title: '立即设置',
            action_url: '/dashboard/product/category',
          },
        ],
        status: true,
      },
      {
        id: 3,
        title: '发布商品',
        actions: [
          {
            action_title: '立即发布',
            action_url: '/dashboard/product/list/ALL/10/1',
          },
        ],
        status: false,
      },
      {
        id: 4,
        title: '设置支付',
        actions: [
          {
            action_title: '立即设置',
            action_url: '/dashboard/finance/account',
          },
        ],
        status: false,
      },
      {
        id: 5,
        title: '装修店铺',
        actions: [
          {
            action_title: '立即装修',
            action_url: '/dashboard/store/style',
          },
        ],
        status: false,
      },
      {
        id: 6,
        title: '提交审核',
        status: false,
        actions: [
          {
            action_title: '立即提审',
            action_url: '/dashboard/setting/weapp/main',
          },
        ],
      },
      {
        id: 7,
        title: '推广店铺',
        status: false,
        actions: [
          {
            action_title: '查看店铺',
            action_url: '/dashboard/setting/weapp/main',
          },
        ],
      },
      {
        id: 8,
        title: '成交一单',
        status: false,
        actions: [
          {
            action_title: '处理订单',
            action_url: '/dashboard/order/list',
          },
        ],
      },
    ],
    status: {
      code: 0,
      desc: '',
    },
  },
  'GET /mock/businessAssistantApi/functionalModule': {
    result: [
      {
        id: 'pintuan',
        title: '拼团促销',
        desc: '在约定时间内，以成团人数为条件的售卖营销活动。',
        image: '/apps/app-icon-pintuan@2x.png',
        url: 'url',
        categoryId: 1,
      },
      {
        id: 'kanjia',
        title: '砍价0元购',
        desc: '邀请好友砍价后低价购买，用户裂变，拉新神器。',
        image: '/apps/app-icon-kanjia@2x.png',
        url: 'url',
        categoryId: 1,
      },
      {
        id: 'miaosha',
        name: '限时秒杀',
        desc: '限时快速抢购，吸引顾客快速消费，增加紧迫感。',
        image: '/apps/app-icon-miaosha@2x.png',
        url: 'url',
        categoryId: 1,
      },
      {
        id: 'tanchuang',
        title: '弹窗广告',
        desc: '在指定页面或场景，弹出活动广告，场景化营销。',
        image: '/apps/app-icon-openad@2x.png',
        url: 'url',
        categoryId: 1,
      },
      {
        id: 'coupon',
        title: '优惠券/码',
        desc: '通过Google的网络向感兴趣的客户展示产品。',
        image: '/apps/app-icon-youhuiquan@2x.png',
        url: 'url',
        categoryId: 1,
      },
      {
        id: 'live',
        title: '小程序直播',
        desc: '邀请好友砍价后低价购买，用户裂变，拉新神器。',
        image: '/apps/app-icon-zhibo@2x.png',
        url: 'url',
        categoryId: 1,
      },
      {
        id: 'msgpush',
        title: '消息推送',
        desc: '邀请好友砍价后低价购买，用户裂变，拉新神器。',
        image: '/apps/app-icon-openad@2x.png',
        url: 'url',
        categoryId: 1,
      },
      {
        id: 'advancesale',
        title: '预售',
        desc: '邀请好友砍价后低价购买，用户裂变，拉新神器。',
        image: '/apps/app-icon-miaosha@2x.png',
        url: 'url',
        categoryId: 1,
      },
    ],
    status: {
      code: 0,
      desc: '',
    },
  },
  'GET /mock/businessAssistantApi/moduleCategory': {
    result: [
      {
        tagId: 1,
        tagName: '营销工具',
        baseInfoList: [
          {
            id: 'pintuan',
            title: '拼团促销',
            desc: '在约定时间内，以成团人数为条件的售卖营销活动。',
            image: '/apps/app-icon-pintuan@2x.png',
            url: 'url',
          },
          {
            id: 'kanjia',
            title: '砍价0元购',
            desc: '邀请好友砍价后低价购买，用户裂变，拉新神器。',
            image: '/apps/app-icon-kanjia@2x.png',
            url: 'url',
          },
          {
            id: 'miaosha',
            title: '限时秒杀',
            desc: '限时快速抢购，吸引顾客快速消费，增加紧迫感。',
            image: '/apps/app-icon-miaosha@2x.png',
            url: 'url',
          },
        ],
      },
    ],
  },
  'GET /mock/businessAssistantApi/updateCustomeSetting': {
    result: [],
    status: {
      code: 0,
      desc: '',
    },
  },
};
