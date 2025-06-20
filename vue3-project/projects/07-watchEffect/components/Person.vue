<template>
<div class="person">
  <h2>当前水温为：{{ sum }}</h2>
  <h2>当前水位为：{{ hei }}</h2>
  <button @click="changesum">changesum</button>
  <button @click="changehei">changehei</button>
</div>
</template>

<script lang="ts" setup>
import { ref , watch, watchEffect } from 'vue';

let sum = ref(0)
let hei = ref(0)

function changesum(){
  sum.value++
}
function changehei(){
  hei.value++
}

// watch([sum,hei],(oldvalue)=>{
//   let [sum,hei] = oldvalue
//   if(sum >=6 && hei >=6)
// {
//   console.log(1111111)
// }
// })

//watchEffect会自己分析要监视谁
//一上来先执行一次
watchEffect(()=>{
  if(sum.value >= 6 && hei.value >= 6)
{
  console.log(1111111)
} 
})

defineOptions({
  name:'Person234'
})
</script>

<style>

</style>