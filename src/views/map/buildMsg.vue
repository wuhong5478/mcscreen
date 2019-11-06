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
				<td class="text">4层<span @click="showHouse" class="lookPdf">查看楼层平面图纸</span></td>
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
		<el-dialog modal="false" custom-class="houseDialog" title="楼层信息" :visible.sync="houseDetailDialogVisible" width="35%">
			<div class="box">
				<div class="left">
					<div>
						<label>
							楼层地址：
						</label>
						<span>
							梅城小镇某1号街大楼 张三 135 2586 3695
						</span>
					</div>
					<div>
						<label>
							负责人：
						</label>
						<span>
							张三
						</span>
					</div>
					<div>
						<label>
							联系电话：
						</label>
						<span>
							135 2586 3695
						</span>
					</div>
					<hr />
					<div>
						<p v-for="(item, index) in 7" :key="index" 
							@click="checkLevel(index)"
							:class="checked == index ? 'checked' : ''"
						>
							<span>{{item}}</span>
						</p>
					</div>
				</div>
				<div class="right">
					<div class="img">
						<img src="" alt="" />
					</div>
				</div>
			</div>
				
		</el-dialog>
	</div>
</template>
<script>
	export default {
		name: 'buildMsg',
		data() {
			return {
				houseDetailDialogVisible: false,
				checked: 0
			}
		},
		methods: {
			showHouse(id = ''){
				this.houseDetailDialogVisible = true;
				// 调取获取楼层接口

			},
			checkLevel(index){
				this.checked = index
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

		.houseDialog{
			.el-dialog__body{
				padding: 10px 20px;
			}
			.box{
				display: flex;
				font-size:0.24rem;
				line-height: 0.55rem;
				.left{
					width: 40%;
					height: 100%;
					color: #fff;
					.checked{
						background: #112950;
					}
				}
				.right{
					width: 60%;
					height: 100%;
					color: #fff;
					.img{
						padding: 10px;
						background: red; 
						width: 100%;
						height: auto;
					}
				}
			}
		}
		
	}
</style>
