<template>
	  <div class="main">
    	<booktop></booktop>
    	<bookcontent></bookcontent>
    	<bookspecial></bookspecial>
    	<booktuijian></booktuijian>
    	<booklike></booklike>
    	<bookreader></bookreader>
    	<bookbottom></bookbottom>
	  </div>
</template>

<script>
	import booktop from './booktop/booktop.vue'
	import bookcontent from './bookcontent/bookcontent.vue'
	import bookspecial from './bookspecial/bookspecial.vue'
	import booktuijian from './booktuijian/booktuijian.vue'
	import booklike from './booklike/booklike.vue'
	import bookreader from './bookreader/bookreader.vue'
	import bookbottom from './bookbottom/bookbottom.vue'
	
export default {
  components: {
    booktop,
    bookcontent,
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
