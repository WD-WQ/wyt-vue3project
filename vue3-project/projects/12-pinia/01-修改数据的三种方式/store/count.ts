import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
    state(){
        return{
            sum:6
        }
    },
    actions:{
        editSum(v:number){
            this.sum += v
        }
    }
})