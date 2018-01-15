<template>
    <div>
        <div class="box_center">
            <div class="slide">
                <h1>
                    <img src="http://product.dangdang.com/images/icon_ddzy.png"/>
                    妖猫传（沙门空海· 大唐鬼宴 全四册经典套装）
                </h1>
                <h2>
                    当当读者专享陈凯歌签章，王蕙玲（李安御用编剧），
                    黄轩、张雨绮、刘昊然等众多中日明星共同打造的同名电影即将上映。
                     梦枕貘：我还想再说一次。这故事，真的是至今为止没人写过的杰作。
                </h2>
            </div>
            <div class="mess_center">
                <span class="t1">
                    作者:（日）
                    <a href="#">梦枕貘</a>
                </span>
                <span class="t1">
                    出版社:
                    <a href="#">北京联合出版有限公司</a>
                </span>
                <span class="t1">
                    出版时间:2017年12月 
                </span>
                <div class="fd">
                    <div class="pinglun">
                        <a href="#" class="pl">我要评论</a>
                        <span class="start_box">
                            <span class="start"></span>
                        </span>
                        <a href="#">181</a>条评论
                    </div>
                </div>
            </div>
            <div class="price_box">
                <div class="price">
                    <div class="price_d">
                        <p class="t">当当网</p>
                        <div>
                            <span class="fh">￥</span>
                            26.20
                        </div>
                    </div>
                </div>
            </div>
            <div style="float: left;">
                <div class="num" v-for="(item,index) in arrs">
                    <input type="text" v-model="item.count" />
                    <a href="javascript:" class="num_add" @click="add(index)"></a>
                    <a href="javascript:" class="num_del" @click="del(index)"></a>
                </div>
                <div class="box_btn">
                    <a href="javascript:" class="btn_red">
                        <i class="cart"></i>
                        <router-link style="color: white;" to="/gouwuche">加入购物车</router-link>
                    </a>
                    <a href="javajscript:" class="btn_pink">立即购买</a>
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
        {unitPrice: 10, price: 10, count: 1}
      ]
    }
  },
  methods: {
    add (index) {
      this.arrs[index].count++
    },
    del (index) {
      this.arrs[index].count--
    }
  }
}
</script>

<style scoped>
    .fh{
        font-size: 14px;
        float: left;
    }
    .t{
        color: #8f8f8f;
        font-weight: normal !important;
        font-size: 12px !important;
    }
    .price_d{
        font-size: 26px;
        color: #e52222;
        background: #ebebeb;
        
    }
    .price{
        float: left;
        padding-bottom: 7px;
        line-height: 28px;
    }
    .price_box{
        background: #ebebeb;
        padding: 0 0 0 10px;
        margin: 6px 0 0 -10px;
        line-height: 28px;
        position: relative;
        width: 630px;
        z-index: 999;
    }
    .btn_pink{
        overflow: hidden;
        margin: 0 0 3px 10px;
        float: left;
        padding: 0 15px;
        border-radius: 3px;
        text-decoration: none;
        height: 34px;
        line-height: 34px;
        border: 1px solid #ff2832;
        color: #ff2832 !important;
        background-color: #ffedee;
    }
    .cart{
        float: left;
        width: 20px;
        height: 19px;
        background: url(http://product.dangdang.com/images/product_sprites.png) no-repeat -40px -35px;
        margin: 9px 6px 0 0;
    }
    .btn_red{
        height: 36px;
        margin: 0 0 3px 10px;
        float: left;
        padding: 0 15px;
        border-radius: 3px;
        text-decoration: none;
        line-height: 36px;
        color: #fff;
        display: block;
        background-color: #ff2832;
        overflow: hidden;
    }
    .box_btn{
        float: left;
        width: 567px;
        margin-top: 10px;
    }
    .num_del{
        background-position: -37px -17px;
        top: 17px;
        float: right;
        position: absolute;
        right: 0;
        display: block;
        width: 23px;
        height: 17px;
        background-image: url(http://product.dangdang.com/images/product_sprites.png);
        background-repeat: no-repeat;
    }
    .num_add{
        position: absolute;
        right: 0;
        display: block;
        width: 23px;
        height: 17px;
        background-image: url(http://product.dangdang.com/images/product_sprites.png);
        background-repeat: no-repeat;
        background-position: -37px 0;
        top: 0;
        float: right;        
    }
    .num input{
        width: 38px !important;
        height: 32px;
        line-height: 32px;
        border: 0;
        background: #fff;
        text-align: center;
    }
    .num{
        float: left;
        height: 34px;
        border: 1px solid #e9e9e9;
        width: 38px;
        padding-right: 23px;
        overflow: hidden;
        text-align: center;
        position: relative;
        margin-top: 10px;
    }
    .start{
        background: url(http://product.dangdang.com/images/icon_star.png) repeat-x 0 0;
        display: block;
        height: 12px;
    }
    .start_box{
        float: left;
        width: 70px;
        height: 12px;
        background: url(http://product.dangdang.com/images/icon_star.png) repeat-x 0 -12px;
        margin: 6px 6px 0 0;
        overflow: hidden;
        
    }
    .pl{
        background: #ff6d6b;
        border-color: #ff6d6b;
        color: white;
    }
    .t1{
        display: inline-block;
        padding-right: 25px;
    }
    .pinglun{
        margin-top: 10px;
        
    }
    .t1 a{
        color: ##1a66b3;
    }
    .mess_center .t1{
        display: inline-block;
        padding-right: 25px;
    }
    .slide h2{
        padding-top: 6px;
        max-height: 96px;
        overflow: hidden;
        font-size: 16px;
        line-height: 24px;
    }
    .slide h1{
        max-height: 48px;
        overflow: hidden;
        color: #323232;
        font-size: 18px;
        margin: 0 auto;
        
    }
    .slide{
        font-weight: normal;
        border-bottom: 1px solid #f5f5f5;
        padding: 0 6px 12px 0;
        margin-top: 10px;
        
    }
    .box_center{
        width: 630px;
        float: left;
    }
</style>