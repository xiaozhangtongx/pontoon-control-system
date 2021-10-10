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

    <section class="video">
      <router-view />
    </section>
    <section class="setting">
      <Views />
    </section>
  </div>
</template>

<script>
import Leftmenu from '@/layout/Leftmenu'
import Video from '@/components/Video'
import Views from '@/components/Views'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    Leftmenu,
    Video,
    Views,
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
    width: 15vw;
    background-color: #808080;
    border-radius: 10px;
    box-shadow: darkgrey 1px 1px 30px 1px; //边框阴影
  }
  .video {
    width: 52vw;
  }
  .setting {
    width: 30vw;
    background-color: #f0f0f0;
  }
}
</style>