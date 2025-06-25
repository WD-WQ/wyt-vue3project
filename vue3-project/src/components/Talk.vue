<template>
    <div class="talk">
        <button @click="getTalk">获取一句话</button>
        <ul>
            <li v-for="item in talkList" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Talk">
import {useTalkStore} from '@/store/talk'

const talkStore = useTalkStore()
const {talkList} = talkStore

//用于监听store中数据的变化
//mutate：本次修改的信息
//state：真实数据
talkStore.$subscribe((mutate,state)=>{
    console.log("talkstore changed")
    localStorage.setItem('talkList',JSON.stringify(state.talkList))
})

function getTalk(){
    talkStore.getAtalk()
}
</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>