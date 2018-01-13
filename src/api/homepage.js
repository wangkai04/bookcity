import service from '../utils/service'
// 所有轮播信息
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
// 按照分类模糊查询分页
export function listByPage (params) {
  return service({
    url: 'bookdetails/listByPage',
    methods: 'get',
    params
  })
}
// 根据parent_id渲染列表
export function list (query) {
  return service({
    url: '/bookcategories/list',
    methods: 'get',
    params: query
  })
}

// 根据id查询分类
export function getCategoryById (query) {
  return service({
    url: 'bookcategories/getById',
    methods: 'get',
    params: query
  })
}
