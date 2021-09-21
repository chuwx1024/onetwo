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
        />
      </div>
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="false"
        bordered
      >
        <template #action>
          <a-button shape="circle" icon="minus" />
        </template>
        <!-- <template #dataname="text,record,index" >
          <a-input v-if="index !== data.length -1" v-model=record.dataname />
          <a-button v-else style="width: 100%" icon="plus" type="primary" ghost>特征数据</a-button>
        </template> -->
        <!-- <template #params="text,record,index" style="color: red">
          <a-input v-if="index !== 2" v-model=record.params />
        </template> -->
      </a-table>
       <a-space style="padding: 14px 0">
          <a-button type="primary">测试</a-button>
          <a-button >重置</a-button>
        </a-space>
    </div>
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
    params: '123'
  },
  {
    key: '2',
    datatype: '特征数据',
    dataname: 'x0',
    params: '5.65'

  },
  {
    key: '',
    datatype: '',
    dataname: '',
    params: ''

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
                innerHTMl: <a-button style="width: 100%" icon="plus" type="primary" ghost>特征数据</a-button>
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
            return <a-input v-model={row.params} />
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
      ]
    }
  },
  mounted () {
  },
  computed: {},
  watch: {},
  created () {

  },
  methods: {
    showModal () {
      this.visible = true
    },
    addNewData () {
      const length = this.data.length
      this.data.splice(length - 1, 0, {
        key: '',
        datatype: '',
        dataname: '888',
        params: '888'
      })
    }
  }
}

</script>

<style scoped lang="less">
.point-page {
  background: white;
  padding: 30px;
}
.detail {
  padding: 30px 0;
  span {
    margin-right: 40px;
  }
}
</style>
