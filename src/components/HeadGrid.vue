<template>
  <div class="head_grid">
    <div class="leftTitle">
      <slot name="left"></slot>
    </div>
    <div class="rightOption">
      <slot name="right"></slot>
    </div>

  </div>

</template>

<script>
export default {
  name: 'headGrid',
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
.head_grid {
  display: flex;
  .leftTitle {
    flex: 1;
  }
  .rightOption {
    width: fit-content;
  }
}
</style>
