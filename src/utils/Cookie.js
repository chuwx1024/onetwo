import Cookies from 'js-Cookies'

const tokenName = 'Authorization'

// save the data
// export const saveData = function (data) {
//   Cookies.set(tokenName, data)
// }
export const saveData = (data) => Cookies.set(tokenName, data)

// get the data
export const getData = () => Cookies.get(tokenName)

// remove the data
export const removeData = () => Cookies.remove(tokenName)
