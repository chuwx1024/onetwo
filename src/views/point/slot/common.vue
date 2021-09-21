<template>
  <div class="common-slot">
    <h2>普通插槽</h2>
    <slot></slot><br/>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CommonSlot',
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
</style>
