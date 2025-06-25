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