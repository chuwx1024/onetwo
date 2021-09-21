<template>
  <div class="login-page">
    <a-row>
      <a-col :span="10">
        <section class="login-left">
        </section>
      </a-col>
      <a-col :span="14">
        <section class="login-right">
          <a-form-model ref="loginForm" :model="form" :rules="rules"  class="login-form" >
            <a-form-model-item  class="welcome">
              <h2>星云隐私计算平台</h2>
              <h2>欢迎登录</h2>
            </a-form-model-item>
            <a-form-model-item  prop="mobile" >
              <a-input ref="name" v-model="form.mobile" place-holder="用户名"  >
                <svg slot="prefix" class="icon" aria-hidden=“true” >
                  <use xlink:href="#icon-custom-user"></use>
                </svg>
              </a-input>
            </a-form-model-item>
            <a-form-model-item  prop="code" >
              <a-input-password v-model="form.code" placeholder="密码" >
                <svg slot="prefix" class="icon" aria-hidden=“true” >
                  <use xlink:href="#icon-password"></use>
                </svg>
              </a-input-password>
            </a-form-model-item>
            <a-form-model-item   class="login-option" >
              <a-button type="primary" block @click="onsubmit('loginForm')">
                登录
              </a-button>
            </a-form-model-item>
          </a-form-model>
          <p class="page-footer">
            服务协议  |  帮助中心  |  用户手册    版权所有 © 2021 深圳致星科技有限公司
          </p>
        </section>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { login } from '@/api/login'
import { saveData } from '@/utils/Cookie'
import { mapMutations } from 'vuex'
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {
      form: {
        mobile: '13911111111',
        code: '246810'
      },
      rules: {
        mobile: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 11, message: '6-11位数字', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    ...mapMutations('User', ['SET_USER']),
    onsubmit (formName) {
      try {
        this.$refs[formName].validate(async valid => {
          if (valid) {
            const info = {
              mobile: this.form.mobile,
              code: this.form.code
            }
            const { data } = await login(info)
            // 存储到公共区域
            // this.$store.commit('setUser', data.data)
            this.SET_USER({ amount: data.data })
            saveData('Authorization', data.data)
            this.$message.success('登录成功')
            this.$router.push('/home')
          }
        })
      } catch (err) {
        this.$message.error('登录失败' + err)
      }
    }
  }
}

</script>

<style scoped lang="less">
.login-page {
  height: 100vh;
  .login-left {
    height: 100vh;
    background: url('../../assets/img/login_bg.png');
    background-size: cover;
    padding: 49px 65px;
  }
  .login-right {
    height: 100vh;
    width: 100%;
    position: relative;
    .login-form {
      width: 50%;
      height: 50%;
      margin: auto ;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      .login-option {
        padding-top: 16px;
      }
      .welcome {
        font-size: 20px;
        h2 {
          line-height: 34px;
        }
      }
    }
    p {
      position: absolute;
      bottom: 10px;
      width: 100%;
      text-align: center;
    }
  }
}
</style>
