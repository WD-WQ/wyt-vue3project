<template>
  <div class="app">
    <h1>vue3</h1>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changename">changename</button>
    <button @click="changeage">changeage</button>
    <button @click="showtel">changetel</button>
  </div>
</template>

<script lang="ts">
export default {
  name:'App',
}
</script>
<script lang="ts" setup>
let name = 'wyt'
let age = 21
let tel = '123456'

function changename(){
  name = 'wyt'
  console.log(name)
}
function changeage(){
  age = 25
  console.log(age)
}
function showtel(){
  alert(tel)
}

defineOptions({
  name:'Person234'
})
</script>
<style>

</style>