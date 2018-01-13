<template>
  <div class="all">
    <div class="book_body">
      <div class="book_title">
        <div class="over">
          <ul class="list_a" style="left: 0px;">
            <li>
              <ul class="list_aa">
                <li class="items1" v-for="items in arr">
                  <a href="#" class="imgs">
                    <img :src="items.thumbnails" />
                  </a>
                  <p class="name">
                    {{items.book_name}}
                  </p>
                  <p class="tname">
                    {{items.author}}
                  </p>
                  <p class="price">
                    ￥{{items.price}}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bookdetailsList } from '../../../api/homepage'
export default {
  data () {
    return {
      arr: []
    }
  },
  created () {
    bookdetailsList().then(res => {
//    console.log(res.data.data)
      this.arr = res.data.data
    })
  }
}
</script>

<style scoped>
  .price{
    position: relative;
    font-size: 14px;
    line-height: 16px;
    overflow: hidden;  
    padding-left: 20px;
    height: 36px;
    color: red;      
  }
  .tname{
    padding: 0 20px;
    overflow: hidden;
    line-height: 20px;
    height: 23px;
    color: #aaa;
  }
  .name{
    padding: 7px 20px 0;
    height: 18px;
    line-height: 18px;
    overflow: hidden;
  }
  .imgs{
    width: 150px;
    display: block;
    height: 150px;
  }
  .list_aa li{
    float: left;
    list-style: none;
  }
  .list_aa .items1{
    width: 150px;
    margin-right: 47px;
    margin-bottom: 16px;
    position: relative;
    overflow: visible;
  }
  .list_aa{
    width: 800px;
    padding-top: 25px;
  }
  .list_a li{
    float: left;
    width: 750px;
    overflow: hidden;
  }
  .list_a{
    width: 10000px;
    position: absolute;
    margin-top: 40px;
  }
  .over{
    width: 750px;
    height: 560px;
    position: relative;
    overflow: hidden;
  }
  .book_body{
    width: 750px;
    overflow: hidden;
    position: relative;
    margin-top: 330px;
    margin-left: -750px;
  }
  .book_title{
    width: 750px;
    background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/new_book.png) no-repeat;
    height: 43px
  }
  *{
    margin: 0;
    padding: 0;
  }
</style>