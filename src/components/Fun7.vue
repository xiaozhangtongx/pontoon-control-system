<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-10 17:16:14
-->
<template>
  <div>
    <li @click="showModal">
      <my-icon type="icon-wenti" /> 遇到问题
    </li>
    <a-modal v-model="visible" on-ok="handleOk">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">
          返回
        </a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          确定
        </a-button>
      </template>
      <p>你可以通过这几个方式联系我们，并把你所遇到的困难截图发给我们</p>
      <p>我们的联系电话:15445678981</p>
      <p>我们的QQ群:123456789</p>
      <p>我们的微信群:1234561</p>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      visible: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.loading = true
      setTimeout(() => {
        this.visible = false
        this.loading = false
      }, 3000)
    },
    handleCancel(e) {
      this.visible = false
    },
  },
}
</script>
