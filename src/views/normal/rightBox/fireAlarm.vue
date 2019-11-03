<template>
  <div class="fireAlarm">
    <div class="title flex">
      <span>火警处理统计</span>
      <el-radio-group text-color="#fff" fill="#40a8f0" v-model="radio" size="mini">
        <el-radio-button label="年"></el-radio-button>
        <el-radio-button label="月"></el-radio-button>
        <el-radio-button label="日"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="content">
      <div class="echart-top">
        <Echart :size="{width:'95%', height: '73%'}" :echartOption="option"></Echart>
      </div>
      <div class="echart-bottom">
        <Echart :size="{width:'95%', height: '73%'}"  :echartOption="option2"></Echart>
      </div>
    </div>
  </div>
</template>
<script>
import Echart from "@/components/Echart.vue";
import echarts from "echarts";
export default {
  name: "fireAlarm",
  components: {
    Echart
  },
  data() {
    return {
      radio: "日",
      option: {},
      option2: {}
    };
  },
  created() {
    let classData = [
      { name: "设备报警总数", value: 100 },
      { name: "人工报警总数", value: 60 }
    ];
    let colors = ["#bc8dee", "#8693f3"];
    this.option = {
      color: colors,
      showDelay: 0,
        hideDelay: 50,
        transitionDuration:0,
      tooltip: {
        trigger: "item",
        formatter: function(e) {
          return e.marker + e.name + "：" + e.value;
        }
      },
      legend: [
        {
          orient: "vertical",
          top: "20%",
          right: "13%",
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
        left: "4%",
        right: "4%",
        bottom: "4%",
        containLabel: true
      },
      series: [
        {
          name: "",
          type: "pie",
          radius: ["50%", "70%"], // 大小缩放
          center: ["30%", "50%"], // 位置调整
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


    this.option2 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '8%',
            containLabel: true
        },
        legend: {
            data: ['已处理', '未处理', '处理中'],
            right: 10,
            top: 0,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
        },
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', ],
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                }
            },
        },
        yAxis: {
            type: 'value',
            max: '800',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        },
        series: [{
            name: '已处理',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fccb05'
                    }, {
                        offset: 1,
                        color: '#f5804d'
                    }]),
                    barBorderRadius: 12,
                },
            },
            data: [400, 400, 300, 300, 300]
        },
        {
            name: '未处理',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#8bd46e'
                    }, {
                        offset: 1,
                        color: '#09bcb7'
                    }]),
                    barBorderRadius: 11,
                }

            },
            data: [400, 500, 500, 500, 500]
        },
        {
            name: '处理中',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#248ff7'
                    }, {
                        offset: 1,
                        color: '#6851f1'
                    }]),
                    barBorderRadius: 11,
                }
            },
            data: [400, 600, 700, 700, 800]
        }
      ]
    }
  }
};
</script>
<style lang="less">
.fireAlarm {
  height: 100%;
}
.echart-top {
  height: 50%;
}
.echart-bottom {
  height: 50%;
}
</style>
