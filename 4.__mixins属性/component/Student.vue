<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="ChangeAge">点击我更改年龄</button>
  </div>
</template>

<script>
// import {hunhe,num} from '../mixin'

export default {
  data() {
    return {
      msg: "我是尚硅谷的一个学生",
      name: '张德',
      sex:'man'
    };
  },
  // mixins:[hunhe,num]
};
</script>

<style>
</style>