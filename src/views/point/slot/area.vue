<template>
  <div class="area">
    <h3>作用域插槽</h3>
    <slot :list="list"></slot>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {
      list: ['1', '2', '3']
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {}
}

</script>

<style scoped lang="less">
</style>
