import Vue from 'vue'
import Vuex from 'vuex' // 首先安装 npm install vuex
// 将此处的store 所使用的vuex导入main.js中
Vue.use(Vuex)
var store = new Vuex.Store({
  // 存储状态
  state: {
    lists: [] // 加入购物车的商品
  }
})

export default store
