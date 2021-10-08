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
        <a-button type="primary" icon="user" />

      </a-col>
      <a-col>
        <a-button type="primary" style="background:#F7D674;border:none" icon="setting" />

      </a-col>
      <a-col>
        <a-button type="danger" icon="close" />

      </a-col>

    </a-row>
    <section>
      <h1>设备状态</h1>
      <li>摄像头</li>
      <li>毫米雷达</li>
      <li>激光雷达</li>
      <li>传感器</li>
    </section>
    <section>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </section>
    <section>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </section>

  </div>

</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang='less'>
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
section {
  width: 100%;
  height: 28%;
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  color: aliceblue;
  h1 {
    color: #fff;
    font-size: 26px;
    width: 80%;
    border-bottom: 2px solid #fff;
    text-align: center;
  }
}
.ant-row-flex-space-between {
  width: 70%;
}
.ant-btn-icon-only {
  width: 66px;
}
</style>