<template>
  <div id="app">
  		<div class="main">
  			<div class="title">
  				<span>图书畅销榜</span>
  			</div>
  			<div class="tab">
	  			<div class="head">
	  				<ul>
	  					<li>总榜</li>
	  					<li>小说</li>
	  					<li>文字</li>
	  					<li>经济</li>
	  					<li>美食</li>
	  				</ul>
	  			</div>	
	  			<div class="tab_list">
	  				<ul>
	  					<li>
	  						<span>1</span>
	  						<p>情商是什么（所谓情商高，绝不</p>
	  					</li>
	  				</ul>
	  			</div>
  			</div>
  		</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
	.main{
		padding-top: 10px;
	}
	.title{
		width: 240px;
		height: 40px;
		background: green;
		background: url(../../../assets/images/title2.png) 5px 4px no-repeat;
		height: 40px;
    line-height: 40px;
    padding-left: 34px;
    font-size: 16px;
    color: #000;
    font-weight: bold;
    font-family: "Microsoft Yahei";
	}
	.title span:hover{
		color:  #ec7814;
	}
	.tab{
		width: 240px;
		height: 510px;
		background: ;
		border: 1px solid #EAEAEA;
	}
	.head ul li{
		width: 46px;
		height: 22px;
		line-height: 22px;
		float: left;
		font-size: 12px;
		text-align: center;
		border-top: 2px solid white;
		border: 1px solid #eaeaea;
	}
	.head ul li:hover{
		border-top: 2px solid #487a6f;
		color: #487a6f;
		font-weight: bold;
		text-decoration: underline;
		border-left: 1px solid #eaeaea;
		border-right: 1px solid #eaeaea;
		border-bottom: none;
	}
	.tab_list{
		width: 238px;
		height: 484px;
		margin-top: 25px;
	}
	.tab_list ul{
    height: 480px;
	}
	.tab_list ul li{
    height: 36px;
    line-height: 36px;
    border-bottom: 1px dotted #d8d8d8;
    width: 220px;
    margin-left: 9px;
    vertical-align: top;
	}
	.tab_list ul li span{
		float: left;
	}
	.tab_list ul li p{
		float: right;
		width: 188px;
		height: 36px;
		background: green;
	}
</style>
