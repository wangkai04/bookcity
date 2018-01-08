<template>
  <div id="app">
    <div class="main">
				  <div class="top">
						  <div class="left">
						  		<leftbook></leftbook>
						  </div>
						  <div class="right">
						  		<rightbook></rightbook>
						  </div>
				  </div>
				  <div class="center">
				  		<div class="le">
				  				<jianjie></jianjie>
				  		</div>
				  		<div class="ri">
				  				<guanggao></guanggao>
				  		</div>
				  </div>
				  <div class="bottom">
				  		<bottombook></bottombook>
				  </div>
		  </div>
  </div>
</template>

<script>
	import leftbook from './leftbook.vue'
	import rightbook from './rightbook.vue'
	import jianjie from './jianjie.vue'
	import guanggao from './guanggao.vue'
	import bottombook from './bottombook.vue'
	
export default {
  components: {
    leftbook,
    rightbook,
    jianjie,
    guanggao,
    bottombook
  }
}
</script>

<style scoped>
	.main{
		width: 1190px;
		height: 810px;
		position: relative;
	}
	.top{
		width: 1190px;
		height: 570px;
	}
	.left{
		width: 956px;
		height: 582px;
		float: left;
	}
	.right{
		width: 260px;
			height: 550px;
			float: right;
			position: absolute;
			right: -20px;
		/*margin-left: 2px;*/
	}
	.center{
		width: 1193px;
		height: 510px;
		margin-top: 15px;
		float: left;
	}
	.le{
		width: 945px;
		height: 510px;
		float: left;
		border:1px solid #eaeaea;
	}
	.ri{
		width: 240px;
		height: 510px;
		float: right;
	}
	.bottom{
		width: 1196px;
		height: 202px;
		float: right;
		margin-top: 20px;
		border-top: 1px solid #eaeaea;
		border-bottom: 1px solid #eaeaea;
	}
</style>
