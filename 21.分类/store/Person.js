
import axios from "axios";
import { nanoid } from "nanoid";
export default {
    namespaced: true,
    actions: {
        addpersonWang(context, val) {
            if (val.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', val)
            } else {
                alert('第一个姓必须是王子')
            }
        },
        addsometing(context) {
            axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
                (res) => {
                    const person = { id: nanoid(), name: res.data };
                    context.commit("ADD_PERSON", person);
                },
                (err) => { }
            );
        }
    },
    mutations: {
        ADD_PERSON(state, val) {
            state.personList.unshift(val)
        },

    },
    state: {
        personList: [{ id: '001', name: '张三' }]
    },
    getters: {
        getFirstName(state) {
            return state.personList[0].name
        }
    }
}