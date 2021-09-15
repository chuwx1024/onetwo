<template>
  <div class="filter-grid">
    <div class="search-form">
      <slot name="left"></slot>
    </div>
    <div class="search-btns">
      <a-space>
        <slot name="right"></slot>
      </a-space>
    </div>
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
  created () {},
  methods: {}
}

</script>

<style scoped lang="less">
.filter-grid {
  display: flex;
  .search-form {
    flex: 1;
  }
  .search-btns {
    width: fit-content;
  }
}
</style>
