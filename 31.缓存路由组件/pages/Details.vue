<template>
    <ul>
        <li>消息id:{{id}}</li>
        <li>消息标题：{{title}}</li>
    </ul>
</template>

<script>
    export default {
        name:'Details',
        // mounted() {
        //     console.log(this)
        // },
        props:['id','title']
    }
</script>
