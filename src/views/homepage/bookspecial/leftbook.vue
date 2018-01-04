<template>
  <div id="app">
  		<div class="main">
  				<div class="head">
  						<h3><img src="../../../assets/images/title1.png"></h3>
  						<ul>
  							<li><span>主打</span></li>
  							<li><span>童书1</span></li>
  							<li><span>童书2</span></li>
  							<li><span>文艺</span></li>
  							<li><span>小说</span></li>
  							<li><span>青春励志</span></li>
  							<li><span>社科</span></li>
  							<li><span>经营</span></li>
  							<li><span>生活</span></li>
  							<li><span>教育</span></li>
  							<li><span>电子书</span></li>
  						</ul>
  				</div>
  				<div class="body">
  					<ul>
  						<li v-for="data in arr">
  							<img :src="data.img" alt="" />
  							<p class="name">{{data.name}}</p>
  							<span class="cent"><img src="../../../assets/images/book.png"/>当当独家特供</span>
  							<p class="price"><span class="le">￥{{data.price1}}</span><span class="ri">￥{{data.price2}}</span></p>
  						</li>
  					</ul>
  				</div>
  		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [
        {'name': '从小爱科学·数学物理大礼盒（全36册）', 'price1': '144.00', 'price2': '58.00', 'img': 'http://img3m1.ddimg.cn/4/2/25153231-1_l_6.jpg'},
        {'name': '从小爱科学·数学物理大礼盒（全36册）', 'price1': '144.00', 'price2': '58.00', 'img': 'http://img3m5.ddimg.cn/68/21/25194875-1_l_3.jpg'},
        {'name': '从小爱科学·数学物理大礼盒（全36册）', 'price1': '144.00', 'price2': '58.00', 'img': 'http://img3m9.ddimg.cn/76/15/25183399-1_l_3.jpg'},
        {'name': '从小爱科学·数学物理大礼盒（全36册）', 'price1': '144.00', 'price2': '58.00', 'img': 'http://img3m3.ddimg.cn/57/36/25162293-1_l_5.jpg'},
        {'name': '从小爱科学·数学物理大礼盒（全36册）', 'price1': '144.00', 'price2': '58.00', 'img': 'http://img3m8.ddimg.cn/40/16/25165048-1_l_3.jpg'},
        {'name': '从小爱科学·数学物理大礼盒（全36册）', 'price1': '144.00', 'price2': '58.00', 'img': 'http://img3m1.ddimg.cn/43/31/23417701-1_l_7.jpg'},
        {'name': '从小爱科学·数学物理大礼盒（全36册）', 'price1': '144.00', 'price2': '58.00', 'img': 'http://img3m6.ddimg.cn/13/22/25167496-1_l_2.jpg'},
        {'name': '从小爱科学·数学物理大礼盒（全36册）', 'price1': '144.00', 'price2': '58.00', 'img': 'http://img3m1.ddimg.cn/80/29/23962931-1_l_10.jpg'},
        {'name': '从小爱科学·数学物理大礼盒（全36册）', 'price1': '144.00', 'price2': '58.00', 'img': 'http://img3m9.ddimg.cn/85/4/25203109-1_l_6.jpg'},
        {'name': '从小爱科学·数学物理大礼盒（全36册）', 'price1': '144.00', 'price2': '58.00', 'img': 'http://img3m4.ddimg.cn/43/34/1900574224-1_l_5.jpg'}
      ]
    }
  }
}
</script>

<style scoped>
		.head{
			position: relative;
	    height: 50px;
	    border-bottom: 1px solid #487a6f;
		}
		.head h3 img{
			width: 108px;
			height: 50px;
		}
		.head ul{
			height: 35px;
	    position: absolute;
	    right: 15px;
	    top: 15px;
		}
		.head ul li{
			border: 2px solid white;
			padding: 2px 16px 0;
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
		.head ul li:hover{
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
		}
		.body ul li:hover{
			.name{
				text-decoration: underline;
				color: #ec7814;
			}
		}
		.body .name{
			padding: 7px 20px 0;
	    height: 18px;
	    line-height: 18px;
	    overflow: hidden;
	    font-size: 12px;
		}
		.body .name:hover{
			color: #000;
    	text-decoration: none;
		}
		.body .cent{
			padding: 5px 0px 0 18px;
	    height: 16px;
	    line-height: 16px;
	    display: block;
	    color: #5b877e;
	    font-family: '宋体';
	    font-size: 12px;
	    overflow: hidden;
		}
		.body .cent img{
			width: 20px;
			height: 15px;
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
