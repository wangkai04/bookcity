import service from '../utils/service'
// 所有书籍信息
export function bookdetailsList (query) {
  return service({
    url: '/bookdetails/list',
    methods: 'get',
    params: query
  })
}
