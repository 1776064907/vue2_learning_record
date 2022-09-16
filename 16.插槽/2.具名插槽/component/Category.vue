<template>
    <div class="demo">
        <h3>{{title}}</h3>
        <slot name="header"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title']
    }
</script>

<style scoped>
    .demo{
        width: 300px;
        height: 500px;
        background-color: pink;
    }
    h3{
        height: 40px;
        background-color: red;
        text-align: center;
        line-height: 40px;
    }
</style>

    