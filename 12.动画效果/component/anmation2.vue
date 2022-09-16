<template>
   <div>
        <button @click="show = !show">显示/隐藏</button>
        <transition 
        name="hello" 
        :appear="true"
        >
        <h1 v-show="show" >你好啊</h1>
        </transition>
   </div>
</template>

<script>
export default {
    name:'anmation2',
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
    /* 进入的起点 ,离开的终点*/
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }

    /* 离开或进入时的过程 */
    .hello-enter-active,.hello-leave-active{
        transition: 0.5s ease;
    }
    /* 进入的终点,离开的起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }

    /* 离开的起点 */
    /* .hello-leave{
        transform: translateX(0);
    } */

    /* 离开的终点 */
    /* .hello-leave-to{
        transform: translateX(-100%);
    } */
</style>