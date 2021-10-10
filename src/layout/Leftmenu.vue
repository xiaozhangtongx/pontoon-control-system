<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-08 16:19:21
-->
<template>
  <div class="left">
    <a-row type="flex" justify="space-between">
      <a-col>
        <a-tooltip placement="top">
          <template slot="title">
            <span>用户中心</span>
          </template>
          <a-button type="primary" icon="user" />
        </a-tooltip>
      </a-col>
      <a-col>
        <a-tooltip placement="top">
          <template slot="title">
            <span>设置</span>
          </template>
          <a-button type="primary" style="background:#F7D674;border:none" icon="setting" />
        </a-tooltip>
      </a-col>
      <a-col>
        <a-tooltip placement="top">
          <template slot="title">
            <span>退出</span>
          </template>
          <a-button type="danger" icon="close" @click="$router.push('./1')" />
        </a-tooltip>
      </a-col>
    </a-row>
    <section>
      <h1>设备状态监测</h1>
      <li @click="fun1">
        <a-icon type="camera" /> 摄像头
      </li>
      <li @click="fun2">
        <my-icon type="icon-leida1" /> 毫米波雷达
      </li>
      <li @click="fun3">
        <a-icon type="thunderbolt" /> 激光雷达
      </li>
      <li @click="fun4">
        <my-icon type="icon-shuiweichuanganqi" /> 压力传感器
      </li>
    </section>
    <section>
      <h1>设备连接监测</h1>
      <li @click="$router.push('./2')">
        <my-icon type="icon-lianjie" /> 设备初对准
      </li>
      <li @click="$router.push('./3')">
        <my-icon type="icon-chongdian" /> 连接杆对接
      </li>
      <li @click="$router.push('./4')">
        <my-icon type="icon-shexiangtou" /> 单体对接
      </li>
    </section>
    <section>
      <h1>联系与帮助</h1>
      <li>
        <Fun4 />
      </li>
      <li>
        <Fun5 />
      </li>
      <li>
        <Fun7 />
      </li>
    </section>
  </div>
</template>

<script>
import Fun4 from '@/components/Fun4'
import Fun5 from '@/components/Fun5'
import Fun7 from '@/components/Fun7'
export default {
  name: '',
  data() {
    return {}
  },
  components: {
    Fun4,
    Fun5,
    Fun7,
  },
  methods: {
    fun1() {
      return this.$message.success('摄像头状态正常')
    },
    fun2() {
      return this.$message.success('毫米雷达状态正常')
    },
    fun3() {
      return this.$message.success('激光雷达状态正常')
    },
    fun4() {
      return this.$message.success('压力传感器状态正常')
    },
  },
}
</script>

<style scoped lang="less">
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
section {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // border: solid 1px black;
  color: aliceblue;
  h1 {
    color: #fff;
    font-size: 22px;
    width: 80%;
    border-bottom: 2px solid #fff;
    text-align: center;
    font-family: '楷体';
  }
  li {
    width: 80%;
    font-size: 16px;
    // padding-left: 10%;
    text-align: center;
    cursor: pointer;
  }
}
.ant-row-flex-space-between {
  width: 70%;
}
.ant-btn-icon-only {
  width: 48px;
}
</style>
