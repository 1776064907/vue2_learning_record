export default {
    install(Vue,x,y,z) {
        // console.log(Vue)  //返回的是一个 Vue构造函数

        Vue.filter('mySlice', function (val) {
            return val.slice(0,4)
        })

        Vue.directive('fbind', {
            bind(ele,data) {
                ele.value = data.value
            },
            inserted(ele, data) {
                ele.focus()
            },
            update(ele, data) {
                ele.value = data.value
            },
        })

        Vue.prototype.hello = () => {
            alert('你好啊')
        }

        console.log(x, y, z) //1 23 4
    }
}