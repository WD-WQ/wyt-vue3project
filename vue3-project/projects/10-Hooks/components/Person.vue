<template>
  <div class="person">
    <h2>{{ sum }}</h2>
    <button @click="getSum">+</button>
    <hr>
    <img v-for="(s, index) in doglist" :src="s" alt="" :key="index">
    <br>
    <button @click="getDog">再来一只</button>
  </div>
</template>

<script lang="ts" setup>
import useDog from '@/hooks/useDog';
import useSum from '@/hooks/useSum';

const { sum, getSum } = useSum()
const { doglist, getDog } = useDog()

defineOptions({
  name: 'Person234'
})
</script>

<style scoped>
img {
  height: 100px;
}
</style>