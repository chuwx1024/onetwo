<template>
  <div class="point-page">
    <common-slot>
      <span>普通插槽使用</span>
      <span style="color: red">普通插槽使用</span>
    </common-slot>
    <hasName>
      <template #left>
        <a-space>
          <a-button type="primary">Button</a-button>

        </a-space>
      </template>
      <template #right>
        <a-button type="link">
          右边
        </a-button>
      </template>
    </hasName>
    <AreaName>
      <template scope="list">
        {{list}}
      </template>
    </AreaName>
    <div class="detail">
      <div style="padding: 14px 0">
        <span>业务参数</span>
        <a-radio-group
        :options="plainOptions"
        :default-value="value1"
        v-model="value1"
        />
      </div>
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="false"
        bordered
        v-if="value1 === 'key-value'"
      >
        <template #action="text,record,index">
          <a-button
            v-if="showDeleteOption(index)"
            shape="circle"
            icon="minus"
            @click="deleteCurrentData(index)"
          />
        </template>
      </a-table>
      <a-form-model :model="form" v-else>
        <a-form-model-item label="远程数据">
          <a-input v-model="longData"/>
        </a-form-model-item>
        <a-form-model-item label="样式数据">
          <a-input v-model="typeData" type="textarea" />
        </a-form-model-item>

      </a-form-model>
       <a-space style="padding: 14px 0">
          <a-button type="primary">测试</a-button>
          <a-button >重置</a-button>
        </a-space>
    </div>
    <pre v-html="typeData"></pre>
  </div>
</template>

<script>
import CommonSlot from './slot/common.vue'
import hasName from './slot/hasname.vue'
import AreaName from './slot/area.vue'

const data = [
  {
    key: '1',
    datatype: '发送远程数据',
    dataname: 'phoneNum',
    params: 123
  },
  {
    key: '2',
    datatype: '特征数据',
    dataname: 'x0',
    params: 5.65

  },
  {
    key: '',
    datatype: '',
    dataname: '',
    params: null

  }

]
export default {
  name: 'point',
  components: {
    CommonSlot,
    hasName,
    AreaName
  },
  props: [],
  data () {
    return {
      visible: false,
      form: {
        longData: {},
        typeData: {}
      },
      data,
      plainOptions: ['JSON', 'key-value'],
      value1: 'JSON',
      columns: [
        {
          title: '参数类型',
          dataIndex: 'datatype',
          key: 'datatype',
          scopedSlots: { customRender: 'datatype' }

        },
        {
          title: '参数名称',
          dataIndex: 'dataname',
          key: 'dataname',
          // scopedSlots: { customRender: 'dataname' }

          customRender: (value, row, index) => {
            const child = this.$createElement('a-button', {
              domProps: {
                innerHTML: '特征数据'
              },
              style: {
                width: '100%'
              },
              attrs: {
                type: 'primary',
                ghost: true
              },
              on: {
                click: () => {
                  this.addNewData()
                }
              }
            })
            if (index === this.data.length - 1) {
              return {
                children: child,
                attrs: {
                  colSpan: 2
                }
              }
            }
            return <a-input v-model={row.dataname} />
          }

        },
        {
          title: '参数值',
          dataIndex: 'params',
          key: 'params',
          // scopedSlots: { customRender: 'params' }
          customRender: (value, row, index) => {
            if (index === this.data.length - 1) {
              return {
                children: '',
                attrs: {
                  colSpan: 0
                }
              }
            }
            return <a-input v-model={row.params} />
          }

        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      n: 1
    }
  },
  mounted () {},
  computed: {
    longData () {
      const obj = {}
      const { params, dataname } = this.data[0]
      obj[dataname] = Number(params)

      return JSON.stringify(obj)
    },
    typeData () {
      const obj = this.data.reduce((obj, item, index) => {
        if (index !== 0 && index !== this.data.length - 1) {
          const { params, dataname } = item
          obj[dataname] = Number(params)
        }
        return obj
      }, {})
      return JSON.stringify(obj, null, 4)
    }

  },
  watch: {},
  created () {

  },
  methods: {
    showModal () {
      this.visible = true
    },
    addNewData () {
      const length = this.data.length
      const dataname = 'x' + this.n++
      this.data.splice(length - 1, 0, {
        key: '',
        datatype: '',
        dataname: dataname,
        params: parseInt(Math.random() * 10)
      })
    },
    // 不显示删除按钮
    showDeleteOption (index) {
      return index !== 0 && index !== 1 && index !== this.data.length - 1
    },
    // 删除当前值
    deleteCurrentData (index) {
      this.data = this.data.filter((item, i) => {
        return i !== index
      })
    }

  }
}

</script>

<style scoped lang="less">
.point-page {
  background: white;
  padding: 30px;
  .ant-form-item {
    display: flex;
    /deep/ .ant-form-item-control-wrapper {
      width: 80%;
    }
  }
}
.detail {
  padding: 30px 0;
  span {
    margin-right: 40px;
  }
}
</style>
