<template>
  <div class="home">
    <div class="mapContainer" id="mapContainer" style="width: 100%;height: 800px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'
*/
import AMap from 'AMap' // 引入高德地图
export default {
  name: 'home',
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let map = new AMap.Map('mapContainer', {
        center: [116.397428, 39.90923],
        resizeEnable: true,
        zoom: 10
      })
    }
  }
}
</script>
