import request from '@/utils/request'

export const getArticles = (params) => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params
  })
}

export const getArticleDetail = articleId => request({
  method: 'GET',
  url: `/app/v1_0/articles/${articleId}`
})
