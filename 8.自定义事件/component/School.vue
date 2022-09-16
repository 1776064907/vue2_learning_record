<template>

  <div>
    <h1>{{ msg }}</h1>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="giveSchool">点击我把学校name传给app</button>
    <button @click="giveSchool">点击我把学校地址传给app</button>
    <button @click="cancelEnvet">取消绑定</button>
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
  props:['getSchool'],
  methods: {
     
    giveSchool(){
      // this.getSchool(this.name)
      this.$emit('atguigu',666,888)
      this.$emit('address',this.address)
    },
    cancelEnvet(){
      // this.$off('atguigu')  //取消绑定一个
      // this.$off(['atguigu','address'])  //取消绑定多个
      this.$off()  //取消绑定全部
    }
  },
};
</script>

<style>
</style>