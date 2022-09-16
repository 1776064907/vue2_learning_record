// 导入 Vuex
import Vuex from 'vuex'

// 导入Vue
import Vue from 'vue'

// 应用Vuex插件
Vue.use(Vuex)

const actions = {
    /* jia(context,val) {
        console.log(context,val)
        context.commit('JIA',val)
    },
    jian(context, val) {
        context.commit('JIAN',val)
    }, */
    jiaOdd(context, val) {
        if (context.state.sum % 2) {
            context.commit('JIA', val)
        }
    },
    jiaWait(context, val) {
        setTimeout(() => {
            context.commit('JIA', val)
        },500)
    }
}

const mutations = {
    JIA(state,val) {
        // console.log(state, val)
        state.sum += val
    },
    JIAN(state,val) {
        state.sum -= val
    }
}

const state = {
    sum:0
}

const getters = {
    bigSum(state) {
        return state.sum*10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

