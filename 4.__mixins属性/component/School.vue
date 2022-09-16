<template>

  <div>
    <h1>{{ msg }}</h1>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="ChangeAge">点击我更改年龄</button>
  </div>
</template>

<script>
// import {hunhe,num} from '../mixin'
export default {
  data() {
    return {
      msg: "我是尚硅谷的一个学生",
      name:'尚硅谷',
      address:'atguigu'
    };
  },
  // mixins:[hunhe,num]
};
</script>

<style>
</style>