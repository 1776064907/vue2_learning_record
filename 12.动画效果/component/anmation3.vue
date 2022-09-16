<template>
   <div>
        <button @click="show = !show">显示/隐藏</button>
        <transition-group 
        name="animate__animated animate__bounce" 
        :appear="true"
        enter-active-class="animate__swing"
		leave-active-class="animate__backOutUp"
        >
        <h1 v-show="!show" key="1">你好啊</h1>
        <h1 v-show="show" key="2">尚硅谷</h1>
        </transition-group>
   </div>
</template>

<script>
import 'animate.css'
export default {
    name:'anmation3',
    data() {
        return {
            show:true
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: orange;
        /* transition: 0.5s ease; */
    }
    
</style>