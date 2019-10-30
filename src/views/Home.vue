<template>
  <div class="home">
    <Header></Header>
    <div class="mapContainer" id="mapContainer"></div>
    <div class=" leftBox">
      <div class="todayInfoStatis-wrap">
        <todayInfoStatis></todayInfoStatis>  
      </div>
      <div class="equipmentCondition-wrap">
        <equipmentCondition></equipmentCondition>  
      </div>
    </div>
    <div class="rightBox">
      <div class="workingSituation-wrap">
        <workingSituation></workingSituation>  
      </div>
      <div class="workingSituation-wrap">
        <workingSituation></workingSituation>  
      </div>
    </div>
    <alarmList></alarmList>
  </div>
</template>

<script>
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'
*/
import alarmList from '@/views/alarm/alarmList';
import todayInfoStatis from '@/views/leftBox/todayInfoStatis';
import equipmentCondition from '@/views/leftBox/equipmentCondition';
import workingSituation from '@/views/rightBox/workingSituation';
import Header from '@/components/Header.vue'
import AMap from 'AMap' // 引入高德地图
export default {
  name: 'home',
  components:{
    Header,
    alarmList,
    todayInfoStatis,
    equipmentCondition,
    workingSituation
  },
  mounted(){
    this.initMap();
    this.setFontSize();
    window.addEventListener('resize', () => {
      this.setFontSize();
    });
  },
  methods: {
    initMap(){
      let map = new AMap.Map('mapContainer', {
        center: [116.397428, 39.90923],
        resizeEnable: true,
        zoom: 10
      })
    },
    setFontSize() {
      let designSize = 2880; // 设计图尺寸
      let html = document.documentElement;

      let wW = html.clientWidth; // 窗口宽度
      let rem = wW * 100 / designSize;
      document.documentElement.style.fontSize = rem + 'px';
    },
  }
}
</script>
<style lang="less">
.home{
	width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
  .title {
    width: 100%;
    height: .72rem;
    background-image: -webkit-linear-gradient(left, #0A2138, #3A4754);
    padding: 0 .45rem;
    line-height: .72rem;
    font-size: .33rem;
    text-align: left;
    border-radius: .08rem .08rem 0 0;
    font-weight: 700;
  }
  .content {
    width: 100%;
    height: calc(100% - 0.72rem);
    padding: .38rem .38rem;
    background: rgba(58, 72, 84, .9);
    color: #9BA8C1;
    font-size: .24rem;
    font-weight: 400;
  }
}

.leftBox{
  width: 20%;
  height: calc(100% - 1.28rem);
  position: absolute;
  top: 1.28rem;
  left: 0;
  .todayInfoStatis-wrap{
    width: 100%;
    height: 45%;
    padding: 0 .05rem .08rem .1rem;
    box-sizing: border-box;
  }
  .equipmentCondition-wrap {
    width: 100%;
    height: 55%;
    padding: 0 .05rem .08rem .1rem;
    box-sizing: border-box;
  }
}
.rightBox{
  height: calc(100% - 1.3rem);
  width: 20%;
  position: absolute;
  top: 1.3rem;
  right: 0;
  .workingSituation-wrap {
    width: 100%;
    height: 50%;
    padding: 0 .1rem .08rem .05rem;
    box-sizing: border-box;
  }
}

.mapContainer{
  height: 100%;
  width: 100%;
}
</style>
