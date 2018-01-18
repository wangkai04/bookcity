<template>
	<div>
		<div class="top_title">
		    <h3 class="title"></h3>
		    <a>换一批</a>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.top_title a{
		display: block;
	    height: 30px;
	    line-height: 30px;
	    font-size: 14px;
	    color: #228bc1;
	    position: absolute;
	    left: 150px;
	    top: 9px;
	    background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/sprite.png) 0 -46px no-repeat;
	    padding-left: 25px;
	    cursor: pointer;
	}
	.title{
		height: 50px;
	    width: 108px;
	    line-height: 0;
	    font-size: 0;
	    background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/title_sprite.png) 0 -150px no-repeat;
	    position: absolute;
	    left: 0;
	    top: 0;
	}
	.top_title{
	    height: 50px;
        position: relative;
        border-bottom: 1px solid #487a6f;
        width: 1200px;
        margin-top: 10px;
	}
</style>