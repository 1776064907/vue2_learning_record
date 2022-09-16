<template>
    <div>
        <Student name="张德" sex="man" :age="18" />
    </div>
</template>

<script>
import Student from './component/Student'

export default {
    components:{
        Student,
    },
    
}
</script>

<style>

</style>