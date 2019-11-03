<template>
  <div class="alarmFireList">
    <div class="title alarmList-title">
      <span>触达人员信息</span>
    </div>
    <div class="content alarmList-content">
      <table class="tableList">
        <!-- <tr>
				<th>报警类型</th>
				<th>报警时间</th>
				<th>报警地址</th>
				<th>报警等级</th>
        </tr>-->
        <tr>
          <td>todo</td>
          <td>2019-10-27 18:21:23（ID：1234）</td>
          <td>梅城古镇东南南望街西北侧兰州拉面-用电安全器发生火灾故障</td>
          <td>【重大隐患】</td>
        </tr>
        <tr>
          <td>todo</td>
          <td>2019-10-27 18:21:23（ID：1234）</td>
          <td>梅城古镇梅城大楼—3号楼消控室，摄像头视频监控-人员离岗【图片】</td>
          <td>【一般隐患】</td>
        </tr>
        <tr>
          <td>todo</td>
          <td>2019-10-27 18:21:23（ID：1234）</td>
          <td>梅城古镇东南南望街西北侧兰州拉面-用电安全器发生火灾故障</td>
          <td>【重大隐患】</td>
        </tr>
        <tr>
          <td>todo</td>
          <td>2019-10-27 18:21:23（ID：1234）</td>
          <td>梅城古镇东南南望街西北侧兰州拉面-用电安全器发生火灾故障</td>
          <td>【重大隐患】</td>
        </tr>
        <tr>
          <td>todo</td>
          <td>2019-10-27 18:21:23（ID：1234）</td>
          <td>梅城古镇东南南望街西北侧兰州拉面-用电安全器发生火灾故障</td>
          <td>【重大隐患】</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "alarmFireList",
  data() {
    return {};
  }
};
</script>
<style lang="less">
.alarmFireList {
  position: absolute;
  // z-index: 999;
  left: 0.17rem;
  bottom: 0.1rem;
  right: 30%;
  overflow: hidden;
  height: 3rem;

  .alarmList-title {
    float: left;
    span {
      padding-left: 0 !important;
      display: inline-block;
    }
  }

  .alarmList-content {
    overflow: auto;
    font-size: 0.2rem;
    height: auto;
    padding-top: 0.2rem;
    &::-webkit-scrollbar {
      display: none;
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
        color: white;
        font-size: 0.23rem;
      }
    }
  }
  .raidoBox {
    margin-left: 1rem;
  }
  .raidoBox .el-radio {
    color: white;
    line-height: 0.72rem;
  }
}
.picture {
  color: #23aaf2;
}
</style>
