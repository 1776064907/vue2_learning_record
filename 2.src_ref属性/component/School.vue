<template>
    <div class="demo">
        <h2>学校名称:{{schoolName}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
export default {
    data(){
        return {
            schoolName:'尚硅谷',
            address:'atguigu'
        }
    }
}
</script>

<style>
    .demo{
        background-color: #999;
    }
</style>