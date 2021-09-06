<template>
  <div class="info-page">
    <p>字典测试</p>
    <p>0 {{ dict.dataStatus[work]}}</p>
    <p>1 {{ dict.dataStatus[job]}}</p>
    <p>2 {{ dict.dataStatus[name]}}</p>
  </div>
</template>

<script>
import { mixin } from '@/components/mixin/index.js'
export default {
  name: 'Ceshi',
  dicts: ['dataStatus', 'addDataPurpose'], // mixin 引入
  mixins: [mixin],
  components: {},
  props: [],
  data () {
    return {
      work: 0,
      job: 1,
      name: 2
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
