<template>
  <div class="main">
    <lefts></lefts>
    <lunbos></lunbos>
    <centers></centers>
    <rights></rights>
  </div>
</template>

<script>
import lefts from './booktop_left.vue'
import rights from './booktop_right.vue'
import lunbos from './lunbo.vue'
import centers from './booktop_center.vue'

export default {
  components: {
    lefts,
    rights,
    lunbos,
    centers
  }
}
</script>

<style scoped>
  *{
  	display: flex;
  	margin: 0;
  	padding: 0;
  	
  }
  .main{
  	height: 878px;
  }
</style>