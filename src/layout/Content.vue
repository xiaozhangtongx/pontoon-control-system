<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-08 16:03:25
-->
<template>
  <div>
    <section>
      <Leftmenu />
    </section>
    <section class="video">2</section>
    <section class="setting">3</section>
  </div>
</template>

<script>
import Leftmenu from '@/layout/Leftmenu'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    Leftmenu,
  },
}
</script>

<style scoped lang='less'>
div {
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  section {
    height: 95%;
    width: 20vw;
    background-color: #808080;
    border-radius: 10px;
  }
  .video {
    width: 50vw;
  }
  .setting {
    width: 28vw;
  }
}
</style>