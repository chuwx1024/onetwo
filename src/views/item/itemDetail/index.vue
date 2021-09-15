<template>
  <div class="item-detail">
    详情
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ItemDetail',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['itemlist'])
  },
  watch: {},
  created () {},
  methods: {}
}

</script>

<style scoped lang="less">
</style>
