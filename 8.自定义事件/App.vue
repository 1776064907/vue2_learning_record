<template>
    <div>
        <Student :getSchool="getSchool"/>
        <hr>
        <!-- 将子组件的数据传递给父组件的3中方法 -->
        <!-- <School :getSchool="getSchool"/>  第一种方法 -->

        <School v-on:atguigu="demo" />  第二种方法

        <School ref="son" @click.native="show"/>  
    </div>
</template>

<script>
import Student from './component/Student'
import School from './component/School'

export default {
    components:{
        Student,
        School
    },
    methods: {
        show(){
            alert('6666')
        },
        getSchool(data){
            console.log('得到学校名称',data)
        },
        demo(...a){
            console.log('demo被调用了',a)
        },
        newDemo(a,b,c){
            console.log('newDemo被调用了',a,b,c)
        },
        
    },
    mounted() {
        this.$refs.son.$on('atguigu',this.newDemo)
        this.$refs.son.$on('address',this.newDemo)
        // this.$refs.son.$once('atguigu',this.newDemo) //只触发一次

    },
    
}
</script>

<style>

</style>