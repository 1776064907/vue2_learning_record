<template>
    <ul>
        <li>消息id:{{$route.query.id}}</li>
        <li>消息标题：{{$route.query.title}}</li>
    </ul>
</template>

<script>
    export default {
        name:'Details',
        mounted() {
            console.log(this)
        },
        data() {
            return {
                id:this.$route.query.id,
                title:this.$route.query.title
            }
        },
    }
</script>
