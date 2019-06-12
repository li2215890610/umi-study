
/**
 * 
 *  storageSetItem('locale', value).then((data) => {
 *    
 *  })
 */

export const storageSetItem = (name, data)=> {
  return new Promise((resolve, reject) => {
      if (data) {
          localStorage.setItem(name, JSON.stringify(data))
          resolve("success")
      } else {
          reject(new Error("储存失败"))
      }
  })
}

/**
 * storageGetItem('locale')
 */
export const storageGetItem = (name)=> {

  return JSON.parse(localStorage.getItem(name))
}

/**
 * 	storageRemoveItem('loginSession').then((data) => {
 *		
 *	})
 */
export const storageRemoveItem = (name)=> {
  return new Promise((resolve,) => {
      if (name) {
          localStorage.removeItem(name)
          resolve("success")
      } else {
          localStorage.clear();
          resolve("success")
      }
  })
}