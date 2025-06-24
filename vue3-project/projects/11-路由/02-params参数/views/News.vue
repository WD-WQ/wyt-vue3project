<template>
  <div class="news">
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <!-- 第一种写法 -->
        <!-- <RouterLink :to="`/news/detail/${item.id}/${item.title}/${item.content}`">{{ item.title }}</RouterLink> -->

        <!-- 第二种写法：只能用name不能用path，不能传对象 -->
        <RouterLink 
         :to="{
          name:'xiang',
          params:{
            id:item.id,
            title:item.title,
            content:item.content
          }}">
        {{ item.title }}  
        </RouterLink>
      </li>
    </ul>
    <div class="news-content">
    <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue';

const newsList = reactive([
  {id:'new01',title:'11111111',content:'hhhhhhh'},
  {id:'new02',title:'22222222',content:'ggggggg'},
  {id:'new03',title:'33333333',content:'aaaaaaa'},
  {id:'new04',title:'44444444',content:'ccccccc'},
])
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>