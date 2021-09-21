<template>
  <div class="item-page">项目
    <h4>{{ listLength }} 条数据</h4>
    <ItemDetail/>
    <ItemList/>
  </div>
</template>

<script>
import ItemDetail from './itemDetail/index.vue'
import ItemList from './itemlist/index'
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters('Text', ['listLength'])
  },
  watch: {},
  created () {},
  methods: {}
}

</script>

<style scoped lang="less">
</style>
