<template>
	<div class="dangerMsg">
		<el-table :data="tableData" height="650" style="width: 100%">
			<el-table-column prop="d1" label="任务名称">
			</el-table-column>
			<el-table-column prop="d2" label="隐患来源">
			</el-table-column>
			<el-table-column prop="d3" label="隐患等级">
			</el-table-column>
			<el-table-column prop="d4" label="隐患位置">
			</el-table-column>
			<el-table-column prop="d5" label="隐患详情">
				<template slot-scope="scope">
			        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
			    </template>
			</el-table-column>
			<el-table-column prop="d6" label="应处理时间">
			</el-table-column>
			<el-table-column prop="d7" label="处理人">
			</el-table-column>
			<el-table-column prop="d8" label="处理结果">
			</el-table-column>
		</el-table>
		<!--隐患信息详情弹窗-->
		<el-dialog title="隐患信息" :visible.sync="dangerDetailDialogVisible" width="35%">
			<dangerMsgDetail></dangerMsgDetail>
		</el-dialog>
	</div>
</template>
<script>
	import dangerMsgDetail from "@/views/map/dangerMsgDetail";
	export default {
		name: 'dangerMsg',
		components: {
		    dangerMsgDetail
		},
		data() {
			return {
				dangerDetailDialogVisible:false,
				tableData: [{
								d1: '视频监控-人员离岗',
								d2: '设备',
								d3: '大楼东南角',
								d4: '查看',
								d5: '2019-10-31 14:25:19',
								d6: '李四',
								d7: '处理未确认',
								d8: '一般'
							},
							{
								d1: '视频监控-人员离岗',
								d2: '设备',
								d3: '大楼东南角',
								d4: '查看',
								d5: '2019-10-31 14:25:19',
								d6: '李四',
								d7: '处理未确认',
								d8: '一般'
							},
							{
								d1: '视频监控-人员离岗',
								d2: '设备',
								d3: '大楼东南角',
								d4: '查看',
								d5: '2019-10-31 14:25:19',
								d6: '李四',
								d7: '处理未确认',
								d8: '一般'
							},
							{
								d1: '视频监控-人员离岗',
								d2: '设备',
								d3: '大楼东南角',
								d4: '查看',
								d5: '2019-10-31 14:25:19',
								d6: '李四',
								d7: '处理未确认',
								d8: '一般'
							},
							{
								d1: '视频监控-人员离岗',
								d2: '设备',
								d3: '大楼东南角',
								d4: '查看',
								d5: '2019-10-31 14:25:19',
								d6: '李四',
								d7: '处理未确认',
								d8: '一般'
							},
							{
								d1: '视频监控-人员离岗',
								d2: '设备',
								d3: '大楼东南角',
								d4: '查看',
								d5: '2019-10-31 14:25:19',
								d6: '李四',
								d7: '处理未确认',
								d8: '一般'
							},
							{
								d1: '视频监控-人员离岗',
								d2: '设备',
								d3: '大楼东南角',
								d4: '查看',
								d5: '2019-10-31 14:25:19',
								d6: '李四',
								d7: '处理未确认',
								d8: '一般'
							},
							{
								d1: '视频监控-人员离岗',
								d2: '设备',
								d3: '大楼东南角',
								d4: '查看',
								d5: '2019-10-31 14:25:19',
								d6: '李四',
								d7: '处理未确认',
								d8: '一般'
							},
							{
								d1: '视频监控-人员离岗',
								d2: '设备',
								d3: '大楼东南角',
								d4: '查看',
								d5: '2019-10-31 14:25:19',
								d6: '李四',
								d7: '处理未确认',
								d8: '一般'
							},
							{
								d1: '视频监控-人员离岗',
								d2: '设备',
								d3: '大楼东南角',
								d4: '查看',
								d5: '2019-10-31 14:25:19',
								d6: '李四',
								d7: '处理未确认',
								d8: '一般'
							},
							{
								d1: '视频监控-人员离岗',
								d2: '设备',
								d3: '大楼东南角',
								d4: '查看',
								d5: '2019-10-31 14:25:19',
								d6: '李四',
								d7: '处理未确认',
								d8: '一般'
							},
							{
								d1: '视频监控-人员离岗',
								d2: '设备',
								d3: '大楼东南角',
								d4: '查看',
								d5: '2019-10-31 14:25:19',
								d6: '李四',
								d7: '处理未确认',
								d8: '一般'
							},
							{
								d1: '视频监控-人员离岗',
								d2: '设备',
								d3: '大楼东南角',
								d4: '查看',
								d5: '2019-10-31 14:25:19',
								d6: '李四',
								d7: '处理未确认',
								d8: '一般'
							},
						]
			}
		},
		methods:{
			handleClick(){
				this.dangerDetailDialogVisible = true;
			}
		}
	};
</script>
<style lang="less">
	.dangerMsg {}
</style>