<template>
<div class="person">
  <h1>情况5：监视【ref】或【reactive】定义的【对象类型】数据中的多个属性</h1>
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


//想监视多个属性时用数组包裹
watch([()=>person.name,()=>person.car.c1],(newvalue,oldvalue)=>{
  console.log(newvalue,oldvalue)
})

defineOptions({
  name:'Person234'
})
</script>

<style>

</style>