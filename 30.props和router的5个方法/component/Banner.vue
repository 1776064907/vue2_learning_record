<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click="back">ει</button>
            <button @click="forward">εθΏ</button>
            <button @click="test">go</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Banner',
    // mounted() {
    //     console.log(this)
    // },
    methods: {
        back(){
            this.$router.back()
        },
        forward(){
            this.$router.forward()
        },
        test(){
            this.$router.go(2)
        }
    },
}
</script>

<style>

</style>