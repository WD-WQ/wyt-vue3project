<template>
<div class="person"> 
  <li v-for="item in p" :key="item.id">
    {{ item.name }}:{{ item.age }}
  </li>  
</div>
</template>

<script lang="ts" setup>
import { type persons } from '@/types';


// let person = defineProps(['p'])//只接受

//接收+限制类型
// defineProps<{p:persons}>()

//接收+限制类型+限制必要性+指定默认值
withDefaults(defineProps<{p?:persons}>(),{
  p:() => [{ id:'111',name:'赵六',age:60 }]
})

defineOptions({
  name:'Person234'
})
</script>

<style scoped>

</style>