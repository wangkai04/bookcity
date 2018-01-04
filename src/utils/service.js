import axios from 'axios'
const service = axios.create({
  baseURL: 'http://114.55.249.153:7002',
  timeout: 5000 // 请求超时时间
})
export default service
