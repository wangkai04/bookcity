<template>
  <div class="all">
    <div class="book_body">
      <div class="book_title">
        <div class="over">
          <ul class="list_a" style="left: 0px;">
            <li>
              <ul class="list_aa">
                <li class="items1" v-for="dates in arrs">
                  <a href="#" class="imgs">
                    <img :src="dates.imgs" />
                  </a>
                  <p class="name">
                    {{dates.pa}}
                  </p>
                  <p class="tname">
                    {{dates.pb}}
                  </p>
                  <p class="price">
                    123
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
export default {
  data () {
    return {
      arrs: [
        {imgs: 'http://img3m5.ddimg.cn/17/1/25160075-1_l_3.jpg', pa: '水彩的诀窍：Wendy Tait教你画花卉', pb: '【英】Jackie'},
        {imgs: 'http://img3m5.ddimg.cn/17/1/25160075-1_l_3.jpg', pa: '水彩的诀窍：Wendy Tait教你画花卉', pb: '【英】Jackie'},
        {imgs: 'http://img3m5.ddimg.cn/17/1/25160075-1_l_3.jpg', pa: '水彩的诀窍：Wendy Tait教你画花卉', pb: '【英】Jackie'},
        {imgs: 'http://img3m5.ddimg.cn/17/1/25160075-1_l_3.jpg', pa: '水彩的诀窍：Wendy Tait教你画花卉', pb: '【英】Jackie'},
        {imgs: 'http://img3m5.ddimg.cn/17/1/25160075-1_l_3.jpg', pa: '水彩的诀窍：Wendy Tait教你画花卉', pb: '【英】Jackie'},
        {imgs: 'http://img3m5.ddimg.cn/17/1/25160075-1_l_3.jpg', pa: '水彩的诀窍：Wendy Tait教你画花卉', pb: '【英】Jackie'},
        {imgs: 'http://img3m5.ddimg.cn/17/1/25160075-1_l_3.jpg', pa: '水彩的诀窍：Wendy Tait教你画花卉', pb: '【英】Jackie'},
        {imgs: 'http://img3m5.ddimg.cn/17/1/25160075-1_l_3.jpg', pa: '水彩的诀窍：Wendy Tait教你画花卉', pb: '【英】Jackie'}
      ]
    }
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
    position: relative;
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