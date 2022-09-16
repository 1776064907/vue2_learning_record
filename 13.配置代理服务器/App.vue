<template>
  <div >
    <button @click="getResponse">点击我获取学生信息</button>
    <button @click="getCarsInfo">点击我获取车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    getResponse(){
      axios.get('http://localhost:8080/atguigu/students').then(
        (res)=>{
          console.log(res.data)
        },
        (err)=>{
          console.log(err.message)
        }
      )
    },
    getCarsInfo(){
      axios.get('http://localhost:8080/cars/cars').then(
        (res)=>{
          console.log(res.data)
        },
        (err)=>{
          console.log(err.message)
        }
      )
    }
  },
}
</script>
