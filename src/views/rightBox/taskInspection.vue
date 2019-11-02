<template>
  <div class="taskInspection">
    <div class="title">
      <span>任务巡检统计</span>
    </div>
    <div class="content">
      <div class="content-tips">
        <span class="txt">任务巡检总数</span>
        <span class="number">2781</span>
      </div>
      <p class="device-table">
        <span>单位名称</span>
        <span>任务总数</span>
        <span>已完成</span>
        <span>未完成</span>
        <span>超时</span>
      </p>
      <div class="roll-box" ref="box">
        <div ref="u1">
          <p class="device-table dash-line" v-for="(item, index) in deviceData" :key="index">
            <span>{{item.name}}</span>
            <span>{{item.total}}</span>
            <span>{{item.suc}}</span>
            <span>{{item.fail}}</span>
            <span>{{item.error}}</span>
          </p>
        </div>
        <div ref="u2"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "taskInspection",
  data() {
    return {
      deviceData: []
    };
  },
  created() {
	  this.renderDeviceData()
  },
  mounted(){
	  this.$utils.roll(50, this.$refs.box, this.$refs.u1, this.$refs.u2);
  },
  methods: {
    renderDeviceData() {
      for (let i = 0; i <= 10; i++) {
        this.deviceData.push({
          name: "古镇2号街区",
          total: 32,
          suc: 30,
          fail: 1,
          error: 1
        });
      }
    }
  }
};
</script>
<style lang="less">
.taskInspection {
  height: 100%;
  .content {
    .content-tips {
      .txt {
        font-size: 0.23rem;
        font-weight: 700;
        font-style: normal;
        color: #00ffff;
      }

      .number {
        font-size: 0.23rem;
        margin-left: 0.4rem;
        font-weight: 700;
        font-style: normal;
        color: #ffff00;
      }
    }
    .tableList {
      width: calc(100% - 0.3rem);
      margin: 0 auto;
      margin-top: 0.1rem;
      th {
        line-height: 0.65rem;
        text-align: left;
        color: white;
        font-size: 0.23rem;
      }
      td {
        line-height: 0.5rem;
        text-align: left;
        color: #3d7eff;
        font-size: 0.23rem;
        border-bottom: 1px dashed #c2c2c2;
      }
    }

    .device-table {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      span:first-child {
        width: 40%;
      }
      span {
        width: 20%;
        color: #fff;
        text-align: center;
      }
    }
    .dash-line {
      border-bottom: 1px dashed #a5a5a5;
      line-height: 20px;
    }
    .roll-box {
      overflow: hidden;
      height: 100%;
    }
  }
}
</style>
