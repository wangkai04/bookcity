<template>
	<div>
        <jumpleft></jumpleft>
        <jumpcenter></jumpcenter>
        <jumpright></jumpright>
        <jumpbottom></jumpbottom>
        <jumpleftbottom></jumpleftbottom>
	</div>
</template>

<script>
import jumpleft from './jump_left.vue'
import jumpcenter from './jump_center.vue'
import jumpright from './jump_right.vue'
import jumpbottom from './jump_bottom.vue'
import jumpleftbottom from './jump_leftbottom.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    jumpleft,
    jumpcenter,
    jumpright,
    jumpbottom,
    jumpleftbottom
  }
}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		width: 1200px;
		margin: 0 auto;
	}
</style>