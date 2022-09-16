<template>
  
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>学生年龄:{{ newAge + 1 }}</h2>
    <button @click="ChangeAge">点击我更改年龄</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是尚硅谷的一个学生",
      newAge: this.age,
    };
  },
  methods: {
    ChangeAge() {
      console.log(this);
      // this.age = 200  //不可以修改接收过来的数据
      this.newAge++;
    },
  },
  // 简写方式
  //   props: ["name", "sex", "age"],

  // 标准方式
  /*  props:{
        name:String,
        sex:String,
        age:Number
    } */

  // 完整写法
  props: {
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 99,
    },
  },
};
</script>

<style>
</style>