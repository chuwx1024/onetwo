<template>
   <div class="left-sider">
    <a-layout-sider>
      <div class="sider-head" >
        计算平台
      </div>
      <a-menu
        :selectedKeys="highLightArrs"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
        @click="toDirection"
      >
        <template v-for="item in list">
          <a-menu-item v-if="!item.children || item.children.length === 0" :key="item.path">
            <a-icon type="pie-chart" />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
          <SubMenu
            v-else
            :key="item.path"
            :menu-info="item"
            @slectSon="toDirection"
          />
        </template>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import { routes } from '../../router/index'
// 引入子组件
import SubMenu from './he.vue'

export default {
  name: 'Sider',
  components: {
    SubMenu
  },
  props: [],
  data () {
    return {
      collapsed: false,
      getlist: routes[0].children,
      list: [],
      highLightArrs: []
    }
  },
  watch: {
    '$route.fullPath': {
      handler () {
        this.highLightArrs = []
        this.$route.matched.forEach(item => {
          this.highLightArrs.push(item.path)
        })
      },
      immediate: true
    }
  },
  created () {
    this.list = this.listData(this.getlist)
    console.log(this.$route)
  },
  methods: {
    toDirection (item) {
      this.$router.push(item.key)
    },
    listData (arr) {
      const list = arr.filter(item => {
        // if (!item.hidden && !item.children) {
        //   return item
        // } else if (!item.hidden && item.children) {
        //   const arr = this.listData(item.children)
        //   if (arr.length) {
        //     item.children = this.listData(item.children)
        //   } else {
        //     delete item.children
        //   }
        //   return item
        // }
        if (!item.hidden) {
          if (item.children) {
            item.children = this.listData(item.children)
          }
          return item
        }
      })
      return list
    }
  }
}

</script>

<style scoped lang="less">
.left-sider {
  /deep/ .ant-layout-sider {
    height: 100vh;
    background-color: #0c2154;
  }
  .sider-head {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding-left: 16px;
    color: white;
  }
  .ant-menu {
    background-color: #0c2154;
    color: rgba(255, 255, 255, 0.65);
  }
}
</style>
