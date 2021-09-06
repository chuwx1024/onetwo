<template>
  <div class="top-head">
    <a-layout-header class="headCard">
      <!-- <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
      </a-breadcrumb> -->
      <left-bread-crumb/>
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <a-avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <span style="margin-left: 6px">666</span>
        </a>
        <a-menu slot="overlay">
          <a-menu-item key="0">
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">修改密码</a>
          </a-menu-item>
          <a-menu-item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">退出</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-layout-header>
  </div>
</template>

<script>
import LeftBreadCrumb from './LeftBreadCrumb.vue'
export default {
  name: 'Head',
  components: {
    LeftBreadCrumb
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
.top-head {
  header {
    background: white;
    vertical-align: middle;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: #999;
      .ant-avatar {
        vertical-align: text-bottom;
      }
    }
  }
}

</style>
