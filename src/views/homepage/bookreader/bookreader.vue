<template>
  <div id="next">
    <readerleft></readerleft>
    <readerright></readerright>
  </div>
</template>

<script>
import readerleft from './reader_left.vue'
import readerright from './reader_right.vue'
export default {
  components: {
    readerleft,
    readerright
  }
}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
#next{
	border-bottom: 1px dashed #cccccc;
	margin-top: 20px;
}
</style>
