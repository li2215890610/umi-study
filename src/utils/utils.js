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

// export function searchFilterString( data, searchType) {
//   let result = data.search(searchType);

//   return  result !== -1 ? true :  false
// }



export function formatDate( date ) {
  if ( ! date ) {
    return "-";
  }

  if ( + date ) {
    date = + date;
  }

  const d     = new Date( date );
  let year  = d.getFullYear();
  let month = _beFull( (d.getMonth() + 1) );
  let da    = _beFull( d.getDate() );
  let hour  = _beFull( d.getHours() );
  let min   = _beFull( d.getMinutes() );
  let sec   = _beFull( d.getSeconds() );

  return year + '-' + month + '-' + da + ' ' + hour + ':' + min + ':' + sec;
}



function _beFull( number ) {
  if ( number < 10 ) {
    return "0" + number;
  } else {
    return number;
  }
}





