<template>
	<div class="aMap" id="mapContainer">
		
		<ul class="legend">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</template>
<script>
	import AMap from 'AMap' // 引入高德地图
	export default {
		name: 'aMap',
		data() {
			return {}
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
				})
			},
		}
	};
</script>
<style lang="less">
	.aMap {
		height: 100%;
		width: 100%;
		.legend{
			position: absolute;
			z-index: 999;
			right: 8.7rem;
			bottom: 3.2rem;
			width: 3rem;
			height: 1.5rem;
			border-radius: 0.1rem;
			background: inherit;
			background-color: rgba(30, 43, 70, 1);
			opacity: 0.6;

		}
	}
</style>
