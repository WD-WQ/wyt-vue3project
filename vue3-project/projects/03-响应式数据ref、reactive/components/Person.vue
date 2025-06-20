<template>
  <div>
    <h1>vue3</h1>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changename">changename</button>
    <button @click="changeage">changeage</button>
    <button @click="showtel">changetel</button>
  </div>
  <div>
    <h1>{{ car.brand }}</h1>
    <h2>{{ car.price }}</h2>
    <button @click="changeprice">修改汽车价格</button>
    <button @click="changebrand">修改汽车名称</button>
  </div>
  <h1>{{ obj.a.b.c }}</h1>
  <button @click="changeobj">修改obj.a.b.c</button>
  <h1>{{ obj1.a.b.c }}</h1>
  <button @click="changeobj1">修改obj1.a.b.c</button>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

//ref可以定义基本类型的响应式数据和对象类型的响应式数据
//重新赋值之后任然具有响应式
//ref一般用于简单数据类型
let name = ref('wyt')
let age = ref(21)
let tel = '123456'

//reactive只能定义对象类型的响应式数据
//重新赋值之后，不再具有响应式；可以用assign来实现就不会失去响应式
//reactive一般用于对象类型
let car = reactive({
    brand:'奔驰',
    price:100
})
// let s = reactive('')//报错：reactive(target: object): object
console.log(car)//Proxy(Object)

let obj = reactive({
    a:{
        b:{
            c:1
        }
    }
})
let obj1 = ref({
    a:{
        b:{
            c:1
        }
    }
})

function changename(){
  name.value = 'yyqx'
  console.log(name)
}
function changeage(){
  age.value = 25
  console.log(age)
}
function showtel(){
  alert(tel)
}

function changeprice(){
    car.price += 10
}
function changebrand(){
    car.brand = '奥迪'
}

function changeobj(){
    obj.a.b.c += 1
}
function changeobj1(){
    obj1.value.a.b.c += 1
}

defineOptions({
  name:'Person234'
})
</script>
<style>

</style>