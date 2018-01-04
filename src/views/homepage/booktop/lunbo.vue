<template>
    <div class="all">
        <swiper class="a" :options="swiperOption" ref="mySwiper">
        <swiper-slide><img src="http://img61.ddimg.cn/upload_img/00721/zjl/750x315_wzh_20171228.jpg" /></swiper-slide>
        <swiper-slide><img src="http://img61.ddimg.cn/upload_img/00721/zjl/750x315_wzh_20171228.jpg" /></swiper-slide>
        <swiper-slide><img src="http://img61.ddimg.cn/upload_img/00721/zjl/750x315_wzh_20171228.jpg" /></swiper-slide>
      </swiper>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        swiperOption: {
          autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          }
        }
      }
    }
  }
</script>
<style scoped>
    .a{
        width: 750px;
        height: 315px;
        margin-left: 10px;
    }
</style>