<template>
<div class="person">
  姓：<input type="text" v-model="firstname"><br>
  名：<input type="text" v-model="lastname"><br>
  姓名：<span>{{ name }}</span>
  <button @click="changename">修改姓名</button>
</div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

let firstname = ref('')
let lastname = ref('')
//计算属性有缓存，方法没有缓存

// let name = computed(()=>{
//   return firstname.value + lastname.value
// })

//完整写法
//computed返回的也是一个ref响应式数据
let name = computed({
  get:() => firstname.value + lastname.value,
  set:(val) => {
    const [str1,str2] = val.split('-')
    firstname.value = str1
    lastname.value = str2
  }
})

function changename(){
  name.value = 'li-si'
}
defineOptions({
  name:'Person234'
})
</script>

<style>


</style>