<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-08 15:36:43
-->
<template>
  <div>
    <a-layout>
      <a-layout-header>
        <Header />
      </a-layout-header>
      <a-layout-content>
        <Content />
      </a-layout-content>
      <a-layout-footer>
        <Footer />
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import Content from '@/layout/Content'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    Header,
    Footer,
    Content,
  },
}
</script>

<style scoped lang='less'>
.ant-layout {
  height: 100vh;
}
.ant-layout-header,
.ant-layout-footer {
  padding: 0;
  background-color: #60a6fb;
}
</style>