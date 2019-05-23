import moment from 'moment';


export function MomentFormatDate(moments,format ) {
  
  return moments && moment(moments).format(format)
}

export function MomentFillingDate(moments,format ) {
  
  if (moments.length === 1) {

    return moment(moments, format)
  }else{
    let fillingDate = [];

    for (let index = 0; index < moments.length; index++) {
      const element = moments[index];
      fillingDate.push(moment(element, format))
    }    
    
    return fillingDate
  }
}
