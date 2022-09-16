<template>
    <div>
        <h1 class="title">nhao </h1>
        <Student/>
        <hr>
        <School/>
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
    
}
</script>

<style scoped>
    .title{
        color: red;
    }
    /* 相当于
    .title[data-v-7ba5bd90]{
        color: red;
    }
    */
</style>