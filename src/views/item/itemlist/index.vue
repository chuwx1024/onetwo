<template>
  <div class="itemlist">
    列表
    <a-table :data-source="itemlist" :columns="columns">
    </a-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: '30%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '年龄',
    dataIndex: 'age'
  },
  {
    title: 'hobby',
    dataIndex: 'hobby'
  }
]
export default {
  name: 'ItemList',
  components: {},
  props: [],
  data () {
    return {
      columns
    }
  },
  computed: {
    ...mapState('Text', ['itemlist'])
  },
  watch: {},
  created () {},
  methods: {}
}

</script>

<style scoped lang="less">
/deep/ .ant-table table{
  background: rgb(222, 184, 233);
  padding: 30px;
}
</style>
