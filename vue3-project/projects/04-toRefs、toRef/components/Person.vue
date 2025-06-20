<template>
<div class="person">
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="changename">修改姓名</button>
  <button @click="changeage">修改年龄</button>
</div>
</template>

<script lang="ts" setup>
import { reactive, toRef, toRefs } from 'vue';

let person = reactive({
  name:'张三',
  age:21
})
//toRefs是把一个响应式对象里的内容一次性结构出来，且带有响应式
let {name,age} = toRefs(person)//name和age是ref包裹的响应式数据
console.log(toRefs(person))
console.log(name,age)

let p = toRef(person,'age')//toRef是把一个响应式对象里面的内容一个一个地解构出来，且带有响应式
console.log(p)

function changename(){
  name.value += '~'
  console.log(name.value,person.name)//修改name和age的同时person中的name和age其实也被更改了
}
function changeage(){
  age.value += 1
  console.log(age.value,person.age)
}

</script>

<style>


</style>