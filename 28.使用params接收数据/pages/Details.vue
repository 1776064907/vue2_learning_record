<template>
    <ul>
        <li>消息id:{{$route.params.id}}</li>
        <li>消息标题：{{$route.params.title}}</li>
    </ul>
</template>

<script>
    export default {
        name:'Details',
        mounted() {
            console.log(this)
        },
        
    }
</script>
