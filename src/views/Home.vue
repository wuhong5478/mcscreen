<template>
  <div class="home">
    <Header></Header>
    <aMap></aMap>
    <div class="leftBox">
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
      <div class="fireAlarm-wrap">
        <fireAlarm></fireAlarm>
      </div>
      <div class="taskInspection-wrap">
        <taskInspection></taskInspection>
      </div>
    </div>
    <alarmList></alarmList>
  </div>
</template>

<script>
import alarmList from "@/views/alarm/alarmList";
import todayInfoStatis from "@/views/leftBox/todayInfoStatis";
import equipmentCondition from "@/views/leftBox/equipmentCondition";
import workingSituation from "@/views/rightBox/workingSituation";
import fireAlarm from "@/views/rightBox/fireAlarm";
import taskInspection from "@/views/rightBox/taskInspection";
import Header from "@/components/Header.vue";
import aMap from "@/views/map/aMap";

export default {
  name: "home",
  components: {
    Header,
    alarmList,
    todayInfoStatis,
    equipmentCondition,
    workingSituation,
    fireAlarm,
    taskInspection,
    aMap
  },
  mounted() {
    this.setFontSize();
    window.addEventListener("resize", () => {
      this.setFontSize();
    });
  },
  methods: {
    setFontSize() {
      let designSize = 2880; // 设计图尺寸
      let html = document.documentElement;

      let wW = html.clientWidth; // 窗口宽度
      let rem = (wW * 100) / designSize;
      document.documentElement.style.fontSize = rem + "px";
    }
  }
};
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;

  .title {
    width: 100%;
    height: 0.72rem;
    background-color: rgba(26, 31, 65, 1);
    padding: 0.25rem;
    line-height: 0.72rem;
    font-size: 0.23rem;
    text-align: left;
    border-radius: 0.1rem 0.1rem 0 0;
    font-weight: 600;
    color: #81d3f8;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .content {
    width: 100%;
    height: calc(100% - 0.72rem);
    border-radius: 0 0 0.1rem 0.1rem;
    padding: 0.15rem 0.25rem;
    background-color: rgba(26, 31, 65, 1);
    color: #9ba8c1;
    font-size: 0.24rem;
    font-weight: 400;
  }
  .el-radio-button__inner {
    background-color: transparent;
    border: 1px solid #40a8f0 !important;
    border-left: none !important;
    color: #fff !important;
  }
  .el-radio-button:first-child .el-radio-button__inner {
    border-left: 1px solid #40a8f0 !important;
  }
}

.leftBox {
  width: 30%;
  height: calc(100% - 4.57rem);
  position: absolute;
  top: 1.28rem;
  left: 0;

  .todayInfoStatis-wrap {
    width: 100%;
    height: 30%;
    padding: 0.1rem 0 0 0.17rem;
    box-sizing: border-box;
  }

  .equipmentCondition-wrap {
    width: 100%;
    height: 70%;
    padding: 0.17rem 0 0 0.17rem;
    box-sizing: border-box;
  }
}

.rightBox {
  height: calc(100% - 1.44rem);
  width: 30%;
  position: absolute;
  top: 1.3rem;
  right: 0;

  .workingSituation-wrap {
    width: 100%;
    height: 35%;
    padding: 0 0.17rem 0.17rem 0.05rem;
    box-sizing: border-box;
  }

  .fireAlarm-wrap {
    width: 100%;
    height: 35%;
    padding: 0 0.17rem 0.17rem 0.05rem;
    box-sizing: border-box;
  }

  .taskInspection-wrap {
    width: 100%;
    height: 30%;
    padding: 0 0.17rem 0rem 0.05rem;
    box-sizing: border-box;
  }
}
</style>
