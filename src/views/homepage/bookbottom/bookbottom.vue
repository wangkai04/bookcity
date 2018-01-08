<template>
    	<div class="footer">
    			<div class="top">
    				<div class="top_pic">
    					<img src="../../../assets/images/foot1.png"/>
    					<img src="../../../assets/images/foot2.png"/>
    					<img src="../../../assets/images/foot3.png"/>
    					<img src="../../../assets/images/foot4.png"/>
    				</div>
    			</div>
    			<div class="center">
    				<div class="list"> 					
	    				<div class="public">
	    					<span>购物指南</span>
	    					<ul>
	    						<li>购物流程</li>
	    						<li>发票制度</li>
	    						<li>账户管理</li>
	    						<li>会员优惠</li>
	    					</ul>
	    				</div>
	    				<div class="public">
	    					<span>支付方式</span>
	    					<ul>
	    						<li>货到付款</li>
	    						<li>网上支付</li>
	    						<li>礼品卡支付</li>
	    						<li>银行转账</li>
	    					</ul>
	    				</div>
	    				<div class="public">
	    					<span>订单服务</span>
	    					<ul>
	    						<li>配送服务查询</li>
	    						<li>订单状态说明</li>
	    						<li>自助取消订单</li>
	    						<li>自助修改订单</li>
	    					</ul>
	    				</div>
	    				<div class="public">
	    					<span>配送方式</span>
	    					<ul>
	    						<li>当日递</li>
	    						<li>次日达</li>
	    						<li>订单自提</li>
	    						<li>验货与签收</li>
	    					</ul>
	    				</div>
	    				<div class="public">
	    					<span>退换货</span>
	    					<ul>
	    						<li>退换货服务查询</li>
	    						<li>自助申请退换货</li>
	    						<li>退换货进度查询</li>
	    						<li>退款方式和时间</li>
	    					</ul>
	    				</div>
	    				<div class="public">
	    					<span>商家和服务</span>
	    					<ul>
	    						<li>商家中心</li>
	    						<li>运营服务</li>
	    						<li>加入唯品会</li>
	    					</ul>
	    				</div>
    				</div>
    			</div>
    			<div class="bottom">
    				<div class="bottom_nav">
    					<a>公司简介</a><span>|</span>
    					<a>诚聘英才</a><span>|</span>
    					<a>网站联盟</a><span>|</span>
    					<a>当当招商</a><span>|</span>
    					<a>机构销售</a><span>|</span>
    					<a>手机当当</a><span>|</span>
    					<a>官方Blog</a><span>|</span>
    					<a>热词搜索</a>
    				</div>
    				<div class="bottom_biaofu">
    					<span>Copyright (C) 当当网 2004-2017, All Rights Reserved</span>
    					<img src="../../../assets/images/logo.png" hr/>
    					<span>
    						<a class="aa">京ICP证041189号</a>
    					</span>
    					<span>出版物经营许可证 新出发京批字第直0673号</span>
    				</div>
    			</div>
    	</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	.footer{
		width: 100%;
		height: 420px;
		background: green;
		border-top: 2px solid #ff2832;
	    margin-top: 15px;
	    background-color: #fff;
	    clear: both;
	}
	.footer .top{
    	width: 100%;
		height: 79px;
		background-color: #fafafa;
    	border-bottom: 1px solid #ebebeb;
	}
	.footer .top .top_pic{
		width: 970px;
		height: 78px;
		margin: 0 auto;
	}
	.footer .top .top_pic img{
		padding: 10px 40px;
		margin-left: 10px;
	}
	.footer .top .top_pic img:hover{
		cursor: pointer;
	}
	.footer .center{
		height: 170px;
	    width: 100%;
	    border-bottom: 1px solid #ebebeb;
	}
	.footer .center .list{
		width: 920px;
	    height: 140px;
	    margin: 0 auto;
	    padding-top: 30px;
	}
	.footer .center .list .public{
		width: 150px;
	    float: left;
	    text-align: center;
	}
	.footer .center .list .public span{
		display: block;
	    padding-left: 30px;
	    font-size: 14px;
	    font-family: "microsoft yahei";
	    color: #323232;
	    height: 36px;
	    line-height: 36px;
	}
	.footer .center .list .public ul{
		padding-left: 27px;
	    list-style: none;
	    margin: 0;
    
	}
	.footer .center .list .public ul li{
		line-height: 20px;
	    height: 20px;
	    text-decoration: none;
	    color: #7d7d7d;
	    font-size: 12px;
	}
	.footer .center .list .public ul li:hover{
		cursor: pointer;
		color: #ff4f4b;
		text-decoration: underline;
	}
	
	.footer .bottom{
		height: 169px;
	}
	.footer .bottom .bottom_nav{
		height: 37px;
		text-align: center;
    	line-height: 20px;
	    padding-bottom: 17px;
	    margin-top: 25px;
	}
	.footer .bottom .bottom_nav a{
		color: #8c8c8c;
	    font-size: 12px;
	    text-decoration: none;
	}
	.footer .bottom .bottom_nav a:hover{
		cursor: pointer;
		color: #ff4f4b;
		text-decoration: underline;
	}
	.footer .bottom .bottom_nav span{
		margin: 0 17px 0 19px;
		color: #8c8c8c;
	}
	.footer .bottom .bottom_biaofu{
		height: 64px;
		color: #8c8c8c;
		font-size: 13px;
		line-height: 20px;
	    text-align: center;
	    width: 960px;
	    margin: 0 auto;
	}
	.footer .bottom .bottom_biaofu .aa:hover{
		cursor: pointer;
		color: #ff4f4b;
		text-decoration: underline;
	}
	.footer .bottom .bottom_biaofu img:hover{
		cursor: pointer;
	}
</style>
