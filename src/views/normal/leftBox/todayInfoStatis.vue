<template>
  <div class="todayInfoStatis">
    <div class="title flex"><span>今日信息统计</span></div>
    <div class="content">
		<div class="content-tips">
			<span class="txt">今日报警总数</span>
			<span class="number">12</span>
		</div>
		<ul class="content-list">
			<li>
				<p>今日已处理火警</p>
				<span>12</span>
			</li>
			<li>
				<p>今日隐患总数</p>
				<span>112</span>
			</li>
			<li>
				<p>今日已处理隐患</p>
				<span>67</span>
			</li>
		</ul>
	</div>
  </div>
</template>
<script>
export default {
  name: 'todayInfoStatis',
  data(){
    return{

    }
  }
};
</script>
<style lang="less">
  .todayInfoStatis{
    height: 100%;
	
	.content{
		.content-tips{
			.txt{
				font-size: 0.23rem;
				font-weight: 700;
				font-style: normal;
				color: #00FFFF;
			}
			.number{
				font-size: 0.23rem;
				margin-left: 0.4rem;
				font-weight: 700;
				font-style: normal;
				color: #FFFF00;
			}
		}
		.content-list{
			display: flex;
			 margin-top: 0.3rem;
			li{
				flex: 1;
				p{
					font-size: 0.25rem;
					font-weight: 400;
					font-style: normal;
					color: #00FFFF;
					text-align: left;
					margin-bottom: 0.3rem;
				}
				span{
					display: block;
					text-indent:0.7rem ;
					font-size: 0.25rem;
					font-weight: 700;
					font-style: normal;
					color: #FFFF00;
				}
			}
		}
	}
  }
</style>
