<template>
  <div class="header">
    <div class="left">数字化建设</div>
    <div class="center">
      梅城古镇智能消防平台
    </div>
    <div class="right">
      {{date}} {{time}} {{day}} {{weather}} {{`${temperature}℃`}} {{`湿度 ${humidity}`}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      time: '',
      date: '',
      day: '',
      weather: '',
      humidity: '',
      temperature: '',
      timer: null
    };
  },
  methods: {
    getTime() {
      let weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      this.time = this.$utils.renderTime(new Date(), 'HH:mm:ss');
      this.date = this.$utils.renderTime(new Date(), 'YYYY年MM月DD日');
      this.day = weekday[new Date().getDay()];
    },
    async getWeather() {
      try{
        // let result = await this.$utils.getWeather()
        // this.weather = result.realTime.wtNm;
        // this.humidity = result.realTime.wtHumi;
        // this.temperature = result.realTime.wtTemp;
      }catch(err){

      }
    }
  },
  mounted() {
    this.getTime();
    this.timer = setInterval(this.getTime, 1000);
    // this.getWeather();
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
}
</script>
<style scoped lang="less">
  .header {
    height: 1.2rem;
    width: 100%;
    position: absolute;
    z-index: 99;
    left: 0;
    top: 0;
    font-size: .38rem;
    font-weight: bolder;
    background-color: #1a1f41;
    padding: 0 .35rem;
    display: flex;
    justify-content: space-between;
    color: #fff;
    .left {
      height: 100%;
      width: 30%;
      cursor: pointer;
      font-size: .6rem;
      line-height: 1.2rem;
      text-align: left;
    }
    .center {
      height: 100%;
      width: 40%;
      font-size: .6rem;
      line-height: 1.2rem;
      text-align: center;
    }
    .right {
      height: 100%;
      width: 30%;
      font-size: .3rem;
      line-height: 1.2rem;
      text-align: right;
    }
  }
</style>
