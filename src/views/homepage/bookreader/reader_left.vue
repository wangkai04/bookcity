<template>
    <div>
        <div class="bodyss">    
            <div class="head">
                <h3 class="title"></h3>
                <ul class="tab_a">
                    <li>好评最多</li>
                    <li>最受关注</li>
                    <li>人气收藏</li>
                </ul>
            </div>
            <div>
                <ul class="first">
                    <li class="line1">
                        <span class="num1">1.</span>
                        <a><img src="http://img3m9.ddimg.cn/74/1/23685329-1_b_28.jpg" /></a>
                        <p class="name"><a>岛上书店（每个人的生命中，都有无比艰难的那一年，将人生变得美好而辽阔）</a></p>
                        <p class="tname">
                            <span class="tname_a">
                                <span style="width: 90%;"></span>
                            </span>
                        </p>
                        <p class="price">
                            <span class="rob">
                                <span style="color: #000000;">当当网:</span>
                                <span style="font-weight: bold;">￥17.50</span>
                                <span style="font-weight: bold; color: #cccccc;text-decoration: line-through;">市场价：￥35.00</span>
                                <span style="font-weight: bold; color: #cccccc;">电子书:￥9.9</span>
                            </span>
                        </p>
                        <p class="txt">
                            岛上书店是间维多利亚风格的小屋，门廊上挂着褪色的招牌，
                            上面写着：没有谁是一座孤岛，每本书都是一个世界A．J．费克里，
                            人近中年，在一座与世隔绝的小岛上，经营一家书店。命运从未眷顾过他，
                            爱妻去世，书店危机，就连值钱的宝贝也遭窃。他的人生陷入僵局，他的内心沦为荒岛。就在此时，
                            一个神秘的包袱出现在书店中，意外地拯救了陷于孤独绝境中的A．J．，成为了连接他和妻姐伊斯梅、
                            警长兰比亚斯、出版社女业务员阿米莉娅之间的纽带，为他的生活带来了转机。小岛上的几个生命紧紧相依，
                            走出了人生的困境，而所有对书和生活的热爱都周而复始，愈加汹涌。
                        </p>
                    </li>
                </ul>
                <div class="roll_a">
                    <div class="over">
                        <ul class="list_aa">
                            <li>
                                <span>1</span>
                                <a><img src="http://img3m5.ddimg.cn/81/17/22742955-1_l_13.jpg" /></a>
                                <p class="names"><a>美国儿童百科</a></p>
                                <p class="start">
                                    <span class="leven">
                                        <span style="width: 92%;"></span>
                                    </span>
                                </p>
                                <p class="prices">
                                    <span class="rbo">￥51.90</span>
                                    <span class="price_r">￥66.0</span>
                                    <span class="dzs">电子书:￥35.90</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    .dzs{
        display: inline-block;
        padding: 4px 0 0 0;
        color: #787878;
    }
    .price_r{
        color: #aaa;
        text-decoration: line-through;
        float: left;
    }
    .rbo{
        color: #c30;
        float: left;
        overflow: hidden;
        margin-right: 12px;
        font-weight: bold;
    }
    .prices{
        padding-left: 20px;
        height: 36px;
        line-height: 16px;
        overflow: hidden;
        margin-top: 4px;
        font-size: 14px;
        position: relative;
    }
    .leven span{
        display: inline-block;
        display: block;
        height: 13px;
        background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/book_star_bg.png) 0 top repeat-x;
    }
    .leven{
        display: inline-block;
        height: 13px;
        font-size: 0;
        width: 69px;
        background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/book_star_bg.png) 0 bottom repeat-x;
        top: 1px;
    }
    .start{
        height: 14px;
        padding: 3px 0 3px 20px;
    }
    .names{
        padding: 7px 20px 0;
        height: 18px;
        line-height: 18px;
        overflow: hidden;
    }
    .list_aa li a img{
        display: block;
        width: 150px;
        height: 150px;
    }
    .list_aa li span{
        top: -27px;
        left: 26px;
    }
    .list_aa li{
        width: 150px;
        margin-right: 47px;
        float: left;
        position: relative;
    }
    .list_aa{
        left: 0;
        position: absolute;
    }
    .over{
        position: relative;
        width: 750px;
        height: 233px;
    }
    .roll_a{
        position: relative;
        width: 950px;
        overflow: hidden;
        padding: 40px 0 22px 0;
    }
    .txt{
        top: 80px;
        line-height: 24px;
        height: 120px;
        overflow: hidden;
        color: #666;
        position: absolute;
        left: 210px;
    }
    .rob{
        margin-right: 15px;
        font-weight: bold;
    }
    .price{
        height: 24px;
        line-height: 24px;
        top: 56px;
        color: #c30;
        font-size: 14px;
        left: 210px;
        position: absolute;
    }
    .tname_a span{
        display: block;
        height: 13px;
        font-size: 0;
            width: 69px;
        background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/book_star_bg.png) 0 top repeat-x;
    }
    .tname_a{
        display: inline-block;
        height: 13px;
        font-size: 0;
        width: 69px;
        background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/book_star_bg.png) 0 bottom repeat-x;
        position: relative;
        top: 1px;
    }
    .tname{
        height: 24px;
        line-height: 24px;
        top: 32px;
        font-size: 12px;
        float: right;
        position: relative;
        width: 740px;
    }
    .name{
        position: absolute;
        top: 0;
        left: 210px;
        height: 32px;
        line-height: 32px;
        overflow: hidden;
    }
    .line1 img{
        width: 200px;
    }
    a{
        text-decoration: none;
        color: #666;
    }
    .num1{
        position: absolute;
        top: -25px;
        left: 10px;
        font-size: 18px;
        color: #ff4f4b;
    }
    .line1 {
        height: 200px;
        position: relative;
        width: 950px;
    }
    .first{
        padding: 30px 0 17px;
        border-bottom: 1px dotted #d4d4d4;
        width: 950px;
    }
    .tab_a li:hover{
        border-radius: 6px 6px 0 0;
        border: 2px solid #487a6f;
        border-bottom: none;
        color: #4e8176;
        padding: 0 15px;
        background: #fff;
        font-weight: bold;
    }
    .tab_a li{
        padding: 2px 17px;
        height: 32px;
        line-height: 32px;
        float: left;
        color: #666;
        font-size: 14px;
        margin-right: 4px;
        cursor: pointer;
    }
    .tab_a{
        1height: 35px;
        position: absolute;
        right: 15px;
        top: 17px;
    }
    .title{
        height: 50px;
        width: 108px;
        line-height: 0;
        font-size: 0;
        background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/title_sprite.png) 0 -223px no-repeat;
        position: absolute;
        left: 0;
        top: 0;
    }
    .head{
        position: relative;
        width: 950px;
        height: 50px;
        border-bottom: 1px solid #487a6f;
    }
    .bodyss{
    	padding-bottom: 20px;
    }
</style>