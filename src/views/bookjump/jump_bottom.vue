<template>
    <div class="product_content">
        <!--右侧主体-->
        <div class="main">
            <div class="group_buy">
                <ul class="tab">
                    <li class="hover">经常一起购买的商品</li>
                </ul>
                <div class="over">
                    <div class="paidang_box">
                        <ul class="paidang">
                            <li class="zhu">
                                <p class="pic">
                                    <a href="javascript:;"><img src="http://img3m8.ddimg.cn/77/4/25194488-1_l_5.jpg" /> </a>
                                </p>
                                <p class="price">
                                    <span class="price_a">¥70.50</span>
                                </p>
                                <p class="name">
                                    <a href="javascript:;" style="color: #646464;">妖猫传（沙门空海· 大唐鬼宴 全四册经典套装）</a>
                                </p>
                                <p class="zuozhe">〔日〕梦枕貘著，林青</p>
                                <div class="add"></div>
                            </li>
                        </ul>
                        <div class="lists">
                            <ul class="clearfix">
                                <li v-for="items in arr">
                                    <p class="pic">
                                        <a href="javascript:;"><img :src="items.thumbnails" /> </a>
                                    </p>
                                    <p class="price">
                                        <span class="price_a">¥{{items.price}}</span>
                                    </p>
                                    <p class="name">
                                        <a href="javascript:;" style="color: #646464;">{{items.book_name}}</a>
                                    </p>
                                    <p class="zuozhe">{{items.author}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="t_box">
                    <ul class="tab">
                        <li class="hover">商品详情</li>
                        <li>商品评论</li>
                        <li>商品问答</li>
                    </ul>
                </div>
                
                <div class="t_box_left">
                    <div class="pro_content">
                        <ul class="key">
                            <li>版 次：1</li>
                            <li>页 数：</li>
                            <li>字 数：</li>
                            <li>印刷时间：2017年12月01日</li>
                            <li>开 本：32开</li>
                            <li>纸 张：胶版纸</li>
                            <li>包 装：平装-胶订</li>
                            <li>是否套装：是</li>
                            <li>国际标准书号ISBN：9787559612755</li>
                            <li class="fenlei">
                                <label>所属分类：</label>
                                <span class="lie">
                                    <a href="javascript:;">图书</a>
                                    >
                                    <a href="javascript:;">小说</a>
                                    >
                                    <a href="javascript:;">社会</a>
                                </span>
                            </li>    
                        </ul>
                    </div>
                    <div class="section">
                    	<div class="section">
                    		<div class="title">
                    			<span>产品特色</span>
                    		</div>
                    		<div class="descrip">
                    			<span class="feature-all"></span>
                    			<img src="http://img55.ddimg.cn/99999990002237995.jpg"/>
                    		</div>
                    	</div>
                    	<div class="section">
                    		<div class="title">
                    			<span>编辑推选</span>
                    		</div>
                    		<div class="descrip">
                    			<span class="abstract-all"></span>
                    			★《阴阳师》作者梦枕貘重磅作品。历时17年，耗尽2600张稿纸，创作完成的鸿篇巨制。 
                    			<br />
                    			金吾卫刘云樵家的黑猫，突然口吐人言：“德宗皇帝将要死了！”
                    			<br />
                    			空海东渡，长安城波谲云诡，鬼宴开场。
                    			<br />
                    			<br />
                    			★ 陈凯歌 《霸王别姬》导演，王蕙玲 李安御用编剧，联合黄轩、张雨琦、刘昊然等众多中日明星共同打造的同名电影即将上映。
                    			<br />
                    			<br />
                    			★ 梦枕貘：我还想再说一次。这故事，真的是至今为止没人写过的杰作。
                    			<br />
                    			<br />
                    			★ 一切妖怪的怨念，都来自咒术，来自人的内心.
                    		</div>
                    	</div>
                    	<div class="section">
                    		<div class="title">
                    			<span>内容简介</span>
                    		</div>
                    		<div class="descrip">
                    			<span class="content-show">
                    				●《阴阳师》作者梦枕貘重磅作品。
                    				<br />
                    				历时17年，耗尽2600张稿纸，创作完成的鸿篇巨制。“讨栗子的枯手”“庭院里的黑猫”梦枕貘在小说中描绘了一个光怪陆离诡谲怪异的世界，编织出一幅历史奇幻大作。
                    				<br />
                    				<br />
                    				● 陈凯歌 （《霸王别姬》导演），王蕙玲（李安御用编剧），联合黄轩 张雨琦 刘昊然 等众多中日明星共同打造的同名电影即将与年底上映。
                    				<br />
                    				<br />
                    				● 空海东渡，长安城波谲云诡，鬼宴开场。
                    				<br />
                    				<br />
                    				金吾卫刘云樵家的黑猫突然口吐人言。赶去驱除妖怪的道士，被吓的几近疯癫。
                    				<br />
                    				年轻姣好的刘云樵妻子春琴在众人的目睹中化作鹤发鸡皮的老妇，一边唱起《清平调词》，一边起弄着和杨贵妃相似的舞姿。
                    			</span>
                    		</div>
                    	</div>
                    	<div class="section">
                    		<div class="title">
                    			<span>作者简介</span>
                    		</div>
                    		<div class="descrip">
                    			<span>
                    				梦枕貘
                    				<br />
                    				被誉为“日本魔幻小说超级霸主”。SF作家俱乐部会员、日本文艺家协会会员。“貘”是一种吃掉噩梦的奇兽，因为一直想写出梦一般的故事，便取了这个笔名。
                    				<br />
                    				代表作：
                    				<br />
                    				《吞噬上弦月的狮子》荣获“日本SF大赏”、“年度日本长篇小说星云赏”。
                    				<br />
                    				《诸神的山岭》获“柴田炼三郎赏”。
                    				<br />
                    				《大江户钓客传》获泉镜花文学奖、舟桥圣一文学奖、吉川英治文学奖。
                    				<br />
                    				《阴阳师》，改编成漫画、电影等多种形式作品。
                    				<br />
                    				《妖猫传：沙门空海》是梦枕貘历时17年，耗尽2600张稿纸，创作完成的鸿篇巨制。
                    			</span>
                    		</div>
                    	</div>
                    	<div class="section">
                    		<div class="title">
                    			<span>目　　录</span>
                    		</div>
                    		<div class="descrip">
                    			<span>
                    				一
                    				<br />
                    				主要登场人物 I
                    				<br />
                    				序卷　 妖物祭 001
                    				<br />
                    				第一章　 空海说怪力乱神 1
                    				<br />
                    				第二章　 暗夜秘语 50
                    				<br />
                    				第三章　 长安之春 62
                    				<br />
                    				第四章　 胡玉楼 93
                    				<br />
                    				第五章　 猫屋宇宙问答 120
                    				<br />
                    				第六章　 作　祟 140
                    				<br />
                    				第七章　 胡旋舞 160
                    				<br />
                    				第八章　 孔雀明王 179
                    				<br />
                    				第九章　 邪宗淫祠 194
                    				<br />
									第十章　 妙适菩萨 222
									<br />
									第十一章　 猫道士 243
                    			</span>
                    		</div>
                    	</div>
                    	<div class="section">
                    		<div class="title">
                    			<span>媒体评论</span>
                    		</div>
                    		<div class="descrip">
                    			<span>
                    				我还想再说一次。这故事，真的是至今为止没人写过的杰作。
                    				<br />
									——梦枕貘
									<br />
									<br />
									看到此书，我担心华文写作版图，又失去一块。
									<br />
									——张大春（台湾作家）
									<br />
									<br />
									精彩！如果《阴阳师》像零食或小菜的话，那这部真的可以称作盛宴了。尽管篇幅这么长，但主线的时间跨度却很短，是在叙事上下了很多功夫。
									<br />
									——网友貓愛薛定諤
                    			</span>
                    		</div>
                    	</div>
                    </div>
                    <!-- 价格说明 -->
                	<div class="price_indication">
                		<div class="titles">
                			价格说明
                		</div>
                		<ul>
                			<li>
                				<span>
                					<i></i>
                					当当网:
                				</span>
                				为商品的销售价，具体的成交价可能因会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。
                			</li>
                			<li>
                				<span>
                					<i></i>
                					划线价:
                				</span>
                				划线价格可能是图书封底定价、商品吊牌价、品牌专柜价或由品牌供应商提供的正品零售价
                				（如厂商指导价、建议零售价等）或该商品曾经展示过的销售价等，由于地区、时间的差异化和市场行情波动，
                				商品吊牌价、品牌专柜价等可能会与您购物时展示的不一致，该价格仅供您参考。
                			</li>
                			<li style="padding-left: 55px; position: relative;">
                				<span>
                					<i></i>
                					折扣:
                				</span>
                				折扣指在划线价（图书定价、商品吊牌价、品牌专柜价、厂商指导价等）
                				某一价格基础上计算出的优惠比例或优惠金额。
                				如有疑问，您可在购买前联系客服咨询。
                			</li>
                			<li style="padding-left: 85px; position: relative;">
                				<span>
                					<i></i>
                					异常问题:
                				</span>
                				如您发现活动商品销售价或促销信息有异常，请立即联系我们补正，以便您能顺利购物。
                			</li>
                		</ul>
                	</div>
                	<!-- 评论 -->
                	<div class="book_comment">
						<h3 class="tit">
							<a href="javascript:;" class="btn_red">写短评 赚积分</a>
							<div class="tit_pl">
							短评(
							<span style="color: #787878;">205</span>
							)
							</div>
						</h3>
						<div class="comment_head">
							<div class="comment_rate">
								<div class="processingbar">
									<svg style="width: 114; height: 114;overflow: hidden;">
										<path class="small">
										</path>
										<path class="big">
										</path>
									</svg>
									<div class="nei">
										<span>好评率</span>
										<span class="num">
											97.1
											<i>%</i>
										</span>
									</div>
								</div>
							</div>
							<div class="comment_tag_wrap">
								<div class="comment_tag_label">
									买过的人觉得
								</div>
								<div class="comment_tag_total">
									
								</div>
							</div>
						</div>
					</div>
                </div>
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
      this.arr = res.data.data
    })
  }
}
</script>

<style scoped>
	.comment_tag_total{
		position: relative;
	    width: 579px;
	    padding: 16px 15px 0 0;
	    overflow: hidden;
	}
	.comment_tag_label{
		padding: 16px 0 0;
    	line-height: 20px;
	}
	.comment_tag_wrap{
		width: 594px;
    	float: left;
	}
	.nei i{
		font-size: 22px;
	    position: relative;
	    top: -2px;
	}
	.nei .num{
		color: #645a5a;
	    font-size: 25px;
	    padding-top: 0;
	}
	.nei span{
		display: block;
    	padding: 20px 2px 0 0;
	}
	.nei{
		background: url(http://product.dangdang.com/images/comment_cycle.png) no-repeat -10px -10px;
		width: 93px;
	    height: 93px;
	    overflow: hidden;
	    position: absolute;
	    top: 10px;
	    left: 10px;
	    color: #646464;
	    text-align: center;
	    border-radius: 46px;
	}
	.big{
		stroke: #ff3d46;
		fill: none;
    	d: path('M 22.2895 98.3664 A 54 54 0 1 0 15.3683 91.3918');
    	stroke-width: 6;
	}
	.small{
		stroke-width: 6px;
		stroke: #ffb7bb;
	    fill: none;
    	d: path('M 16.4691 92.6826 A 54 54 0 0 0 21.0072 97.2557');
	}
	.processingbar{
		margin: 15px 0 0 20px;
	    position: relative;
	    width: 158px;
	    height: 117px;
	}
	.comment_rate{
		width: 178px;
    	float: left;
	}
	.comment_head{
		width: 970px;
	    color: #646464;
	    overflow: hidden;
	    position: relative;
	    padding-bottom: 22px;
	}
	.tit_pl{
		padding-top: 7px;
	}
	.btn_red{
		color: #fff;
	    float: right;
	    margin: 7px 24px 0 0;
	    padding: 0 10px;
	    border-radius: 5px;
	    background-color: #ff2832;
	}
	.tit{
		background: #f0f0f0;
	    border-bottom: 1px solid #dcdcdc;
	    color: #787878;
	    height: 34px;
	    padding-left: 20px;
	    font-size: 14px;
	}
	.book_comment{
		margin-bottom: 20px;
	}
	.price_indication ul li span i{
		background: #ccc;
	    display: inline-block;
	    width: 4px;
	    height: 4px;
	    border-radius: 4px;
		margin-right: 5px;
	    position: relative;
	    top: -2px;
	}
	.price_indication ul li span{
		position: absolute;
    	left: 0;
    	top: 0;
    	font-weight: bold;
	}
	.price_indication ul li{
		padding-left: 70px;
    	position: relative;
	}   
	.titles{
		color: #323232;
		font-weight: bold;
	}
	.price_indication{
		padding: 11px 20px 15px;
	    background: #fafafa;
	    color: #3c3c3c;
	    margin-bottom: 20px;
	}
	.content-show{
		color: #656565;
	    line-height: 22px;
	    font-size: 14px;
	}
	.abstract-all{
		color: #656565;
	    line-height: 22px;
	    font-size: 14px;
	}
	.feature-all{
		color: #656565;
	    line-height: 22px;
	    font-size: 14px;
	}
	.descrip{
		color: #656565;
	    line-height: 22px;
	    padding: 14px 20px;
	    font-size: 14px;
	}
	.title span{
		float: left;
	    border-left: 2px solid #ff2832;
	    padding: 0 30px 0 6px;
	    background: #e5e5e5 url(http://product.dangdang.com/images/product_sprites.png) no-repeat right -525px;
	    height: 22px;
	    padding-bottom: 2px;
	    margin-bottom: -2px;
	    position: relative;
	    color: #323232;
	}
	.title{
		border-bottom: 2px solid #e5e5e5;
    	height: 22px;
	}
	.section{
		padding-top: 10px;
	    width: 860px;
	    overflow: hidden;
	}
    .lie a{
        color: #1a66b3;
    }
    .lie{
        padding: 0;
        clear: both;
        display: block;
        position: relative;
        left: 70px;
    }
    .fenlei label{
        position: absolute;
        top: 0;
        left: 20px;
        cursor: default;
    }
    .fenlei{
        width: 788px;
        float: none;
        clear: both;
        height: auto;
        position: relative;
        padding-left: 90px;
    }
    .key li{
        padding-left: 20px;
        width: 266px;
        overflow: hidden;
        float: left;
        line-height: 22px;
        height: 22px;
        color: #323232;
        list-style-type: none;
        font-size: 14px;
        
    }
    .key{
        width: 858px;
        padding: 0 22px 0 0;
        margin-top: 20px;
        float: left;
    }
    .t_box_left{
        border-right: 1px solid #e1e1e1;
        width: 860px;
        padding-right: 20px;
        position: relative;
    }
    .t_box{
        position: relative;
        z-index: 999;
        width: 970px;
    }
    .clearfix li{
        float: left;
        position: relative;
        line-height: 20px;
        width: 165px;
    }
    .clearfix{
        width: 100000px;
        overflow: hidden;
        position: relative;
        z-index: 60;
        float: left;
    }
    .add{
        width: 16px;
        height: 16px;
        position: absolute;
        top: 58px;
        right: 2px;
        overflow: hidden;
        background: url(http://product.dangdang.com/images/product_sprites.png) no-repeat -25px -500px;
    }
    .zuozhe{
        width: 130px;
        height: 20px;
        overflow: hidden;
    }
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
    .pic a img{
        width: 130px;
        height: 130px;
    }
    .pic a{
        display: block;
        width: 130px;
        height: 130px;
        overflow: hidden;
        text-align: center;
    }
    .pic{
        width: 130px;
        height: 130px;
        overflow: hidden;
        position: relative;
    }
    .zhu{
        width: 164px;
        display: list-item;
    }
    .paidang{
        width: 180px;
        position: absolute;
        left: 0;
        top: 20px;
    }
    .paidang_box{
        padding-left: 180px;
        height: 225px;
    }
    .over{
        padding-top: 20px;
        position: relative;
        z-index: 60;
        width: 970px;
        overflow: hidden;
    }
    .tab li{
        float: left;
        height: 24px;
        padding: 1px 30px 0;
        color: #969696;
        overflow: hidden;
        cursor: pointer;
        vertical-align: top;
        display: list-item;        
    }
    .tab{
        border-bottom: 1px solid #323232;
    }
    .group_buy{
        padding-bottom: 30px;
        height: 250px;
        width: 970px;
        position: relative;
    }
    .main{
        float: right;
        padding-left: 20px;
        width: 970px;
    }
    .product_content{
        width: 1200px;
        margin: 22px auto 0;
    }
</style>