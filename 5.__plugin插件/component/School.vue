<template>
    
  <div>
    <h1>{{ msg | mySlice}}</h1>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <input type="text" name="" v-fbind="address">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是尚硅谷的一个学生",
      name:'尚硅谷',
      address:'atguigu'
    };
  },
};
</script>

<style>
</style>