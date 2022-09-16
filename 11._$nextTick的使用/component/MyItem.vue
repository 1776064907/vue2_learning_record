<template>
  <li>
    <label>
      <input type="checkbox" 
        :checked="todoObj.done" 
        @change="handleCheck(todoObj.id)"
      />
      <span v-show="!todoObj.edit">{{todoObj.todo}}</span>
      <input 
      v-show="todoObj.edit" 
      type="text" 
      :value="todoObj.todo"
      @blur="cancelBlur($event,todoObj)"
      ref="inputtodo"
      >
    </label>
    <button class="btn btn-danger" @click="deleteDOM(todoObj.id)" >删除</button>
    <button v-show="!todoObj.edit" class="btn btn-edit" @click="handleEdit(todoObj)">编辑</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props:['todoObj','checkDone','deleteTodo'],
  methods:{
    handleCheck(id){
      this.checkDone(id)
    },
    deleteDOM(id){
      if(confirm('确认删除吗')){
        this.deleteTodo(id)
      }
    },
    handleEdit(todoObj){
      if(this.todoObj.hasOwnProperty('edit')){
        todoObj.edit = true
      } else {
        this.$set(todoObj,'edit',true)
      }
      this.$nextTick(()=>{
        this.$refs.inputtodo.focus()
      })
    },
    cancelBlur(e,todoObj){
      todoObj.edit = false
      if(!e.target.value.trim()) return alert('输入不能为空！')
				this.$bus.$emit('updatetodos',todoObj.id,e.target.value)
    }
  }
};
</script>

<style scoped>
      /*item*/
    li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }

    li label {
    float: left;
    cursor: pointer;
    }

    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }

    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }

    li:before {
    content: initial;
    }

    li:last-child {
    border-bottom: none;
    }

    li:hover {
      background-color: #ccc;
    }

    li:hover button{
      display: block;
    }
</style>
