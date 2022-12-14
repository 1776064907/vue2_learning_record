export default {
    namespaced: true,
    actions: {
        jiaOdd(context, val) {
            if (context.state.sum % 2) {
                context.commit('JIA', val)
            }
        },
        jiaWait(context, val) {
            setTimeout(() => {
                context.commit('JIA', val)
            }, 500)
        },


    },
    mutations: {
        JIA(state, val) {
            // console.log(state, val)
            state.sum += val
        },
        JIAN(state, val) {
            state.sum -= val
        },
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}