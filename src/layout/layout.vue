<template>
  <div class="layout-page">
    <a-layout>
      <!-- left sider----------- -->
      <Sider></Sider>
      <a-layout>
        <!-- top head--------------- -->
        <Head></Head>
        <!-- 2 router view------------ -->
        <a-layout-content class="content">
          <div style="background:#ECECEC; padding:24px; height: 100%">
            <router-view></router-view>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Sider from './sider'
import Head from './head'
export default {
  name: '',
  components: {
    Sider,
    Head
  },
  props: [],
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {}
}

</script>

<style scoped lang="less">
.layout-page {
  height: 100vh;
  a-layout {
    height: 100%;
  }
}
</style>
