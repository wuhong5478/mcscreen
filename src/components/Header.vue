<template>
  <div class="header">
    <div class="left">数字化建设</div>
    <div class="center">
      梅城古镇智能消防
    </div>
    <div class="right">
      2019年10月27日 17:51:15 星期日
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
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
    background: #3A4854;
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
      line-height: 1.2rem;
      text-align: right;
    }
  }
</style>
