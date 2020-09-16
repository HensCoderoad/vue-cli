import Cookies from 'js-cookie'

export const OPENID_KEY = 'W'
// 判断是否数字
export const isNumber = (val) => {
  return typeof Number(val) === 'number'
}

// 解析url获取参数，其实可以直接用vue的router push 带params
// 获取时用 route.params.参数名
export const decodeUrl = () => {
  if (!location.search) return {}
  var target = {}
  var pairs = location.search.substr(1).split('&')
  for (var i = 0; i < pairs.length; i++) {
    var ps = pairs[i].split('=')
    target[ps[0]] = ps[1] || true
  }
  return target
}
export const setCookiesOpenId = (openid) => {
  Cookies.set(OPENID_KEY, openid)
}
export const getCookieOpenId = () => {
  const openid = Cookies.get(OPENID_KEY)
  if (openid) return openid
  else return false
}
