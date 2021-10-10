<!--
 * @Description: 
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-10 09:04:51
-->
<template>
  <div class="view">
    <h1>当前时间:<span>{{newDate}}</span></h1>
    <section class="s2">
      <li>
        <h1>实时定位</h1>
        <p>经度: <span>{{lat}}</span></p>
        <p>纬度：<span>{{lng}}</span></p>
        <a-row type="flex" justify="space-around">
          <a-col>
            <a-button type="primary" @click="fun4">刷新定位</a-button>
          </a-col>
          <a-col>
            <a-popconfirm title="你确定要取消该设备的定位吗?" ok-text="确定" cancel-text="取消" @confirm="confirm"
              @cancel="cancel">
              <a-button type="danger">取消定位</a-button>
            </a-popconfirm>

          </a-col>
        </a-row>
      </li>
      <li>
        <h1>设备连接</h1>
        <p><label>设备编号：</label> <select name="" style="border: none">
            <option value="device1">device1</option>
            <option value="device2">device2</option>
            <option value="device3">device3</option>
            <option value="device4">device4</option>
          </select>
        </p>
        <p>设备状态：<span style="background:yellow">运行</span></p>
        <a-row type="flex" justify="space-around">
          <a-col>
            <a-button type="primary" @click="fun5">扫描设备</a-button>
          </a-col>
          <a-col>
            <a-button type="danger" style="background:green;border:none" @click="fun6">连接设备
            </a-button>
          </a-col>
        </a-row>
      </li>
    </section>
    <section class="s3">
      <li>
        <h1>接口位置监测</h1>
        <p>
          <a-input-group compact>
            <a-input style="width: 60%" default-value="相对距离" />
            <a-input style="width: 30%" default-value="5cm" />
          </a-input-group>
        </p>
        <p>
          <a-input-group compact>
            <a-input style="width: 60%" default-value="水平相对距离" />
            <a-input style="width: 30%" default-value="3cm" />
          </a-input-group>
        </p>
        <p>
          <a-input-group compact>
            <a-input style="width: 60%" default-value="垂直相对距离" />
            <a-input style="width: 30%" default-value="4cm" />
          </a-input-group>
        </p>

      </li>
      <li>
        <h1>接口连接控制</h1>
        <p>
          <label>水平移动 </label>
          <a-input-number id="inputNumber" /> cm
        </p>
        <p>
          <label>垂直移动 </label>
          <a-input-number id="inputNumber" /> cm
        </p>

        <a-row type="flex" justify="space-around">
          <a-col>
            <a-button type="primary" style="background:#0C170D;border:none">暂停连接</a-button>
          </a-col>
          <a-col>
            <a-button type="danger" style="background:#FF7400;border:none">继续连接</a-button>
          </a-col>
        </a-row>
      </li>
    </section>
    <section>
      <li>
        <h1>设备电量监控</h1>
        <a-row type="flex" justify="space-around">
          <a-col>
            设备当前电量：<span style="background:#5686BA">80%</span>
          </a-col>
          <a-col>
            设备使用时间：<span style="background:#5686BA">8h</span>
          </a-col>
        </a-row>
      </li>
    </section>
    <section>
      <li>
        <h1>电磁铁状态监控</h1>
        <a-row type="flex" justify="space-around">
          <a-col>
            电磁体状态：<span style="background:#E9FF00">放电</span>
          </a-col>
          <a-col>
            电磁铁电流大小：
            <input type="text" value="0.00" style="width:30px;border: none"> A
          </a-col>
        </a-row>
      </li>
    </section>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      newDate: new Date(),
      lng: '28.710°N',
      lat: '105.140°E',
    }
  },
  methods: {
    fun4() {
      this.lng = '28.710°N'
      this.lat = '105.140°E'
      return this.$message.success('定位刷新成功')
    },
    confirm(e) {
      this.lng = 'null'
      this.lat = 'null'
      this.$message.success('该设备的定位已经取消')
    },
    cancel(e) {
      this.$message.error('设备定位取消成功')
    },
    fun5() {
      return this.$message.success('设备扫描成功')
    },
    fun6() {
      return this.$message.success('设备连接成功')
    },
  },
  components: {},
  // 挂载时间
  mounted() {
    let that = this
    this.timer = setInterval(function () {
      that.newDate = new Date().toLocaleString()
    })
  },
  // 销毁时清除计时器
  beforeDestroy: function () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
}
</script>

<style scoped lang='less'>
.view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    font-family: '楷体';
    font-size: 24px;
    font-weight: 800;
    margin: 0;
    span {
      font-size: 22px;
      color: rgb(40, 39, 41);
      background-color: rgb(59, 236, 74);
    }
  }
  section {
    width: 94%;
    h1 {
      font-size: 20px;
      text-align: center;
    }
    li {
      border: 1px solid rgba(85, 85, 85, 0.2);
      border-radius: 7px;
      padding: 10px 0;
      p {
        padding-left: 20px;
      }
    }
  }
  .s2,
  .s3 {
    border: none;
    display: flex;
    justify-content: space-around;
    li {
      width: 46%;
      p {
        padding-left: 10px;
      }
    }
  }
  .s3 {
    li {
      padding: 0;
    }
  }
}
</style>