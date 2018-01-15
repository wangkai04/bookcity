<template>
  <div id="app">
      <div class="main">
          <div class="head">
              <h3><img src="../../../assets/images/title1.png"></h3>
              <ul>
                <li v-for="(item,index) in show" :class="{active: item.isShow}" @mouseover="list(item.data.id,index)"><span>{{item.data.category_name}}</span></li>
              </ul>
          </div>
          <div class="body">
            <div >
              <ul>
                <li v-for="data in arr">
                  <router-link :to='"/booksdetails/"+data.id'>
                    <img class="img1" :src="data.thumbnails" alt="" />
                    <p class="name">{{data.book_name}}</p>
                    <span class="cent"><img src="../../../assets/images/book.png"/>当当独家特供</span>
                    <p class="price"><span class="le">￥{{data.price}}</span><span class="ri">￥{{data.price2}}</span></p>
                  </router-link>
                </li>
              </ul>              
            </div>

          </div>
      </div>
  </div>
</template>

<script>
import { getCategoryById, listByPage } from '../../../api/homepage'
export default {
  data () {
    return {
      arr: [],
      book_name: '',
      author: '',
      show: []
    }
  },
  created () {
    var categoryArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
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
    queryList (id = 11) {
      listByPage({page: 1, limit: 1, category_id: id}).then(res => {
        this.arr = res.data.data
      })
    }
  }
}
</script>

<style scoped>
    .head{
      position: relative;
      height: 51px;
      width: 956px;
      border-bottom: 1px solid #487a6f;
    }
    .head h3 img{
      width: 108px;
      height: 50px;
    }
    .head ul{
      height: 34px;
      position: absolute;
      right: 30px;
      top: 15px;
    }
    .head ul li{
      border: 2px solid white;
      padding: 2px 14px 1px;
      float: left;
      color: #666;
      font-size: 14px;
      font-family: 'Microsoft Yahei';
      /*margin-right: 5px;*/
      cursor: pointer;
      text-align: center;
    }
    .head ul li span{
      height: 29px;
      line-height: 29px;
      display: block;
      margin-right: 5px;
      
    }
    .head ul .active{
      border: 2px solid #487a6f;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom: 3px solid white;
      color: #487a6f;
      font-weight: bold;
    }
    
    .body{
      width: 950px;
      height: 533px;
    }
    .body ul li{
      float: left;
      width: 143px;
      height: 250px;
      margin-right: 37px;
      margin-left: 10px;
      margin-top: 10px;
      position: relative;
      cursor:pointer;
    }
    .body .name{
      padding: 7px 20px 0;
      height: 18px;
      line-height: 18px;
      overflow: hidden;
      font-size: 12px;
    }
    .body .name:hover{
      color: #EC7814;
      text-decoration: underline;
    }
    .body .cent{
      padding: 5px 0px 0 18px;
      height: 17px;
      line-height: 17px;
      display: block;
      color: #5b877e;
      font-family: '宋体';
      font-size: 12px;
      overflow: hidden;
    }
    .body .cent img{
      width: 20px;
      height: 16px;
    }
    .body .price{
      padding: 5px 0 0 20px;
      height: 36px;
      line-height: 16px;
      overflow: hidden;
      font-family: "Arial";
      font-size: 12px;
      position: relative;
    }
    .body .le{
      color: #c30;
      float: left;
      margin-right: 12px;
      font-weight: bold;
    }
    .body .ri{
      color: #aaa;
      text-decoration: line-through;
      float: left;
    }
</style>
