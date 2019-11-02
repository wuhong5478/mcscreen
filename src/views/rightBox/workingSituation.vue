<template>
  <div class="workingSituation">
    <div class="title">
      <span>隐患处理统计</span>
      <el-radio-group text-color="#fff" fill="#40a8f0" v-model="radio" size="mini">
        <el-radio-button label="年"></el-radio-button>
        <el-radio-button label="月"></el-radio-button>
        <el-radio-button label="日"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="content">
      <Echart :echartOption="option" :size="{width:'95%', height: '73%'}"></Echart>
    </div>
  </div>
</template>
<script>
import Echart from '@/components/Echart.vue'
import echarts from 'echarts'
export default {
  name: 'workingSituation',
  components: {
    Echart
  },
  data(){
    return{
      radio: '日',
      option: {
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
  }
};
</script>
<style lang="less">
.workingSituation {
  height: 100%;
}
</style>
