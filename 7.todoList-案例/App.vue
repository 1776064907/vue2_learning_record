<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addtodo="addtodo" />
        <MyList
          :todos="todos"
          :checkDone="checkDone"
          :deleteTodo="deleteTodo"
        />
        <MyFooter :todos="todos" :allDone="allDone" :deleteTodoDone="deleteTodoDone" />
        <!-- :todoObj="todoObj" -->
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./component/MyHeader.vue";
import MyFooter from "./component/MyFooter.vue";
import MyList from "./component/MyList.vue";

export default {
  components: {
    MyHeader,
    MyFooter,
    MyList,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')),
    };
  },
  methods: {
    addtodo(da) {
      this.todos.unshift(da);
    },

    checkDone(da) {
      this.todos.forEach((val) => {
        if (val.id === da) {
          val.done = !val.done;
        }
      });
    },

    deleteTodo(id) {
      this.todos = this.todos.filter((val) => {
        return val.id !== id;
      });
    },

    allDone(val) {
      this.todos.forEach((todo) => {
        todo.done = val
      });
    },

    deleteTodoDone(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(val){
        localStorage.setItem('todos',JSON.stringify(val))
      }
    }
  }
};
</script>

<style >
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>