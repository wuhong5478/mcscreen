<template>
    <v-chart :style="sizeOption"  ref="myChart" :options="polar" />
</template>

 
<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/component/polar";
export default {
  props: {
    "echartOption": Object,
    "size": {
        type: Object,
        default: () => {
            return {
                width:'100%', 
                height: '100%'
            }
        }   
    }
  },
  components: {
    "v-chart": ECharts
  },
  data() {
    return {
      polar: this.echartOption,
      sizeOption: this.size
    };
  },
  mounted(){
      console.log(this.size)
  }
};
</script>
 
<style>

</style>