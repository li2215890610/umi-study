const menuList = [{
    title: '首页',
    icon: 'home',
    key: '/home',
},
{
    title: 'user',
    icon: 'user',
    key: '/home/user'
},
{
    title: '动态表单',
    icon: 'flag',
    key: '/home/product_edit'
},
{
    title: 'UI',
    key: '/home/ui',
    icon: 'appstore',
    children: [{
        title: '按钮',
        key: '/home/ui/button',
    },
    {
        title: '弹框',
        key: '/home/ui/modal',
    },
    {
        title: 'Loading',
        key: '/home/ui/loading',
    },
    {
        title: '通知提醒',
        key: '/home/ui/notification',
    },
    {
        title: '全局Message',
        key: '/home/ui/message',
    },
    {
        title: 'Tab页签',
        key: '/home/ui/tab',
    }
    ]
},
{
    title: '表单',
    key: '/home/form',
    icon: 'form',
    children: [{
        title: '登录',
        key: '/home/form/login',
    },
    {
        title: '注册',
        key: '/home/form/reg',
    }
    ]
},
{
    title: '表格',
    key: '/table',
    icon: 'table',
    children: [{
        title: '综合表格',
        key: '/table/basic',
    },
    {
        title: '动态表格',
        key: '/table/dynamic',
    }
    ]
},
{
    title: '城市管理',
    icon: 'flag',
    key: '/city'
},
{
    title: '订单管理',
    key: '/order',
    icon: 'file-add',
    children: [{
        title: '订单详情',
        key: '/order/detail'
    }]
},
{
    title: '员工管理',
    icon: 'usergroup-add',
    key: '/user'
},
{
    title: '权限设置',
    icon: 'codepen',
    key: '/permission'
}
];


export default menuList;