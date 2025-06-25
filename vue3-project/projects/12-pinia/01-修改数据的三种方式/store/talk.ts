import axios from "axios";
import { defineStore } from "pinia";

export const useTalkStore = defineStore('talk',{
    state(){
        return{
            talkList:[
                {id:1,title:'11111111111'},
                {id:2,title:'333333311111'},
                {id:3,title:'145554545435111'},
                {id:4,title:'16657657561111'},
            ]
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