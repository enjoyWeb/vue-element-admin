import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/index/index/',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/index/index/',
    method: 'post'
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
