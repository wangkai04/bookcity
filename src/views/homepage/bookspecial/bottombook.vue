<template>
  <div id="app">
  		<div class="main">
  			<ul>
  				<li><img src="http://img51.ddimg.cn/9003260060812741.jpg"/></li>
  				<li><img src="http://img60.ddimg.cn/topic_img/gys_04083/langshiji382140.jpg"/></li>
  				<li><img src="http://img63.ddimg.cn/topic_img/gys_04437/yskcxx_1130_382x140.jpg"/></li>
  			</ul>
  		</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
	ul{
		width: 1200px;
		height: 202px;
		line-height: 202px;
		display: flex;
		justify-content: space-around;
	}
	ul li{
		float: left;
		width: 390px;
	}
	img{
		width: 382px;
		height: 140px;
		padding: 31px 0px;
	}
</style>
