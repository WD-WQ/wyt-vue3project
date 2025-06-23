<template>
  <div class="app">
    <Person :p="personlist"></Person>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import Person from './components/Person.vue';
import type { persons } from './types';

let personlist = reactive<persons>([
  { id:'123',name:'张三',age:60 },
  { id:'456',name:'李四',age:60 },
  { id:'789',name:'王五',age:60 }
])
</script>
<style>

</style>