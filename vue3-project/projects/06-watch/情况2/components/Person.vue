<template>
<div class="person">
  <h1>情况2：监视【ref】定义的【对象类型】数据</h1>
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <button @click="changename">修改姓名</button>
  <button @click="changeage">修改年龄</button>
  <button @click="changeperson">修改人</button>
</div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

let person = ref({
  name:'张三',
  age:21
})

function changename(){
  person.value.name += '~'
}
function changeage(){
  person.value.age++
}
function changeperson(){
  person.value = {
    name:'李四',
    age:30
  }
}

//只有在修改整个person对象时才会监听到
//也就是说监视的是对象的地址值
//若想监视对象内部属性的变化，要开启深度监视
// watch(person,(newvalue,oldvalue)=>{
//   console.log(newvalue,oldvalue)
// })

watch(person,(newvalue,oldvalue)=>{
  console.log(newvalue,oldvalue)//改变属性时，新旧对象一样
},{
  deep:true,
  // immediate:true//立即监视：不管数据有没有变先执行一边回调函数内容
})

defineOptions({
  name:'Person234'
})
</script>

<style>

</style>