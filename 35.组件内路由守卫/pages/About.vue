<template>
  <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name:'About',
        /* beforeDestroy() {
          console.log('About组件即将被销毁了')
        }, */
       /*  mounted() {
          console.log('About组件被挂载了',this)
        }, */

        // 通过路由规则，进入该组件时被调用
        beforeRouteEnter (to, from, next) {
          console.log('beforeRouteEnter')
          if (to.meta.isAuth) {
              if (localStorage.getItem('school') === 'atguigu2') {
                  next()
              } else {
                  alert('无权访问')
              }
          } else {
              next()
          }
        },
        // 通过路由规则，离开该组件时被调用
        beforeRouteLeave (to, from, next) {
          console.log('beforeRouteLeave')
            next()
        }
    }
</script>
