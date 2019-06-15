import moment from 'moment';

/**
 * momentFormatDate(data[0], "YYYY-MM-DD"),
 * @param {*} moments 
 * @param {*} format 
 */

export function MomentFormatDate(moments,format ) {
  
  return moments && moment(moments).format(format)
}

/**
 * momentFillingDate([start_time, end_time,], "YYYY-MM-DD")
 */
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
