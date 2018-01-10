<template>
  <div id="app">
  		<div class="main">
  			<div class="title">
  				<span>电子书榜</span>
  			</div>
  			<div class="tab">	
	  			<div class="tab_list">
	  				<ul>
	  					<li v-for="(data,index) in arr">
	  						<span style="padding-left: 8px;">{{index+1}}</span>
	  						<p>{{data.book_name}}</p>  						
	  					</li>
	  				</ul>
	  			</div>
  			</div>
  		</div>
  </div>
</template>

<script>
	import { bookdetailsList } from '../../../api/homepage'
export default {
  data () {
    return {
      arr: [],
      book_name: '',
      author: '',
      index: ''
    }
  },
  created () {
    bookdetailsList().then(res => {
      console.log(res.data)
      this.arr = res.data.data
    })
  }
}
</script>

<style scoped>
	.main{
		padding-top: 10px;
	}
	.title{
		width: 240px;
		height: 40px;
		background: green;
		background: url(../../../assets/images/title2.png) 5px 4px no-repeat;
		height: 40px;
    line-height: 40px;
    padding-left: 34px;
    font-size: 16px;
    color: #000;
    font-weight: bold;
    font-family: "Microsoft Yahei";
	}
	.title span:hover{
		color:  #ec7814;
	}
	.tab{
		width: 240px;
		height: 510px;
		background: ;
		border: 1px solid #EAEAEA;
		border-top: 2px solid  #487a6f;
	}
	.tab_list{
		width: 238px;
		height: 484px;
	}
	.tab_list ul{
    height: 480px;
	}
	.tab_list ul li{
    height: 36px;
    line-height: 36px;
    border-bottom: 1px dotted #d8d8d8;
    width: 220px;
    margin-left: 9px;
    vertical-align: top;
    cursor:pointer;
	}
	.tab_list ul li span{
		float: left;
		width: 28px;
		
	}
	.tab_list ul li p{
		float: left;
		height: 36px;
		line-height: 36px;
    overflow: hidden;
    width: 182px;
    font-size: 13px;
	}
</style>
