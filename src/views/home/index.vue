<template>
    <div class="home-page">
      <div class="box">
        <a-table
          :columns="columns"
          :row-key="record => record.login.uuid"
          :data-source="data"
          :pagination="pagination"
          :loading="loading"
          @change="handleTableChange"
        >
          <template slot="title" >
            Header
          </template>
          <template slot="footer" >
            Footer
          </template>
          <template slot="name" slot-scope="name"> {{ name.first }} {{ name.last }} </template>
          <template slot="picture" slot-scope="picture">
            <img :src="picture.large" alt="">
          </template>
          <template slot="phone" slot-scope="text">
            <a>{{ text }}</a>
          </template>
        </a-table>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

const queryData = params => {
  return axios.get('https://randomuser.me/api', { params: params })
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '15%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Picture',
    dataIndex: 'picture',
    width: '15%',
    scopedSlots: { customRender: 'picture' }
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    width: '15%',
    // scopedSlots: { customRender: 'phone' }
    customRender: (value, row, index) => {
      const obj = {
        children: value,
        attrs: {}
      }
      if (index === 2) {
        obj.attrs.rowSpan = 2
      }
      // These two are merged into above cell
      if (index === 3) {
        obj.attrs.rowSpan = 0
      }
      if (index === 4) {
        obj.attrs.colSpan = 0
      }
      return obj
    }
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
]
export default {
  name: 'Home',
  components: {},
  props: [],
  data () {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns
    }
  },
  computed: {
  },
  watch: {},
  created () {
    this.fetch()
  },
  methods: {
    handleTableChange (pagination, filters, sorter) {
      console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      })
    },
    fetch (params = {}) {
      this.loading = true
      queryData({
        results: 10,
        ...params
      }).then(({ data }) => {
        console.log(data)
        const pagination = { ...this.pagination }
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200
        this.loading = false
        this.data = data.results
        this.pagination = pagination
      })
    }
  }

}

</script>

<style scoped lang="less">
.home-page {
  background-color: white;
  height: 100%;
}

</style>
