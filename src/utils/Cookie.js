import Cookies from 'js-Cookie'

// save the data
// export const saveData = function (data) {
//   Cookies.set(tokenName, data)
// }
export const saveData = (name, data) => Cookies.set(name, data)

// get the data
export const getData = (name) => Cookies.get(name)

// remove the data
export const removeData = (name) => Cookies.remove(name)
