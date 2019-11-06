<template>
	<div class="buildMsg">
		<table>
			<tr>
				<td class="name">上报人:</td>
				<td class="text">王小明</td>
			</tr>
			<tr>
				<td class="name">上报时间:</td>
				<td class="text">2019-10-31 12:31:25</td>
			</tr>
			<tr>
				<td class="name">现场图片:</td>
				<td class="text">
					<img src="http://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/img3_3lian_com/c2db1d34a47447867d0916c3f5696108.jpg"/>
				</td>
			</tr>
			<tr>
				<td class="name">隐患描述:</td>
				<td class="text">梅城5号摄像头被人为损坏梅城5号摄像头被人为损坏梅城5号摄像头被人为损坏梅城5号摄像头被人为损坏梅城5号摄像头被人为损坏</td>
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
		
	}
</style>
