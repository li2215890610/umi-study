import { Select } from 'antd'

const Option = Select.Option;

export function formateDate(times) {
  if (!times) {
    return
  } else {
    let time = new Date(times)
    let y = time.getFullYear();
    let m = time.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    let d = time.getDate();
    d = d < 10 ? ('0' + d) : d;
    let h = time.getHours();
    h = h < 10 ? ('0' + h) : h;
    let minute = time.getMinutes();
    let second = time.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return `${y}-${m}-${d}  ${h} : ${minute} : ${second}`
  }
}

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










