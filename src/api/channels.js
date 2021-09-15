import request from '@/utils/request'

// getChannels
export const getChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}
