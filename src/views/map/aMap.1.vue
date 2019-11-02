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
	</div>
</template>
<script>
	import AMap from 'AMap' // 引入高德地图
	export default {
		name: 'aMap',
		data() {
			return {
				mapData: [
					{
						lon:116.38,
						lat:39.90
					},
					{
						lon:116.38,
						lat:39.81
					},
					{
						lon:116.39,
						lat:39.83
					}
				]
			}
		},
		
		mounted() {
			this.initMap();
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
				for(var i=0;i<this.mapData.length;i++){
					var _data = this.mapData[i];
					var marker = new AMap.Marker({
					    position: new AMap.LngLat(_data.lon,_data.lat),
						//icon: '//vdata.amap.com/icons/b18/1/2.png'  //todo 替换成对应的点
					    offset: new AMap.Pixel(-10, -10)
					});
					
					marker.on("click",function(e){
						console.log(e)
					})
					
					markersList.push(marker)
				}
				map.add(markersList);	

			},
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
	.aMap {
		height: 100%;
		width: 100%;

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
