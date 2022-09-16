<template>
   
    <div>
        <h1 v-text="x" ref="title"></h1>
        <button @click="showDOM" ref="btn">点击我查看DOM</button>
        <School ref="sch"/>
    </div>
</template>

<script>
import School from './component/School'

export default {
    components:{
        School,
    },
    data(){
        return {
            x:'欢迎来学习Vue',
        }
    },
    methods: {
        showDOM(){
            console.log(this)
            console.log(this.$refs.title)  //查看DOM元素
            console.log(this.$refs.btn) //查看DOM元素
            console.log(this.$refs.sch) //查看的是子组件的实例对象
        }
    },
}
</script>

<style>

</style>