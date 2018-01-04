import service from '../utils/service'
// 轮播图列表
export function bookdetailsList (query) {
  return service({
    url: '/bookdetails/list',
    methods: 'get',
    params: query
  })
}
