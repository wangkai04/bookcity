import service from '../utils/service'
// 轮播图列表
export function bookallList () {
  return service({
    url: 'bookslide/list',
    methods: 'get'
  })
}
// 所有书籍信息
export function bookdetailsList () {
  return service({
    url: 'bookdetails/list',
    methods: 'get'
  })
}
