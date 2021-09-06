<template>
  <a-sub-menu
    :key="menuInfo.path"
    v-bind="$props"
    v-on="$listeners"
  >
    <span slot="title">
      <a-icon type="mail" /><span>{{ menuInfo.meta.title }}</span>
    </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item
        v-if="!item.children"
        :key="item.path"
        :title="item.path"
      >
        <a-icon type="pie-chart" />
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
      <SubMenu v-else :key="item.key" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>

<script>
import { Menu } from 'ant-design-vue'
export default {
  name: 'SubMenu',
  isSubMenu: true,
  components: {},
  props: {
    ...Menu.SubMenu.props,
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
  }
}

</script>

<style scoped lang="less">
</style>
