<template>
  <div>
      <div class="book_starts">
          <div class="book_starts_a">
              <div class="book_starts_aa">
                  最新动态
              </div>
              <div class="book_starts_bb">
                  <ul>
                      <li><a>仅限24小时，文艺图书5折抢！</a></li>
                      <li><a>超级品类日，亲子没事地图尽享5折！</a></li>
                      <li><a>2018精美文化日历，低至5折！</a></li>
                  </ul>
              </div>
          </div>
          
          <div class="book_starts_b">
              <div class="book_starts_cc">
                  新书预售
                  <a  style="float: right;margin-right: 20px;">预售更多</a>
              </div>
              <div class="list_a">
                  <ul>
                      <li>
                          <a ><img src="http://img3m1.ddimg.cn/22/3/25210471-1_f_3.jpg" /></a>
                          <span class="starts">
                              琅琊榜的哈哈哈哈(作者 著)
                          </span>
                          <p>￥123</p>
                      </li>
                  </ul>
              </div>
          </div>
      
      
        <div class="con_title">
              <a href="#">新书热卖榜</a>
        </div>
        
        <div class="tab_box">
            <div class="tab_head">
            	<ul  class="tab_aa">
                <li v-for="(item,index) in show" :class="{active: item.isShow}" @mouseover="list(item.data.id,index)"><span>{{item.data.category_name}}</span></li>
              </ul>
                <!--<ul class="tab_aa">
                    <li><a href="#"><span>总榜</span></a></li>
                    <li><a href="#"><span>童书</span></a></li>
                    <li><a href="#"><span>文学</span></a></li>
                    <li><a href="#"><span>历史</span></a></li>
                    <li><a href="#"><span>传记</span></a></li>
                </ul>-->
            </div>
            <div class="tab_body">
                <ul class="tab_body_a">
                    <li v-for="(items,index) in arr">
                        <span class="num">{{index+1}}</span>
                        <p class="name"><a href="#">{{items.book_name}}</a></p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
	import { getCategoryById, listByPage, bookdetailsList } from '../../../api/homepage'
export default {
  data () {
    return {
      arr: [],
      book_name: '',
      author: '',
      index: '',
      show: []
    }
  },
  created () {
    bookdetailsList().then(res => {
//    console.log(res.data)
      this.arr = res.data.data
    })
    var categoryArr = [22, 23, 24, 25, 26]
    for (let index in categoryArr) {
      this.show[index] = {isShow: false, data: {}}
      getCategoryById({id: categoryArr[index]}).then(res => {
        this.show[index].data = res.data.data
      })
    }
    this.show[0].isShow = true
    this.queryList()
  },
  methods: {
    list (id, index) {
      for (let i in this.show) {
        this.show[i].isShow = false
      }
      this.show[index].isShow = true
      this.queryList(id)
    },
    queryList (id = 4) {
      listByPage({page: 1, limit: 10, category_id: id}).then(res => {
        this.arr = res.data.data.slice(0, 10)
      })
    }
  }
}
</script>

<style scoped>
    .name{
    float: left;
    height: 36px;
    line-height: 36px;
    overflow: hidden;
    width: 182px;
    font-size: 13px;
    }
    .num{
        float: left;
    width: 28px;
    text-align: center;
    }
    .tab_body li{
    height: 36px;
    line-height: 36px;
    width: 215px;
    border-bottom: 1px dotted #d8d8d8;
    cursor: pointer;
    }
    .tab_body_a{
    width: 220px;
    
    }
    .tab_body{
        position: relative;
    width: 220px;
    }
   .tab_body ul li:nth-child(1) span{
   	color: red;
   }
   .tab_body ul li:nth-child(2) span{
   	color: red;
   }
   .tab_body ul li:nth-child(3) span{
   	color: red;
   }
    .tab_aa li span{
        display: block;
    text-align: center;
    height: 20px;
    line-height: 20px;
    border: 1px solid #eaeaea;
    border-left: 0;
    padding: 2px 0 1px;
    color: #000;
    cursor: pointer;
    font-size: 14px;
    }
    .tab_aa li:hover{
        border-top: 1px solid #849555;
        border-bottom: 0px;
        border-right: 0px;
        border-left: 0px;
    }
    .tab_aa li{
        float: left;
    width: 43.2px;
    list-style: none;
    }
    .tab_aa{
        height: 24px;
    }
    .tab_head{
        height: 26px;
        display: block;
    }
    .tab_box{
        border: 1px solid #EAEAEA;
        height: 450px;
    }
    *{
        padding: 0;
        margin: 0;
    }
    a{
        text-decoration: none;
    }
    .con_title a{
        color: #d72832;
    }
    .con_title{
        height: 40px;
    line-height: 40px;
    padding-left: 34px;
    font-size: 16px;
    color: #000;
    font-weight: bold;
    background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/sprite.png) 5px 4px no-repeat;
    position: relative;
    overflow: hidden;
    margin-top: 73px;
    }
    .book_starts{
    width: 218px;
    margin-bottom: 10px;
    margin-left: 10px;
    }
    .book_starts_a{
        border: 1px solid #eaeaea;
    }
    .book_starts_aa{
    width: 218px;
        height: 28px;
        font-size: 16px;
    color: #000;
    font-weight: bold;
    padding-left:10px;
    line-height: 28px;    
    }
    .book_starts_bb ul{
        position: relative;
    overflow: hidden;
    height: 68px;
    list-style: none;
        margin-top: -1px;
    }
    .book_starts_bb ul li{
        margin-left: 10px;
        float: left;
    width: 238px;
    position: relative;
    }
    .book_starts_bb ul li:hover{
    	color: #EC7814;
    	text-decoration: underline;
    }
    .book_starts_bb ul li a{
    	font-size: 12px;
        color: #000;
    display: block;
    height: 22px;
    position: relative;
    overflow: hidden;
    padding-left: 7px;
    background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/sprite.png) -16px -160px no-repeat;
    }
    .book_starts_b{
        border: 1px solid #eaeaea;
        overflow: hidden;
        margin-top: 10px;
    }
    .book_starts_cc{
    width: 218px;
        height: 28px;
    color: #000;
    font-weight: bold;
    padding-left:10px;
    line-height: 28px;
    }
    .list_a{
        width: 218px;
        position: relative;
    }
    .list_a ul{
        list-style: none;
    }
    .list_a ul li{
        float: left;
    width: 238px;
    position: relative;
    }
    .list_a ul li img{
        display: block;
    width: 120px;
    float: left;
    }
    .starts{
      display: block;
      width: 200px;
    }
    .list_a ul li p{
        margin-top: 10px;
    }
</style>