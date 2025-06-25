<template>
    <div class="count">
        <h2>当前求和为：{{ countStore.sum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="del">减</button>
    </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from 'vue';
import {useCountStore} from '@/store/count'

const countStore = useCountStore()
console.log(countStore.sum)//等同于console.log(countStore.$state.sum)


const n = ref(1)

function add(){
    // sum.value += +n.value
    //第一种修改方式
    // countStore.sum += n.value

    //第二种修改方式:可用于批量修改
    // countStore.$patch({
    //     sum:countStore.sum+n.value
    // })

    //第三种修改方式:actions
    countStore.editSum(n.value)
}

function del(){
    // sum.value -= +n.value

    //第一种修改方式
    countStore.sum -= n.value

}

</script>

<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>