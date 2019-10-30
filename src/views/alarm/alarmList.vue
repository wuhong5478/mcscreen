<template>
  <div class="alarmList">
    <div class="title alarmList-title">
      <span>消息</span>
      <el-radio-group v-model="selectValue" class="raidoBox">
        <el-radio v-for="(item, index) in selectOptions" :key="index" :label="item.value">{{item.label}}</el-radio>
      </el-radio-group>
    </div>
    <div class="content alarmList-content">
    </div>
  </div>
</template>
<script>
export default {
  name: 'alarmList',
  data(){
    return{
      selectValue: '0',
      selectOptions: [{
        label: '全部',
        value: '0'
      }, {
        label: '火警',
        value: '1'
      }, {
        label: '隐患',
        value: '2'
      }],
    }
  }
};
</script>
<style lang="less">

  .alarmList {
    position: absolute;
    left: 24%;
    right: 24%;
    bottom: .1rem;
    overflow: hidden;
    height: 19.5%;

    .alarmList-title {
      width: 45% !important;
      display: flex;
      justify-content: space-between;
      span {
        padding-left: 0 !important;
        display: inline-block;
      }
    }

    .alarmList-content {
      overflow: auto;
      font-size: .2rem;
      height: auto;
      padding-top: 0.2rem;

      p {
        display: inline-block;
        line-height: .36rem;
        vertical-align: bottom;
      }

      p.left {
        width: 85%;
        text-align: left;
        .icon {
          width: .22rem;
          height: .36rem;
          display: inline-block;
          background-size: 100% auto !important;
          padding-right: 0;
          vertical-align: bottom;
        }
      }
      p.center {
        width: calc(20% - .1rem);
        padding-left: .1rem;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p.right {
        width: 15%;
        text-align: right;
        vertical-align: middle;
      }
      span.devName {
        color: #23AAF2;
        cursor: pointer;
      }
      span.devName:hover {
        text-decoration: underline;
        cursor: pointer;
      }
      span.devName1:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .raidoBox .el-radio {
      // margin-left: .2rem;
      line-height: .72rem;
    }
  }
  .picture{
    color:#23AAF2;
  }
</style>
