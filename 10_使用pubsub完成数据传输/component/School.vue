<template>

  <div>
    <h1>{{ msg }}</h1>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="demo">点击我</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      msg: "我是尚硅谷的学校",
      name:'尚硅谷',
      address:'atguigu'
    };
  },
 methods: {
   demo(){
       pubsub.publish('hello',999)
   }
 },
 mounted() {
   
 },
};
</script>

<style>
</style>