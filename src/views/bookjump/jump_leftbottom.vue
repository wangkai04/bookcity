<template>
    <div>
        <div class="aside">
            <div class="abox">
                <h5>浏览此商品的顾客也同时浏览</h5>
                <ul class="none_b">
                    <li v-for="items in arr">
                        <p class="pic">
                            <a href="#"><img :src="items.thumbnails" /> </a>
                        </p>
                        <p class="price">
                            <span class="price_a">¥{{items.price}}</span>
                        </p>
                        <p class="name">
                            <a href="#" style="color: #646464;">{{items.book_name}}</a>
                        </p>
                        <p class="zuozhe">{{items.author}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { bookdetailsList } from '../../api/homepage'
export default {
  data () {
    return {
      arr: []
    }
  },
  created () {
    bookdetailsList().then(res => {
      console.log(res.data.data)
      this.arr = res.data.data
    })
  }
}
</script>

<style scoped>
    .name{
        width: 130px;
        height: 20px;
        overflow: hidden;
    }
    .price_a{
        display: inline-block;
        padding-right: 3px;
        color: #ff2832;
    }
    .price{
        width: 130px;
        overflow: hidden;
        white-space: nowrap;
        padding: 15px 0 0;
    }
    .pic{
        display: block;
	    width: 150px;
	    height: 150px;
	    overflow: hidden;
	    margin: 0 auto;
	    border: 1px solid #fff;
	    position: relative;
    }
    .none_b li{
        padding: 10px;
        width: 174px;
        overflow: hidden;
        border-top: 1px dotted #ccc;
    }
    .none_b{
        width: 194px;
        margin: 0 auto;
        padding-bottom: 8px;
    }
    .abox h5{
        height: 30px;
        color: #646464;
        overflow: hidden;
        padding: 5px 0 0 8px;
        margin-bottom: -1px;
        background-color: #fff;
        position: relative;
        z-index: 333;
    }
    .abox{
        border: 1px solid #eee;
        margin-bottom: 20px;
    }
    .aside{
        float: left;
        width: 210px;
    }
</style>