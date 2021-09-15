<template>
  <div class="item-page">项目
    <ItemDetail/>
    <ItemList/>
  </div>
</template>

<script>
import ItemDetail from './itemDetail/index.vue'
import ItemList from './itemlist/index'
export default {
  name: '',
  components: {
    ItemDetail,
    ItemList
  },
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
