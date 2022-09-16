<template>

  <div>
    <h1>{{ msg }}</h1>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是尚硅谷的学校",
      name:'尚硅谷',
      address:'atguigu'
    };
  },
 methods: {
   
 },
 mounted() {
  this.$bus.$emit('hello',this.name)
 },
};
</script>

<style>
</style>