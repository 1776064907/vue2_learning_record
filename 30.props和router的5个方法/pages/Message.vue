<template>
    <div>
        <ul>
        <li v-for="i in info" :key="i.id">
            <!-- 路由传参字符串的写法 -->
            <!-- <router-link :to="`/home/message/details/${i.id}/${i.title}`">message001</router-link>&nbsp;&nbsp; -->

            <!-- 路由传参对象的写法 -->
            <router-link 
            :to="{
                name:'xianqi',
                query:{
                    id : i.id,
                    title: i.title
                }
            }"
            >mess
            </router-link>&nbsp;&nbsp;
            <button @click="checkShow(i)">查看1</button>
            <button @click="placeShow(i)">replace</button>
        </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Message',
        data() {
            return {
                info:[
                    {id:'001',title:'details1'},
                    {id:'002',title:'details2'},
                    {id:'003',title:'details3'}
                ]
            }
        },
        methods: {
            checkShow(i){
                this.$router.push({
                    name:'xianqi',
                    query:{
                    id : i.id,
                    title: i.title
                }
                })
            },
            placeShow(i){
                this.$router.replace({
                    name:'xianqi',
                    query:{
                    id : i.id,
                    title: i.title
                    }
                })
            }
        },
    }
</script>

<style>

</style>