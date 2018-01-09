<template>
  <div class="main">
    <booktitle></booktitle>
    <bookleft></bookleft>
    <bookright></bookright>
  </div>
</template>

<script>
import booktitle from './book_title.vue'
import bookright from './book_right.vue'
import bookleft from './book_left.vue'
export default {
  components: {
    booktitle,
    bookright,
    bookleft
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    display: flex;
  }
  .main{
  	width: 1200px;
  }
</style>
