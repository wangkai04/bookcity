import service from '../utils/service'
// 轮播图列表
export function bookdetailsList () {
  return service({
    url: 'bookdetails/list',
    methods: 'get'
  })
}