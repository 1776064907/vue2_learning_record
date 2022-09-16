<template>
    <div class="demo">
        <h3>{{title}}</h3>
        <slot :games="games" msg="how are you">默认插槽</slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data() {
        return {
            foods:['火锅','烧烤','小龙虾','牛排'],
            games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
            films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
        }
    },
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

    