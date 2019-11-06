<template>
	<div class="aMap" id="mapContainer">
		<ul class="legend">
			<li><img src="../../assets/mapIcon/fireStation.png" alt="">微型消防站</li>
			<li><img src="../../assets/mapIcon/hospital.png" alt="">医院</li>
			<li><img src="../../assets/mapIcon/danger.png" alt="">危险源</li>
			<li><img src="../../assets/mapIcon/fireRoom.png" alt="">消防室</li>
			<li><img src="../../assets/mapIcon/water.png" alt="">水源</li>
			<li><img src="../../assets/mapIcon/video.png" alt="">摄像头</li>
		</ul>
		
		<!--建筑信息弹窗-->
		<el-dialog title="建筑概况" :visible.sync="buildDialogVisible" width="35%">
			<buildMsg></buildMsg>
		</el-dialog>
		<!--隐患信息弹窗-->
		<el-dialog title="隐患信息" :visible.sync="dangerDialogVisible" width="65%">
			<dangerMsg></dangerMsg>
		</el-dialog>
		<!--设备信息弹窗-->
		<el-dialog title="设备信息" :visible.sync="deviceDialogVisible" width="50%">
			<deviceMsg></deviceMsg>
		</el-dialog>
		
		
	</div>
</template>
<script>
	import AMap from 'AMap' // 引入高德地图
	import buildMsg from "@/views/map/buildMsg";
	import dangerMsg from "@/views/map/dangerMsg";
	import deviceMsg from "@/views/map/deviceMsg";
	import infowin1 from '@/assets/mapIcon/infowin_1.png'
	import infowin2 from '@/assets/mapIcon/infowin_2.png'
	import infowin3 from '@/assets/mapIcon/infowin_3.png'
	export default {
		name: 'aMap',
		components: {
		    buildMsg,
		    dangerMsg,
		    deviceMsg
		},
		data() {
			return {
				mapData: [
					{
						lon:116.36,
						lat:39.90
					},
					{
						lon:116.37,
						lat:39.71
					},
					{
						lon:116.39,
						lat:39.83
					}
				],
				buildDialogVisible: false,
				dangerDialogVisible: false,
				deviceDialogVisible:true 
			}
		},
		mounted() {
			this.initMap();
			
			
			//地图中图标点击事件
			
		},
		methods: {
			initMap() {
				let map = new AMap.Map('mapContainer', {
					center: [116.397428, 39.90923],
					resizeEnable: true,
					zoom: 11
				});
				 AMapUI.loadUI(['control/BasicControl'], function(BasicControl) {
					//添加一个缩放控件
					map.addControl(new BasicControl.Zoom({
						position: 'lm'
					}));
					//图层切换控件
					map.addControl(new BasicControl.LayerSwitcher({
						position: 'rt'
					}));
				});
				var markersList = [];
				var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(4, -15)});
				for(var i=0;i<this.mapData.length;i++){
					var _data = this.mapData[i];
	
					//自定义点标记
					var mapIco = new AMap.Icon({
						size: new AMap.Size(30, 44),
						image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png',
						imageSize: new AMap.Size(30, 44)
					});
					var marker = new AMap.Marker({
					    position: new AMap.LngLat(_data.lon,_data.lat),
						icon:mapIco,
					    offset: new AMap.Pixel(-10, -10),
						size: new AMap.Size(25, 34),
					});
					var  _content = `<ul class="mapinfoWin">
										<li class="build"><img src="${infowin1}"><p>建筑信息</p></li>
										<li><img src="${infowin2}"><p>设备信息</p></li>
										<li><img src="${infowin3}"><p>隐患信息</p></li>
									</ul>`;
					marker.content = _content;
					marker.on("click",markerClick)
					marker.emit('click', {target: marker});
					markersList.push(marker)
				}
				map.add(markersList);	
				
				
				function markerClick(e) {
					infoWindow.setContent(e.target.content);
					infoWindow.open(map, e.target.getPosition());
				}
			},
			//建筑信息
			openBuildMsg(){
				alert(1)
				this.buildDialogVisible = true;
			}
			
		}
	};
</script>
<style lang="less">
	.amap-ui-control-position-lm{
		left:31%!important;
		bottom:2rem!important;
	}
	.amap-ui-control-position-rt{
		top:1.5rem!important;
		right:31%!important;
	}
	.amap-info-close{
		right: 7px!important;
	}
	.aMap {
		height: 100%;
		width: 100%;
		.mapinfoWin{
			overflow:hidden;
			li{
				cursor: pointer;
				float:left;
				width:1.15rem;
				height:1.3rem;
				color:black;
				img{
					width: 0.8rem;
					height: 0.8rem;
					display: block;
					margin: 0.1rem auto 0;
				}
				p{
					text-align: center;
					line-height: 0.4rem;
				}
			}
		}
		.legend {
			position: absolute;
			z-index: 999;
			right: 8.7rem;
			bottom: 3.2rem;
			width: 3.8rem;
			height: 1.7rem;
			padding: 0.1rem 0;
			border-radius: 0.1rem;
			background: inherit;
			background-color: rgba(30, 43, 70, 1);
			opacity: 0.8;

			li {
				cursor: pointer;
				position: relative;
				width: 50%;
				padding: 0 0.1rem;
				float: left;
				height: 0.5rem;
				line-height: 0.5rem;
				font-weight: 700;
				font-style: normal;
				font-size: 0.21rem;
				text-indent: 0.6rem;
				color: #00FFFF;
				img{
					width: 0.35rem;
					height: 0.35rem;
					position: absolute;
					top: 0.05rem;
					left: 0.2rem;
				}
			}
		}
	}
</style>
