<template>
	<div class="taskInspection">
		<div class="title"><span>任务巡检统计</span></div>
		<div class="content">
			<div class="content-tips">
				<span class="txt">任务巡检总数</span>
				<span class="number">2781</span>
			</div>
			<table class="tableList">
				<tr>
					<th>单位名称</th>
					<th>任务总数</th>
					<th>已完成</th>
					<th>未完成</th>
					<th>超时</th>
				</tr>
				<tr>
					<td>古镇2号街区</td>
					<td>33</td>
					<td>31</td>
					<td>2</td>
					<td>12</td>
				</tr>
				<tr>
					<td>古镇2号街区</td>
					<td>33</td>
					<td>31</td>
					<td>2</td>
					<td>12</td>
				</tr>
				<tr>
					<td>古镇2号街区</td>
					<td>33</td>
					<td>31</td>
					<td>2</td>
					<td>12</td>
				</tr>
			</table>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'taskInspection',
		data() {
			return {
				
			}
		}
	};
</script>
<style lang="less">
	.taskInspection {
		height: 100%;
		.content{
			.content-tips {
				.txt {
					font-size: 0.23rem;
					font-weight: 700;
					font-style: normal;
					color: #00FFFF;
				}
			
				.number {
					font-size: 0.23rem;
					margin-left: 0.4rem;
					font-weight: 700;
					font-style: normal;
					color: #FFFF00;
				}
			}
			.tableList{
				width: calc(100% - 0.3rem);
				margin: 0 auto;
				margin-top: 0.1rem;
				th{
					line-height: 0.65rem;
					text-align: left;
					color: white;
					font-size: 0.23rem;
					
				}
				td{
					line-height: 0.5rem;
					text-align: left;
					color: #3D7EFF;
					font-size: 0.23rem;
					border-bottom: 1px dashed #c2c2c2;
				}
			}
		}
		
	}
</style>
