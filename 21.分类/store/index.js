// 导入 Vuex
import Vuex from 'vuex'

// 导入Vue
import Vue from 'vue'

// 应用Vuex插件
Vue.use(Vuex)

import countOption from './Count'

import personOption from './Person'

export default new Vuex.Store({
    modules: {
        countAbout: countOption,
        personAbout: personOption
    }
})

