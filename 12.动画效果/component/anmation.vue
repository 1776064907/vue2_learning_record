<template>
   <div>
        <button @click="show = !show">显示/隐藏</button>
        <transition name="hello" appear>
        <h1 v-show="show" >你好啊</h1>
        </transition>
   </div>
</template>

<script>
export default {
    name:'anmation',
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
    }
    .hello-enter-active{
        animation: move 0.5s linear;
    }
    .hello-leave-active{
        animation: move 0.5s linear reverse;
    }
    @keyframes move {
        0%{
            transform: translateX(-100%);
        }
        100%{
            transform: translateX(0px);
        }
    }
</style>