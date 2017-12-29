<template>
  <div id="app">
	  <div class="main">
	  	<leftlist></leftlist>
    	<banner></banner>
    	<rightlist></rightlist>
	  </div>  	
  </div>
</template>

<script>
	import leftlist from './leftlist.vue'
	import banner from './banner.vue'
	import rightlist from './rightlist.vue'
	
export default {
  components: {
    leftlist,
    banner,
    rightlist
  }
}
</script>

<style scoped>
		.main{
			width: 1200px;
			height: 916px;
			border: 1px solid black;
		}
	  
</style>
