<template>
    <div class="content">
      <div class="search-content">
        <Filter-grid>
          <template slot=left>
            <a-form-model :model="filter" layout="inline">
              <a-form-model-item label="数据名称">
                <a-input v-model="filter.name"/>
              </a-form-model-item>

               <a-form-model-item label="样式" >
                <a-select v-model="filter.age"  placeholder="样式" style="width: 120px">
                  <a-select-option v-for="item in channels" :key="item.id" :value="item.name">
                    {{ item.name }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>

              <a-form-model-item label="添加时间">
                <a-date-picker
                  :allowClear=false
                  :disabled-date="disabledEndDate"
                  v-model="startValue"
                  format="YYYY-MM-DD"
                  placeholder="开始日期"
                  :showToday=true
                  @openChange="handleStartOpenChange"

                />
                <span style="padding: 0 8px">至</span>
                <a-date-picker
                  :allowClear=false
                  v-model="endValue"
                  :disabled-date="disabledEndDate"
                  format="YYYY-MM-DD"
                  placeholder="结束日期"
                  :showToday=true
                  :open="endOpen"
                  @openChange="handleEndOpenChange"
                />
              </a-form-model-item>
            </a-form-model>
          </template>
          <template #right>
            <a-button type="primary" >查询</a-button>
            <a-button type="default">重置</a-button>
          </template>
        </Filter-grid>
      </div>

      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="pagination"
        :row-key="record => record.art_id"
        @change="handleTableChange"
      >
        <template slot="title" >
            <HeadGrid>
              <template #left>
                <h2>{{ $route | headTitle }}</h2>
              </template>
              <template #right>
                <a-button type="primary" icon="plus" @click="$router.push({
                  name: 'DataDetail'
                })">
                  新增
                </a-button>
              </template>
            </HeadGrid>
        </template>
        <template slot="headImg" slot-scope="text">
          <a-avatar shape="square" size="large" icon="user" :src="text.images[0]" />
        </template>
        <template slot="time" slot-scope="text">
          {{ text.pubdate | renderTime }}
        </template>
        <template #action="text, record"  >
          <a-button
            type="link"
            style="padding: 0"
            align="left"
            @click="$router.push({
              name: 'DataDetail',
              params:{
                articleId: record.art_id
              }
            })"
          >
            详情
          </a-button>
        </template>
      </a-table>

    </div>
</template>

<script>
import FilterGrid from '@/components/FilterGrid.vue'
import HeadGrid from '@/components/HeadGrid.vue'
import { getChannels } from '@/api/channels'
import { getArticles } from '@/api/article'

const columns = [
  {
    title: '姓名',
    dataIndex: 'aut_name',
    ellipsis: true,
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '题目',
    ellipsis: true,
    dataIndex: 'title'
  },
  {
    title: '头像',
    dataIndex: 'cover',
    scopedSlots: { customRender: 'headImg' }
  },
  {
    title: '时间',
    dataIndex: 'pubdate',
    scopedSlots: { customRender: 'time' }
  },
  {
    title: '点赞',
    dataIndex: 'like_count',
    scopedSlots: { customRender: 'like' }
  },
  {
    title: '操作',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  name: 'DataList',
  components: {
    FilterGrid,
    HeadGrid
  },
  data () {
    return {
      columns,
      data: [],
      filter: {
        name: 'hhhh',
        channel: '',
        startDate: '',
        endDate: ''
      },
      channels: [],
      timestamp: Date.now(),
      startValue: null,
      endValue: null,
      endOpen: false,
      pagination: {
        current: 1,
        pageSizeOptions: ['10', '20', '30'],
        pageSize: 10,
        total: 50,
        showSizeChanger: true,
        showQuickJumper: true

      }
    }
  },
  created () {
    this.getChannels()
    this.getArticles()
  },
  computed: {
  },
  methods: {
    goToDetail () {
      this.$router.push({ name: 'DataDetail' })
    },
    // channels
    async getChannels () {
      const { data } = await getChannels()
      this.channels = data.data.channels
    },
    // 日期
    disabledStartDate (startValue) {
      const endValue = this.endValue
      if (!startValue || !endValue) {
        return false
      }
      return startValue.valueOf() > endValue.valueOf()
    },
    disabledEndDate (endValue) {
      const startValue = this.startValue
      if (!endValue || !startValue) {
        return false
      }
      return startValue.valueOf() >= endValue.valueOf()
    },
    handleStartOpenChange (open) {
      if (!open) {
        this.endOpen = true
      }
    },
    handleEndOpenChange (open) {
      this.endOpen = open
    },
    // 获取数据
    async getArticles () {
      const { data } = await getArticles({
        channel_id: 0,
        timestamp: this.timestamp,
        with_top: 1
      })
      // console.log(res)

      this.data = data.data.results
      this.timestamp = data.data.pre_timestamp
    },
    //  分页改变
    handleTableChange (pagination) {
      console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      // 获取新数据
      this.getArticles()
    },
    goDetail (artcileId) {
      this.$router.push(`/article/${artcileId}`)
    }
  }
}

</script>

<style scoped lang="less">
.content {
  // background: violet;
  .search-content {
    padding: 30px;
    margin-bottom: 12px;
    background: white;
  }
  .ant-table-wrapper {
    background: white;
    padding: 30px;
  }
}

</style>
