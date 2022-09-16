<template>
    <div class="container">
        
        <Category title="游戏">
            <template scope="atguigu">
                <!-- atguigu 是一个对象 -->
            <ul >
                <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
            </ul>
            </template>
        </Category>
        <Category title="游戏">
            <template scope={games}>
            <ol>
                <li style="color:red;" v-for="(g,index) in games" :key="index">{{g}}</li>
            </ol>
            </template>
        </Category>
         <Category title="游戏">
            <template slot-scope={games,msg}>
                {{msg}}
                <h4  v-for="(g,index) in games" :key="index">{{g}}</h4>
            </template>
        </Category>
      
    </div>
</template>

<script>
import Category from './component/Category'
export default {
    name:'App',
    components:{Category},
}
</script>

<style >
    .container{
        display: flex;
        justify-content: space-around;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>