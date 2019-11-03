<template>
  <div class="equipmentCondition">
    <div class="title flex">
      <span>设备统计</span>
    </div>
    <div class="content">
      <div class="content-tips">
        <span class="txt">已接入设备总数</span>
        <span class="number" style="margin-right:0.5rem;">2341</span>
        <span class="txt">设备完好率</span>
        <span class="number">98.19%</span>
      </div>
      <div class="content-middle">
        <div class="echart-left">
          <Echart :echartOption="option"></Echart>
        </div>
        <div class="echart-right">
          <Echart :echartOption="option2"></Echart>
        </div>
      </div>
      <div class="content-bottom">
        <p class="device-table">
          <span></span>
          <span>完好3000</span>
          <span>/</span>
          <span>故障30</span>
        </p>
        <div class="roll-box" ref="box">
          <div ref="u1">
            <p class="device-table dash-line" v-for="(item, index) in deviceData" :key="index">
              <span>{{item.name}}</span>
              <span>{{item.deviceOk}}</span>
              <span></span>
              <span>{{item.deviceNo}}</span>
            </p>
          </div>
          <div ref="u2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Echart from "@/components/Echart.vue";
import echarts from "echarts";
export default {
  name: "equipmentCondition",
  components: {
    Echart
  },
  data() {
    return {
      option: {},
      option2: {},
      deviceData: []
    };
  },
  created() {
    this.renderChartLeft();
    this.renderChartRight();
    this.renderDeviceData();
  },
  mounted() {
    this.$utils.roll(50, this.$refs.box, this.$refs.u1, this.$refs.u2);
  },
  methods: {
    renderChartLeft() {
      let classData = [
        { name: "沿街商铺", value: 100 },
        { name: "居民小区", value: 60 },
        { name: "古镇建筑", value: 70 },
        { name: "政府单位", value: 90 }
      ];
      let colors = ["#70b603", "#8693f3", "#8400ff", "#f59a23"];
      this.option = {
        color: colors,
        showDelay: 0,
        hideDelay: 50,
        transitionDuration: 0,
        tooltip: {
          trigger: "item",
          formatter: function(e) {
            return e.marker + e.name + "：" + e.value;
          }
        },
        legend: [
          {
            orient: "vertical",
            top: "15%",
            right: "0%",
            height: "100%",
            textStyle: {
              color: "#fff"
            },
            formatter: function(name) {
              var total = 0;
              var target;
              for (var i = 0, l = classData.length; i < l; i++) {
                total += classData[i].value;
                if (classData[i].name == name) {
                  target = classData[i].value;
                }
              }
              return name + " " + target;
            },
            data: classData
          }
        ],
        grid: {
          left: "0%",
          right: "0%",
          top: "0%",
          bottom: "0%",
          containLabel: false
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["30%", "50%"], // 大小缩放
            center: ["25%", "50%"], // 位置调整
            avoidLabelOverlap: false,
            hoverOffset: 3,
            itemStyle: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              shadowBlur: 3,
              shadowColor: "yellow"
            },
            label: {
              normal: {
                show: false,
                position: "center",
                formatter: "{b}\n{d}%"
              },
              emphasis: {
                show: true
              }
            },
            data: classData,
            zlevel: 5
          }
        ]
      };
    },
    renderChartRight() {
      let classData = [
        { name: "在线设备", value: 100 },
        { name: "离线设备", value: 60 },
        { name: "未激活设备", value: 70 }
      ];
      let colors = ["#c280ff", "#00bfbf", "#f59a23"];
      this.option2 = {
        color: colors,
        showDelay: 0,
        hideDelay: 50,
        transitionDuration: 0,
        tooltip: {
          trigger: "item",
          formatter: function(e) {
            return e.marker + e.name + "：" + e.value;
          }
        },
        legend: [
          {
            orient: "vertical",
            top: "15%",
            right: "0%",
            height: "100%",
            textStyle: {
              color: "#fff"
            },
            formatter: function(name) {
              var total = 0;
              var target;
              for (var i = 0, l = classData.length; i < l; i++) {
                total += classData[i].value;
                if (classData[i].name == name) {
                  target = classData[i].value;
                }
              }
              return name + " " + target;
            },
            data: classData
          }
        ],
        grid: {
          left: "0%",
          right: "0%",
          top: "0%",
          bottom: "0%",
          containLabel: false
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["20%", "40%"], // 大小缩放
            center: ["25%", "50%"], // 位置调整
            avoidLabelOverlap: false,
            hoverOffset: 3,
            itemStyle: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              shadowBlur: 3,
              shadowColor: "yellow"
            },
            label: {
              normal: {
                show: false,
                position: "center",
                formatter: "{b}\n{d}%"
              },
              emphasis: {
                show: true
              }
            },
            data: classData,
            zlevel: 5
          }
        ]
      };
    },
    renderDeviceData() {
      for (let i = 0; i <= 10; i++) {
        this.deviceData.push({
          name: "电器火灾",
          deviceOk: (Math.random() * 100).toFixed(0),
          deviceNo: (Math.random() * 100).toFixed(0)
        });
      }
    }
  }
};
</script>
<style lang="less">
.equipmentCondition {
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
    .content-middle {
      height: 40%;
      display: flex;
      .echart-left {
        width: 60%;
        height: 100%;
      }
      .echart-right {
        width: 40%;
        height: 100%;
      }
    }
    .content-bottom {
      height: 60%;
      margin-top: 10px;
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
}
</style>
