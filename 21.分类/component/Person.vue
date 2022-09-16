<template>
  <div>
    <input type="text" placeholder="请输入内容" v-model="name" />
    <button @click="addPerson">添加人数</button>
    <button @click="addpersonWang">添加姓王的人</button>
    <button @click="addsometing">随机添加心灵鸡汤</button>
    <h3>显示第一个人的姓名：{{ getFirstName }}</h3>
    <h3>Count组件中的求和：{{ sum }}</h3>
    <ul>
      <li v-for="p of personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";

export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    ...mapState("countAbout", ["sum"]),

    getFirstName() {
      return this.$store.getters["personAbout/getFirstName"];
    },
  },
  methods: {
    addPerson() {
      const person = { id: nanoid(), name: this.name };
      this.$store.commit("personAbout/ADD_PERSON", person);
      this.name = "";
    },
    addpersonWang() {
      const person = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addpersonWang", person);
      this.name = "";
    },
    addsometing() {
      this.$store.dispatch("personAbout/addsometing")
    },
  },
};
</script>

<style>
</style>