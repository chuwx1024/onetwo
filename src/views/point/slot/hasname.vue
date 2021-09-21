<template>
  <div class="has-name">
    <h2>具名插槽</h2>
    <div class="hehe">
      <slot name="left" class="left" ></slot>
      <slot name="right"  class="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hasName',
  components: {},
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
.hehe {
  display: flex;
  justify-content: space-between;
  .left {
    flex: 1;
  }
  .right {
    width: fit-content;
  }
}
</style>
