<script>
import ButtonComp from './ButtonComp.vue'

export default {
    name: 'HeaderComp',
    props:{
        title:String,
        showAddTask:Boolean
    },
    components: {
        ButtonComp
    }
}
</script>

<template>
    <header>
        <h1>{{title}} </h1>
        <ButtonComp @btn-click = "$emit('toggle-add-task')" :text = "showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red' : 'green'"/>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: 20px;
}
</style>
