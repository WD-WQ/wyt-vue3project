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
  setup(){
    let name = 'wyt'
    let age = 21
    let tel = '1234567890'

    function changename(){
      name = 'yyqx'
      console.log(name)
    }
    function changeage(){
      age = 25
      console.log(age)
    }
    function showtel(){
      alert(tel)
    }
    return {name,age,changename,changeage,showtel}
    // return () => 'hh'//setup的返回值也可以是一个渲染函数
  }
}
</script>

<style>

</style>