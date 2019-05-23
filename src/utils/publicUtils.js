import { Select } from 'antd'

const Option = Select.Option;

export function getOptionList(data) {
  if (!data) {
    return [];
  }
  
  let options = [];

  data.map((item) => {
    return options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
  })
  return options;
}


export const beDoubleNumber = (number) => {
  return +number >= 10 ? `${number}` : `0${number}`;
}

export const  getDateFilter = (time, dateType)=> {

  // 声明 年月日时分秒
  let Y, M, D,  H, I, S;
  
  let d = time ? new Date(parseInt(time) * 1000) : new Date()

  Y = d.getFullYear();
  M = beDoubleNumber(d.getMonth() + 1);
  D = beDoubleNumber(d.getDate());
  H = beDoubleNumber(d.getHours());
  I = beDoubleNumber(d.getMinutes());
  S = beDoubleNumber(d.getSeconds());
  let localTimes = null;

  if (dateType === 'YYYY-MM-DD') {
    localTimes = `${Y}-${M}-${D}`
  }else{
    localTimes = Y + '-' + M + '-' + D + ' ' + H + ':' + I + ':' + S; //转换当前时间 yyyy-MM-dd hh:mm:ss
  }

  return localTimes;
};




export const handleFilterOrderStatus = (oldKey) => {

  let orderStatusMap = {
    'WAIT_PAY':'待支付',
    'PAYING':'支付中',//# 拉卡拉 B扫C 或 C扫B 支付，用户输密码
    'PAY_FAIL':'支付失败',// # 拉卡拉 B扫C 或 C扫B 支付，交易失败、支付订单已关闭【支付失败的情况，状态设置为WAIT_PAY，此状态停用，实际不存在】
    'PAID':'已付款', //# 待接单

    'COMPLETE':'已完成', 
    'PREPARING':'备餐中', 
    'DISH_READY':'备餐完成', 
    'OVER_DUE':'已过期', 
    'CANCEL':'已退款', 
    'REFUND':'已付款', 
    'REFUND_PROCESSING':'退款处理中', 
    'LATER_ORDERED':'待接单（后付款）', 
    'LATER_PREPARING':'备餐中（后付款）', 
    'LATER_DISH_READY':'备餐完成（后付款）', 
  };

  return orderStatusMap[oldKey]
}

export const roleList = [{ id: 'MERCHANT_ADMIN', name: "店铺管理员" }, { id: 'MERCHANT_STAFF', name: "店铺员工" }];

