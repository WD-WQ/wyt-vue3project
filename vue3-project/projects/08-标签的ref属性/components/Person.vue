<template>
<div class="person">
  <h1>china</h1>
  <h2 class="title" ref="title2">beijin</h2>
  <h3>yyqx</h3>
  <button @click="showlog">输出h2</button>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// function showlog(){
//   console.log(document.querySelector('.title')?.innerHTML)
//   //由于在app里面也有类名为title的元素，且在第一个，所以输出不明确，应该用ref
// }

//创建容器,用于存储ref标记的内容
const title2 = ref()
function showlog(){
  console.log(title2.value.innerHTML)
}

defineOptions({
  name:'Person234'
})
</script>

<style>

</style>