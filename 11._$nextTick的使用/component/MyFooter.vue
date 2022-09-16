<template>
  <div class="todo-footer" v-show="isAll">
    <label>
      <!-- <input type="checkbox" :checked="selectAll" @click="allSelect"/> -->
      <input type="checkbox" v-model="selectAll"/>
    </label>
    <span>
      <span>已完成{{ doneTodos }}</span> / 全部{{ isAll }}
    </span>
    <button class="btn btn-danger" @click="deleteAlldone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "allDone","deleteTodoDone"],
  computed: {
    doneTodos() {
      return this.todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0);
    },
    isAll() {
      return this.todos.length;
    },
    selectAll:{
       get(){
        return this.doneTodos === this.isAll && this.isAll > 0;
       },
       set(val){
         this.allDone(val)
       }
    },
  },
  methods:{
    allSelect(e){
        // console.log(e.target.checked)
        // this.allDone(e.target.checked)
    },
    deleteAlldone(){
        this.deleteTodoDone()
    }
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
