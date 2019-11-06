<template>
	<div class="deviceMsgDetail">
		<table class="msgContent" style="width: 100%;">
			<tr>
				<td class="name">设备型号:</td>
				<td class="text">液位仪</td>
			</tr>
			<tr>
				<td class="name">设备状态:</td>
				<td class="text">在线</td>
			</tr>
			<tr>
				<td class="name">部署区域:</td>
				<td class="text">梅城一号街区</td>
			</tr>
			<tr>
				<td class="name">设备类型:</td>
				<td class="text">水池水位检测仪</td>
			</tr>
			<tr>
				<td class="name">权属机构:</td>
				<td class="text">梅城古镇管委会</td>
			</tr>
			<tr>
				<td class="name">供货商:</td>
				<td class="text">----</td>
			</tr>
			<tr>
				<td class="name">地理位置:</td>
				<td class="text">经度  纬度 海拔</td>
			</tr>
			<tr>
				<td class="name">设备运行状态:</td>
				<td class="text"></td>
			</tr>
		</table>
		<table class="status" style="width: 100%;">
			<tr>
				<th>设备运行状态:</th>
				<th>液位池告警状态</th>
				<th>液位值</th>
				<th>发送频率</th>
				<th>电池电量</th>
			</tr>
			<tr>
				<td>正常</td>
				<td>正常</td>
				<td>1.192%</td>
				<td>10</td>
				<td>89%</td>
			</tr>
		</table>
	</div>
</template>
<script>
	export default {
		name: 'deviceMsgDetail',
		data() {
			return {
				
			}
		}
	};
</script>
<style lang="less">
	.deviceMsgDetail{
		table.msgContent{
			td{
				font-size:0.24rem;
				line-height: 0.55rem;
			}
			.name{
				color: #FFFFFF;
				width: 2.5rem;
				vertical-align: top;
			}
			.text{
				color: white;
				.lookPdf{
					margin-left: 10px;
					font-weight: bold;
					color: yellow;
				}
				img{
					width: 5rem;
					height: auto;
				}
			}
		}
		table.status{
			border:1px solid rgba(42,65,103,1);
			th{
				text-align: center;
				color: #3FFFEA;
				font-size:0.26rem;
				line-height: 0.57rem;
			}
			td{
				text-align: center;
				color: white;
				font-size:0.24rem;
				line-height: 0.55rem;
			}
		}
		
	}
</style>
