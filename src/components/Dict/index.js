import Data from './resource/index'
// 定义插件
export const Plugin = {
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          abc: this.$options.dicts,
          dict: {}
        }
      },
      created () {
        if (this.abc instanceof Array) {
          this.jisuan()
        }
        
      },
      methods: {
        jisuan () {
          if (this.abc && this.abc.length) {
              this.abc.forEach(item => {
                Vue.set(this.dict, item, Data[item])
              })
          }
        }
      }
    })
  }
}
