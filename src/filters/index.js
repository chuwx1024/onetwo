import moment from 'moment'

// 日期配置
export function renderTime (dateObj, deploy = 'YYYY-MM-DD') {
  return moment(dateObj).format(deploy)
}

// 查询每个页面的meta
export function headTitle (source) {
  return source.meta.title
}
