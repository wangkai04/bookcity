<template>
  <div class="all">
  	<div class="left_one">
  	  <div class="left_head">
  	  	图书分类
  	  </div>
  	  <div class="left_body">
  	  	<div class="left_body_one">
  	  	  <div class="body_one_a" v-for="dates in arr">
  	  	    <div class="are">
  	  	      <span>{{dates.bookname}}</span>
  	  	    </div>
  	  	  </div>
  	  	</div>
  	  </div>
  	</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        arr: [
          {bookname: '特色书单'},
          {bookname: '电子书 网络文学 阅读器'},
          {bookname: '小说'},
          {bookname: '文艺'},
          {bookname: '青春文学/动漫。幽默'},
          {bookname: '童书'},
          {bookname: '教育'},
          {bookname: '人文社科'},
          {bookname: '经营'},
          {bookname: '成功/励志'},
          {bookname: '生活'},
          {bookname: '科技'},
          {bookname: '英文原版书 港台图书'},
          {bookname: '当当出版'},
          {bookname: '期刊/音像'},
          {bookname: '创意文具'},
          {bookname: '特色图书'}
        ]
      }
    }
  }
</script>

<style scoped>
  .are span{
  	width: 170px;
    font-size: 14px;
    display: block;
  }
  .are{
  	width: 170px;
  	color: #487a6f;
    font-size: 14px;
    line-height: 22px;
    display: block;
  	background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/sidemenu_bg2.png) 160px 8px no-repeat;
  }
  .body_one_a{
  	width: 170px;
    border-bottom: 1px dotted #849555;
    margin-left: 9px;
    position: relative;
    overflow: hidden;
    padding-top: 3px;
    padding-bottom: 2px;
  }
  .left_body_one{
  	width: 188px;
  }
  .left_body{
  	width: 190px;
  	height: 785px;
  	position: relative;
  	background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/sidemenu_bg2.png)-20px 0px repeat-y;
    border-top: 2px dotted #487a6f;
    border-bottom: 1px solid #487a6f;
  }
  .left_head{
  	width: 190px;
  	height: 35px;
  	text-align: center;
  	font-size: 18px;
  	background: #487a6f;
  	border-radius: 6px 6px 0 0;
  	color: white;
  	line-height: 35px;
  }
  .left_one{
  	width: 190px;
  }
</style>