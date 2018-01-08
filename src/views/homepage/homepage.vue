<template>
	<div>
	  <div class="main">
    	<booktop></booktop>
    	<bookspecial></bookspecial>
    	<booktuijian></booktuijian>
    	<booklike></booklike>
    	<bookreader></bookreader>
	  </div>
    	<bookbottom></bookbottom>
	</div>
</template>

<script>
	import booktop from './booktop/booktop.vue'
	import bookspecial from './bookspecial/bookspecial.vue'
	import booktuijian from './booktuijian/booktuijian.vue'
	import booklike from './booklike/booklike.vue'
	import bookreader from './bookreader/bookreader.vue'
	import bookbottom from './bookbottom/bookbottom.vue'
	
export default {
  components: {
    booktop,
    bookspecial,
    booktuijian,
    booklike,
    bookreader,
    bookbottom
  }
}
</script>

<style scoped>
		.main{
			width: 1200PX;
			margin: 0 auto;
		}

</style>
