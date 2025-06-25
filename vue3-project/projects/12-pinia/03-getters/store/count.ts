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
    },
    getters:{
        bigSum(state){
            console.log(this)
            // return this.sum
            return state.sum//等同于this.sum
        }
    }
})