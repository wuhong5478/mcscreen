<template>
  <div class="equipmentCondition">
    <div class="title"><span>设备统计</span></div>
    <div class="content">
		<div class="content-tips">
			<span class="txt">已接入设备总数</span>
			<span class="number" style="margin-right:0.5rem;">2341</span>
			<span class="txt">设备完好率</span>
			<span class="number">98.19%</span>
		</div>
	</div>
  </div>
</template>
<script>
export default {
  name: 'equipmentCondition',
  data(){
    return{
    }
  }
};
</script>
<style lang="less">
  .equipmentCondition{
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
	}
  }
</style>
