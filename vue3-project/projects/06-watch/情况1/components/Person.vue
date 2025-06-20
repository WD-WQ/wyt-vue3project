<template>
<div class="person">
  <h1>情况1：监视【ref】定义的【基本类型】数据</h1>
  <h2>{{ sum }}</h2>
  <button @click="changesum">修改数据</button>
</div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

let sum = ref(0)

function changesum(){
  sum.value++
}

// watch(监视的数据,回调函数)
watch(sum,(newvalue,oldvalue)=>{
  console.log("改变了:",newvalue,oldvalue)
})


defineOptions({
  name:'Person234'
})
</script>

<style>


</style>