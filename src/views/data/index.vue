<template>
  <div class="data-page">
    我是数据的父组件
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  created () {
    console.log(this.$route)
  },
  methods: {}
}

</script>

<style scoped lang="less">
</style>
