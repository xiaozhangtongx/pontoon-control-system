<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-10 17:16:14
-->
<template>
  <div>
    <li @click="showModal">
      <my-icon type="icon-fankui" /> 反馈建议
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
      <a-textarea placeholder="请输入你的意见" :auto-size="{ minRows: 3, maxRows: 5 }" />
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
