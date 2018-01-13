<template>
    <div class="all">
       <swiper class="a" :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in arr">
			<img :src="item.url" />
        </swiper-slide>
      </swiper>      
    </div>
</template>

<script>
import { bookallList } from '../../../api/homepage'
export default {
  data () {
    return {
      arr: [],
      swiperOption: {
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      }
    }
  },
  created () {
    bookallList().then(res => {
//  console.log(res.data.data)
      this.arr = res.data.data
    })
  }
}
</script>
<style scoped>
    .a{
        width: 750px;
        height: 315px;
        margin-left: 10px;
    }
    .all img:hover{
    	cursor: pointer;
    }
</style>