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
				  <div class="bottom">
				  		<bottombook></bottombook>
				  </div>
		  </div>
  </div>
</template>

<script>
	import leftbook from './leftbook.vue'
	import rightbook from './rightbook.vue'
	import bottombook from './bottombook.vue'
	
export default {
  components: {
    leftbook,
    rightbook,
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
		.left{
			width: 956px;
			height: 582px;
			float: left;
		}
		.right{
			width: 240px;
			height: 550px;
			float: right;
			position: absolute;
			right: -10px;
			/*margin-left: 2px;*/
		}
		.bottom{
			width: 1200px;
			height: 202px;
			float: right;
			border-top: 1px solid #eaeaea;
			border-bottom: 1px solid #eaeaea;
		}
</style>
