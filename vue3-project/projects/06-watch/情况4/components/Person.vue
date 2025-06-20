<template>
<div class="person">
  <h1>情况4：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <h2>{{ person.car.c1 }}</h2>
  <h2>{{ person.car.c2 }}</h2>
  <button @click="changename">修改姓名</button>
  <button @click="changeage">修改年龄</button>
  <button @click="changec1">修改c1</button>
  <button @click="changec2">修改c2</button>
  <button @click="changecar">修改car</button>
</div>
</template>

<script lang="ts" setup>
import { reactive , watch } from 'vue';

let person = reactive({
  name:'张三',
  age:20,
  car:{
    c1:'benci',
    c2:'baoima'
  }
})
console.log(person)

function changename(){
  person.name += '~'
}
function changeage(){
  person.age++
}
function changec1(){
  person.car.c1 +='-'
}
function changec2(){
  person.car.c2 += '-'
}
function changecar(){
  person.car = {c1:'jiuhao',c2:'tesila'}
}

//不能直接监听person.name应该用函数返回
watch(()=>person.name,(newvalue,oldvalue)=>{
  console.log(newvalue,oldvalue)
})

//修改car里面的属性时可以监视到，但是改整个car时监视不到；也就是监视的只是最开始person.car指向这个对象而不是person.car
//写出函数式时都可以监视到
// watch(person.car,(newvalue,oldvalue)=>{
//   console.log(newvalue,oldvalue)
// })
//应该写成函数式并且加上深度监听
watch(()=>person.car,(newvalue,oldvalue)=>{
  console.log(newvalue,oldvalue)
},{deep:true})


defineOptions({
  name:'Person234'
})
</script>

<style>

</style>