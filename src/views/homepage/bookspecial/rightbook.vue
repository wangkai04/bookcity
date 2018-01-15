<template>
  <div id="app">
  		<div class="main">
  			<div class="title">
  				<span>图书畅销榜</span>
  			</div>
  			<div class="tab">
	  			<div class="head">
	  				<ul>
                <li v-for="(item,index) in show" :class="{active: item.isShow}" @mouseover="list(item.data.id,index)"><span>{{item.data.category_name}}</span></li>
              </ul>
	  				<!--<ul>
	  					<li>总榜</li>
	  					<li>小说</li>
	  					<li>文字</li>
	  					<li>经济</li>
	  					<li>美食</li>
	  				</ul>-->
	  			</div>	
	  			<div class="tab_list">
	  				<ul>
	  					<li v-for="(data,index)  in arr">
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
	import { getCategoryById, listByPage, bookdetailsList } from '../../../api/homepage'
export default {
  data () {
    return {
      arr: [],
      book_name: '',
      author: '',
      index: '',
      show: []
    }
  },
  created () {
    bookdetailsList().then(res => {
//    console.log(res.data)
      this.arr = res.data.data
    })
    var categoryArr = [22, 23, 24, 25, 26]
    for (let index in categoryArr) {
      this.show[index] = {isShow: false, data: {}}
      getCategoryById({id: categoryArr[index]}).then(res => {
        this.show[index].data = res.data.data
      })
    }
    this.show[0].isShow = true
    this.queryList()
  },
  methods: {
    list (id, index) {
      for (let i in this.show) {
        this.show[i].isShow = false
      }
      this.show[index].isShow = true
      this.queryList(id)
    },
    queryList (id = 4) {
      listByPage({page: 1, limit: 1, category_id: id}).then(res => {
        this.arr = res.data.data
      })
    }
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
	}
	.head ul li{
		width: 46px;
		height: 22px;
		line-height: 22px;
		float: left;
		font-size: 12px;
		text-align: center;
		border-top: 2px solid white;
		border: 1px solid #eaeaea;
		cursor:pointer;
	}
	.head ul .active{
		border-top: 2px solid #487a6f;
		color: #487a6f;
		font-weight: bold;
		text-decoration: underline;
		border-left: 1px solid #eaeaea;
		border-right: 1px solid #eaeaea;
		border-bottom: none;
	}

	.tab_list{
		width: 238px;
		height: 484px;
		margin-top: 25px;
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
	.tab_list ul li:nth-child(1) span{
		color: red;
	}
	.tab_list ul li:nth-child(2) span{
		color: red;
	}
	.tab_list ul li:nth-child(3) span{
		color: red;
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
