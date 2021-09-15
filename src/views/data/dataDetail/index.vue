<template>
    <div class="dataDetail">
        <a-form-model :form="form" layout="horizontal" >
            <a-form-model-item label="姓名">
                <a-input v-model="form.aut_name" />
            </a-form-model-item>
            <a-form-model-item label="题目">
                <a-input v-model="form.title" />
            </a-form-model-item>
            <a-form-model-item label="头像">
                <a-avatar shape="square" size="large" icon="user"  :src="form.aut_photo"/>
            </a-form-model-item>
            <a-form-model-item label="Activity time">
                <a-date-picker
                    v-model="form.pubdate"
                    type="date"
                    style="width: 100%;"
                    :allowClear="false"
                    :disabled-date="disabledDate"
                />
            </a-form-model-item>
            <a-form-model-item label="Activity form">
                <a-input v-model="form.content"  type="textarea" />
            </a-form-model-item>
            <a-form-model-item >
                <a-button type="primary" >
                    新增
                </a-button>
                <a-button style="margin-left: 10px;">
                    取消
                </a-button>
                </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
import { getArticleDetail } from '@/api/article'
import moment from 'moment'

export default {
  name: 'dataDetail',
  components: {},
  props: {
    articleId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      form: {
        aut_name: '',
        title: '',
        aut_photo: '',
        content: '',
        date: '',
        pubdate: ''

      }
    }
  },
  computed: {

  },
  watch: {},
  created () {
    this.getArticle()
  },
  methods: {
    async getArticle () {
      const { data } = await getArticleDetail(this.articleId)
      this.form = data.data
    },
    disabledDate (current) {
      // Can not select days before today and today
      console.log(current)
      return current && current > moment().endOf('day')
    }
  }
}

</script>

<style scoped lang="less">
.dataDetail {
    padding: 30px;
    background: yellowgreen;
    .ant-form-item {
        width: 60%;
    }
}

</style>
