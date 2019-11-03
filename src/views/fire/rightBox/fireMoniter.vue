<template>
  <div class="fireMoniter">
    <div class="title flex">
      <span>视频监控</span>
    </div>
    <div class="content">
      <div class="video-box" v-for="(item, index) in videoList" :key="index">
        <div class="label">{{item.label}}:</div>
        <div class="video">
          <video width="100%" height="100%" src></video>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fireMoniter",
  data() {
    return {
      videoList: [
        {
          label: "监控位置1",
          url: "https://www.baidu.com"
        },
        {
          label: "监控位置2",
          url: ""
        },
        {
          label: "监控位置3",
          url: ""
        },
        {
          label: "监控位置4",
          url: ""
        },
        {
          label: "监控位置5",
          url: ""
        },
        {
          label: "监控位置6",
          url: ""
        }
      ]
    };
  }
};
</script>
<style lang="less">
.fireMoniter {
  height: 100%;

  .content {
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .video-box {
      display: flex;
      margin-bottom: 10px;
      .label {
        flex: 0 0 70px;
        text-align: right;
        margin-right: 10px;
        color: #fff;
      }
      .video {
        width: 160px;
        height: 120px;
        background: #fff;
      }
    }
  }
}
</style>
