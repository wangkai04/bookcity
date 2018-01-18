<template>
    <div>
        <div class="tu">
            <div class="pic">
                <a class="img">
                    <img src="http://img3m8.ddimg.cn/77/4/25194488-2_w_3.jpg" />
                </a>
            </div>
            <div class="slide">
                <div class="slide_box">
                    <ul>
                        <li>
                            <a href="#"><img src="http://img3m8.ddimg.cn/77/4/25194488-1_w_5.jpg" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="http://img3m8.ddimg.cn/77/4/25194488-1_w_5.jpg" /></a>
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
    }
  }
}
</script>

<style scoped>
    .slide_box ul li a img{
        width: 100%;
    }
    .slide_box ul li a:hover{
        border: 1px solid #000000;
        display: block;
        
    }
    .slide_box ul li a{
        display: block;
        width: 54px;
        height: 54px;
        text-decoration: none;
    }
    .slide_box ul li{
        float: left;
        width: 57px;
        height: 57px;
        margin-right: 10px;
    }
    .slide_box ul{
        margin: 0px;
        padding: 0px;
        position: relative;
        list-style: none;
        width: 885px;
        left: 50px;
    }
    .slide_box{
        overflow: hidden;
        position: relative;
        z-index: 2;
        left: 0px;
        width: 295px;
    }
    .slide{
        width: 320px;
        margin: 8px auto 0;
        position: relative;
    }
    .img img{
        display: block;
        width: 320px;
        height: 320px;
        overflow: hidden;
    }
    .pic{
        width: 320px;
        height: 320px;
        margin: 0 auto;
        position: relative;
        z-index: 7777;
    }
    .tu{
        float: left;
        width: 320px;
        padding: 0 20px 30px 0;
    }
</style>