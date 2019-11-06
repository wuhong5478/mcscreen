<template>
	<div class="buildMsg">
		<table>
			<tr>
				<td class="name">建筑名称:</td>
				<td class="text">梅城小镇某一号街大楼</td>
			</tr>
			<tr>
				<td class="name">所属小区:</td>
				<td class="text">梅城2号</td>
			</tr>
			<tr>
				<td class="name">建筑类型:</td>
				<td class="text">工业建筑</td>
			</tr>
			<tr>
				<td class="name">建筑面积:</td>
				<td class="text">28119平方米</td>
			</tr>
			<tr>
				<td class="name">占地面积:</td>
				<td class="text">1200平方米</td>
			</tr>
			<tr>
				<td class="name">建筑楼层:</td>
				<td class="text">4层<span class="lookPdf">查看楼层平面图纸</span></td>
			</tr>
			<tr>
				<td class="name">消防设备维护单位:</td>
				<td class="text">浙江省杭州市梅城古镇消防公司</td>
			</tr>
			<tr>
				<td class="name">消防设备检测单位:</td>
				<td class="text">消防设备质量监控单位</td>
			</tr>
			<tr>
				<td class="name">消防负责人:</td>
				<td class="text">张三</td>
			</tr>
			<tr>
				<td class="name">消防室电话:</td>
				<td class="text">135 2586 3595</td>
			</tr>
		</table>
	</div>
</template>
<script>
	export default {
		name: 'buildMsg',
		data() {
			return {
				
			}
		}
	};
</script>
<style lang="less">
	.buildMsg{
		table{
			td{
				font-size:0.24rem;
				line-height: 0.55rem;
			}
			.name{
				color: #FFFFFF;
				width: 2.5rem;
			}
			.text{
				color: white;
				.lookPdf{
					margin-left: 10px;
					font-weight: bold;
					color: yellow;
				}
			}
		}
		
	}
</style>
