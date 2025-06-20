<template>
<div class="person">
  <h1>情况3：监视【reactive】定义的【对象类型】数据，且默认开启了深度监视</h1>
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <button @click="changename">修改姓名</button>
  <button @click="changeage">修改年龄</button>
  <button @click="changeperson">修改人</button>
</div>
<div>
  <h2>{{ obj.a.b.c }}</h2>
  <button @click="changec">修改c</button>
</div>
</template>

<script lang="ts" setup>
import { reactive , watch } from 'vue';

let person = reactive({
  name:'张三',
  age:21
})
let obj = reactive({
  a:{
    b:{
      c:1
    }
  }
})

function changename(){
  person.name += '~'
}
function changeage(){
  person.age++
}
function changec(){
  obj.a.b.c++
}
function changeperson(){
  Object.assign(person,{name:'李四',age:30})
}

//不管是属性还是对象改变都会监听到，且新旧对象都一样；也就是默认开启深度监视（隐式开启深度监听）
//这种深度监视不能关闭
watch(person,(newvalue,oldvalue)=>{
  console.log(newvalue,oldvalue)
})

watch(obj,(newvalue,oldvalue)=>{
  console.log(newvalue,oldvalue)
})


defineOptions({
  name:'Person234'
})
</script>

<style>

</style>