import { Select } from 'antd'

const Option = Select.Option;

/**
 * getOptionList([{id:'111',name:'222'}])
 */

export const getOptionList = (data) =>{
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

/**
 * getDateFilter(null,dateType)
 */
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
