<template>
    
  <div class="demo" >
    <h1>{{ msg}}</h1>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
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

<style scoped >
 .demo{
  background-color: pink;
 }
 /* 
 相当于：
    .demo[data-v-03bea000]{
      background-color: pink;
    }
 */
</style>