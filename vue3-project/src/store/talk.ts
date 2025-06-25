import axios from "axios";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTalkStore = defineStore('talk',()=>{
    const talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string)||[])
    async function getAtalk(){
        const result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        console.log(result.data.content)
        talkList.unshift({id:talkList.length+1,title:result.data.content})
    }
    return {talkList,getAtalk}
})