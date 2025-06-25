import axios from "axios";
import { defineStore } from "pinia";

export const useTalkStore = defineStore('talk',{
    state(){
        return{
            talkList:JSON.parse(localStorage.getItem('talkList') as string)||[]
        }
    },
    actions:{
        async getAtalk(){
            const result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            console.log(result.data.content)
            this.talkList.unshift({id:this.talkList.length+1,title:result.data.content})
        }
    }
})