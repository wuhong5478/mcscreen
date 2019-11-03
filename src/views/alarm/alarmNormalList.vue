<template>
  <div class="alarmList">
    <div class="title alarmList-title">
      <span>消息通知</span>
      <el-radio-group v-model="selectValue" class="raidoBox">
        <el-radio
          v-for="(item, index) in selectOptions"
          :key="index"
          :label="item.value"
        >{{item.label}}</el-radio>
      </el-radio-group>
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
          <td>
            梅城古镇梅城大楼—3号楼消控室，摄像头视频监控-人员离岗
            <span :style="{color: '#00FFFF'}" @click="showModal(id=1234)">【图片】</span>
          </td>
          <td>【一般隐患】</td>
        </tr>
        <tr>
          <td>todo</td>
          <td>2019-10-27 18:21:23（ID：1234）</td>
          <td>梅城古镇东南南望街西北侧兰州拉面-用电安全器发生火灾故障</td>
          <td>【重大隐患】</td>
        </tr>
      </table>
    </div>
    <el-dialog title="图片" :visible.sync="dialogVisible" width="50%">
      <div class="img-box">
        <img width="100%" height="auto" :src="imgUrl" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "alarmList",
  data() {
    return {
      selectValue: "0",
      selectOptions: [
        {
          label: "全部",
          value: "0"
        },
        {
          label: "火警",
          value: "1"
        },
        {
          label: "隐患",
          value: "2"
        }
      ],
      dialogVisible: false,
      imgUrl: ''
    };
  },
  methods: {
    showModal(url) {
      this.dialogVisible = true;
      this.imgUrl = url;
    }
  }
};
</script>
<style lang="less">
.alarmList {
  position: absolute;
  // z-index: 999;
  left: 0.17rem;
  bottom: 0.1rem;
  right: 30%;
  overflow: hidden;
  height: 3rem;

  .img-box{
    width: 100%;
    height: 300px;
  }

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
