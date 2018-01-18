<template>
    <div class="product_content">
        <!--右侧主体-->
        <div class="main">
            <div class="group_buy">
                <ul class="tab">
                    <li class="hover">经常一起购买的商品</li>
                </ul>
                <div class="over">
                    <div class="paidang_box">
                        <ul class="paidang">
                            <li class="zhu">
                                <p class="pic">
                                    <a href="#"><img src="http://img3m8.ddimg.cn/77/4/25194488-1_l_5.jpg" /> </a>
                                </p>
                                <p class="price">
                                    <span class="price_a">¥70.50</span>
                                </p>
                                <p class="name">
                                    <a href="#" style="color: #646464;">妖猫传（沙门空海· 大唐鬼宴 全四册经典套装）</a>
                                </p>
                                <p class="zuozhe">〔日〕梦枕貘著，林青</p>
                                <div class="add"></div>
                            </li>
                        </ul>
                        <div class="lists">
                            <ul class="clearfix">
                                <li v-for="items in arr">
                                    <p class="pic">
                                        <a href="#"><img :src="items.thumbnails" /> </a>
                                    </p>
                                    <p class="price">
                                        <span class="price_a">¥{{items.price}}</span>
                                    </p>
                                    <p class="name">
                                        <a href="#" style="color: #646464;">{{items.book_name}}</a>
                                    </p>
                                    <p class="zuozhe">{{items.author}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="t_box">
                    <ul class="tab">
                        <li class="hover">商品详情</li>
                        <li>商品评论</li>
                        <li>商品问答</li>
                    </ul>
                </div>
                
                <div class="t_box_left">
                    <div class="pro_content">
                        <ul class="key">
                            <li>版 次：1</li>
                            <li>页 数：</li>
                            <li>字 数：</li>
                            <li>印刷时间：2017年12月01日</li>
                            <li>开 本：32开</li>
                            <li>纸 张：胶版纸</li>
                            <li>包 装：平装-胶订</li>
                            <li>是否套装：是</li>
                            <li>国际标准书号ISBN：9787559612755</li>
                            <li class="fenlei">
                                <label>所属分类：</label>
                                <span class="lie">
                                    <a href="javascript:">图书</a>
                                    >
                                    <a href="javascript:">小说</a>
                                    >
                                    <a href="javascript:">社会</a>
                                </span>
                                <span class="lie">
                                    <a href="javascript:">图书</a>
                                    >
                                    <a href="javascript:">小说</a>
                                    >
                                    <a href="javascript:">社会</a>
                                </span>
                            </li>    
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bookdetailsList } from '../../api/homepage'
export default {
  data () {
    return {
      arr: []
    }
  },
  created () {
    bookdetailsList().then(res => {
      this.arr = res.data.data
    })
  }
}
</script>

<style scoped>
    .lie a{
        color: #1a66b3;
    }
    .lie{
        padding: 0;
        clear: both;
        display: block;
        position: relative;
        left: 70px;
    }
    .fenlei label{
        position: absolute;
        top: 0;
        left: 20px;
        cursor: default;
    }
    .fenlei{
        width: 788px;
        float: none;
        clear: both;
        height: auto;
        position: relative;
        padding-left: 90px;
    }
    .key li{
        padding-left: 20px;
        width: 266px;
        overflow: hidden;
        float: left;
        line-height: 22px;
        height: 22px;
        color: #323232;
        list-style-type: none;
        font-size: 14px;
        
    }
    .key{
        width: 858px;
        padding: 0 22px 0 0;
        margin-top: 20px;
        float: left;
    }
    .t_box_left{
        border-right: 1px solid #e1e1e1;
        width: 860px;
        padding-right: 20px;
        position: relative;
    }
    .t_box{
        position: relative;
        z-index: 999;
        width: 970px;
    }
    .clearfix li{
        float: left;
        position: relative;
        line-height: 20px;
        width: 165px;
    }
    .clearfix{
        width: 100000px;
        overflow: hidden;
        position: relative;
        z-index: 60;
        float: left;
    }
    .add{
        width: 16px;
        height: 16px;
        position: absolute;
        top: 58px;
        right: 2px;
        overflow: hidden;
        background: url(http://product.dangdang.com/images/product_sprites.png) no-repeat -25px -500px;
    }
    .zuozhe{
        width: 130px;
        height: 20px;
        overflow: hidden;
    }
    .name{
        width: 130px;
        height: 20px;
        overflow: hidden;
    }
    .price_a{
        display: inline-block;
        padding-right: 3px;
        color: #ff2832;
    }
    .price{
        width: 130px;
        overflow: hidden;
        white-space: nowrap;
        padding: 15px 0 0;
    }
    .pic a img{
        width: 130px;
        height: 130px;
    }
    .pic a{
        display: block;
        width: 130px;
        height: 130px;
        overflow: hidden;
        text-align: center;
    }
    .pic{
        width: 130px;
        height: 130px;
        overflow: hidden;
        position: relative;
    }
    .zhu{
        width: 164px;
        display: list-item;
    }
    .paidang{
        width: 180px;
        position: absolute;
        left: 0;
        top: 20px;
    }
    .paidang_box{
        padding-left: 180px;
        height: 225px;
    }
    .over{
        padding-top: 20px;
        position: relative;
        z-index: 60;
        width: 970px;
        overflow: hidden;
    }
    .tab li{
        float: left;
        height: 24px;
        padding: 1px 30px 0;
        color: #969696;
        overflow: hidden;
        cursor: pointer;
        vertical-align: top;
        display: list-item;        
    }
    .tab{
        border-bottom: 1px solid #323232;
    }
    .group_buy{
        padding-bottom: 30px;
        height: 250px;
        width: 970px;
        position: relative;
    }
    .main{
        float: right;
        padding-left: 20px;
        width: 970px;
    }
    .product_content{
        width: 1200px;
        margin: 22px auto 0;
    }
</style>