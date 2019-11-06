<template>
	<div class="deviceMsg">
		<div class="deviceMsg_left">
			<el-table :data="tableData" height="550" style="width: 100%">
				<el-table-column prop="d1" label="设备类型">
				</el-table-column>
				<el-table-column prop="d2" label="在线">
				</el-table-column>
				<el-table-column prop="d3" label="离线">
				</el-table-column>
			</el-table>
		</div>
		<div class="deviceMsg_right">
			<el-table :data="tableData1" height="550" style="width: 100%">
				<el-table-column prop="d1" label="设备编号">
				</el-table-column>
				<el-table-column prop="d2" label="设备位置">
				</el-table-column>
				<el-table-column prop="d3" label="信息状态">
				</el-table-column>
				<el-table-column prop="d4" label="操作">
					<template slot-scope="scope">
				        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
				    </template>
				</el-table-column>
			</el-table>
		</div>
		<!--设备详情弹窗-->
		<el-dialog title="设备详情" :visible.sync="deviceDetailDialogVisible" width="35%">
			<deviceMsgDetail></deviceMsgDetail>
		</el-dialog>
	</div>
</template>
<script>
	import deviceMsgDetail from "@/views/map/deviceMsgDetail";
	export default {
		name: 'deviceMsg',
		components: {
		    deviceMsgDetail
		},
		data() {
			return {
				deviceDetailDialogVisible:false,
				tableData: [{
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						    {
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						    {
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						    {
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						    {
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						    {
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						    {
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						    {
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						    {
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						    {
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						    
						    {
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						    {
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						    {
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						    {
								d1: '设备类型1',
								d2: '22',
								d3: '12'
						    },
						],
				tableData1: [{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },{
						d1: '消防栓按钮',
						d2: '8号楼-2层-东北侧',
						d3: '在线'
				    },
				]
			}
		},
		methods:{
			handleClick(){
				this.deviceDetailDialogVisible = true;
			}
		}
	};
</script>
<style lang="less">
	.deviceMsg {
		overflow: hidden;
		.deviceMsg_left{
			width: 35%;
			float: left;
		}
		.deviceMsg_right{
			width: 65%;
			float: right;
		}
	}
</style>