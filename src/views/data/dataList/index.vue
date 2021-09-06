<template>
    <div>
        <div>
          我是数据列表
        </div>
        <div>
          <a-button @click="goToDetail">点我去详情</a-button>
        </div>
        <div>
          <router-link to="/data/dataDetail"><a-button>我也可以</a-button></router-link>
        </div>
        <div>
          <router-link :to="{ path:'/data/dataDetail' }"><a-button>我也可以</a-button></router-link>
        </div>
        <div>
          <router-link :to="{ name:'DataDetail' }"><a-button>我也可以</a-button></router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'DataList',
  methods: {
    goToDetail () {
      this.$router.push({ name: 'DataDetail' })
    }
  }
}

</script>
