<template>
  <div class="item-detail">
    <a-form-model :model="form" :row-key="form.key" >
      <a-form-model-item label="姓名">
        <a-input v-model="form.name" />
      </a-form-model-item>
      <a-form-model-item label="年龄">
        <a-input v-model="form.age" />
      </a-form-model-item>
      <a-form-model-item label="爱好">
      <a-select v-model="form.hobby" placeholder="爱好">
        <a-select-option value="喝酒">
          喝酒
        </a-select-option>
        <a-select-option value="吸烟">
          吸烟
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item>
      <!-- <a-button type="primary" @click="ADD_PERSON(form)"> -->
      <a-button type="primary" @click="submitList">
        新建
      </a-button>
    </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ItemDetail',
  components: {},
  props: [],
  data () {
    return {
      form: {
        name: '',
        age: null,
        hobby: '',
        key: '3'
      }
    }
  },
  computed: {
    ...mapState('Text', ['itemlist'])
  },
  watch: {},
  created () {
    console.log(this.ADD_PERSON)
  },
  methods: {
    ...mapMutations('Text', ['ADD_PERSON']),

    submitList () {
      this.form.key = parseInt(Math.random() * 100000)
      this.ADD_PERSON(this.form)
    }
  }
}

</script>

<style scoped lang="less">
.item-detail {
  padding: 30px;
  background: rgba(136, 68, 68, 0.5);
  .ant-form-item {
    display: flex;
    /deep/ .ant-form-item-control-wrapper {
      width: 60%;
    }
  }
}
</style>
