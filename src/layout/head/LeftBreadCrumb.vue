<template>
    <a-breadcrumb class="bread-crumb-container">
        <a-breadcrumb-item
            v-for="(item, index) in layerList"
            :key="item.path"
        >
            <component
                :is="index !== layerList.length - 1 ? 'router-link' : 'span'"
                :to="item.path"
            >
                {{ item.meta.title}}
            </component>
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script>
export default {
  name: 'BreadCrumb',
  computed: {
    layerList () {
      const list = this.$route.matched.filter(item => item.meta && item.meta.title)
      return list
    }
  }
}
</script>

<style lang='less' scoped>
   .bread-crumb-container {
       display: inline-block;
       padding-bottom: 30px;
   }
</style>
