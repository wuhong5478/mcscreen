<template>
  <div class="fireRecourse">
    <div class="title flex">
      <span>查看应急资源</span>
    </div>
    <div class="content">
      <div class="check-box">
        <div class="label">消防栓:</div>
        <div class="checked">
          <el-checkbox-group v-model="hydrantCheckList">
            <el-checkbox label="500M"></el-checkbox>
            <el-checkbox label="1KM"></el-checkbox>
            <el-checkbox label="1.5KM"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="check-box">
        <div class="label">救助力量:</div>
        <div class="checked">
          <el-checkbox-group v-model="powerCheckList">
            <el-checkbox label="消防中队"></el-checkbox>
            <el-checkbox label="微型消防站"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="check-box">
        <div class="label">救助:</div>
        <div class="checked">
          <el-checkbox-group v-model="recourseCheckList">
            <el-checkbox label="救护车"></el-checkbox>
            <el-checkbox label="医院"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fireRecourse",
  data() {
    return {
      hydrantCheckList: [],
      powerCheckList: [],
      recourseCheckList: []
    };
  }
};
</script>
<style lang="less">
.fireRecourse {
  height: 100%;

  .content {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    .check-box {
      display: flex;
      .el-checkbox__label{
          color: #fff;
      }
      .label {
        flex: 0 0 70px;
        text-align: right;
        margin-right: 10px;
        color: #fff;
      }
    }
  }
}
</style>
