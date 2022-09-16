<template>
    <div>
       <h1>当前求和为：{{sum}}</h1>
       <h2>当前和放大10倍为：{{bigSum}}</h2>
       <h2>我在{{school}}，学习{{subject}}</h2>
       <h2>Person组件中的人数:{{personList.length}}</h2>
       <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
       </select>
       <button @click="increment(n)">+</button>
       <button @click="decrement(n)">-</button>
       <button @click="incrementOdd(n)">当和为奇数再加</button>
       <button @click="incrementWait(n)">等一等再加</button>
       
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'Count',
        props:['title'],
        data() {
        return {
           n:1,
        }
        },
        computed:{
            // 借助 mapState生成计算属性， 对象写法
            // ...mapState({school:'school',subject:'subject'})

            // 借助 mapState生成计算属性， 数组写法
            ...mapState('countAbout',['subject','school','sum']),

            ...mapState('personAbout',['personList']),

            // 借助 mapGetters生成计算属性， 对象写法
            // ...mapGetters({bigSum:'bigSum'}),

            // 借助 mapGetters生成计算属性， 数组写法
            ...mapGetters('countAbout',['bigSum'])


        },
        methods: {
            
            // 借助mapMutations生成与mutations对话的方法，即包含 this.$store.commit(xxx)的函数 (对象写法)，记得要手动传参
            ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),

             // 借助mapMutations生成与mutations对话的方法，即包含 this.$store.commit(xxx)的函数 (数组写法)，记得要手动传参,方法名必须与mutation里的属性名一致
            //  ...mapMutations(['JIA','JIAN']),

            // 借助mapActions生成与Actions对话的方法，即包含 this.$store.dispatch(xxx)的函数 (对象写法)，记得要手动传参
             ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),

             // 借助mapActions生成与Actions对话的方法，即包含 this.$store.dispatch(xxx)的函数 (数组写法)，记得要手动传参，方法名必须与Actions里的属性名一致
            //  ...mapActions('countAbout',['jia','jian'])
           
        },
        mounted() {
            console.log(this)
        },
    }
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>



    