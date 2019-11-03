<template>
  <div class="fireInfor">
    <div class="title flex">
      <p class="size">火情警报</p>
    </div>
    <div class="content">
      <div class="infor-item" v-for="(item, index) in infor" :key="index">
        <div class="infor-left">
          <span class="text">{{item.timestamp}}</span>
        </div>
        <div class="infor-right">
          <div class="item-left">
            <span class="spot"></span>
            <span class="line"></span>
          </div>
          <div class="item-right">
            <p class="label">{{item.label}}</p>
            <ul class="desc">
                <li v-if="item.content.type">事件类型: {{item.content.type}}</li>
                <li v-if="item.content.origin">火情来源: {{item.content.origin}}</li>
                <li v-if="item.content.desc">火灾描述: {{item.content.desc}}</li>
                <li v-if="item.content.confirm">确认人员: {{item.content.confirm}}</li>
                <li v-if="item.content.property">物业人员: {{item.content.property}}</li>
                <li v-if="item.content.device">报警设备: {{item.content.device}}</li>
                <li v-if="item.content.position">报警位置: {{item.content.position}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fireInfor",
  data() {
    return {
      infor: [
        {
          label: "火情现场信息",
          content: {
            type: "火情确认",
            origin: "设备报警",
            desc: "已经联系消防室和微消防站人员，即将到达现场，目前已经做了人员疏散。"
          },
          timestamp: "00：05：00"
        },
        {
          label: "火灾确认",
          content: {
            confirm: "陈某某",
            property: "陈某某"
          },
          timestamp: "00：03：00"
        },
        {
          label: "火灾报警",
          content: {
            device: "独立式烟雾探测器",
            position: "梅城古镇1号街区西南角"
          },
          timestamp: "00：00：00"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.fireInfor {
  height: 100%;
  .size {
    font-size: 2em;
  }
  .content {
    .infor-item {
      display: flex;
      .infor-left {
        flex: 0 0 1;
        .text {
          color: rgb(0, 255, 255);
          white-space:nowrap;
          margin-right: 10px;
        }
      }
      .infor-right {
        flex: 0 0 2;
        display: flex;
        .item-left {
          .spot {
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #5583fb;
          }
          .line {
            display: block;
            width: 4px;
            height: 100%;
            background: #af75e9;
            margin-left: 6px;
          }
        }
        .item-right {
          .label {
            color: rgb(0, 255, 255);
            margin: 0 0 10px 10px;
          }
          .desc{
              color: #fff;
              margin: 0 0 10px 10px;
              li{
                  word-break: break-all;
                   margin: 0 0 10px 0px;
              }
          }
        }
      }
    }
    .infor-item:last-child{
        .infor-right{
            .item-left{
               .line{
                   display: none;
               } 
            }
        }
    }
  }
}
</style>
