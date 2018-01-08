<template>
  <div id="app">
  		<div class="main">
  			<ul>
  				<li><img src="http://img57.ddimg.cn/9001320042133537.jpg"/></li>
  				<li><img src="http://img60.ddimg.cn/upload_img/00478/0609/382x140_dl_20171227.jpg"/></li>
  				<li><img src="http://img61.ddimg.cn/upload_img/00316/zhulin/2018.1382x140.jpg"/></li>
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
		cursor:pointer;
	}
</style>
