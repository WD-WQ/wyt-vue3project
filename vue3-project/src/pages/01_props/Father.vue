<template>
  <div class="father">
    <h3>父组件</h3>
		<h4>汽车：{{ car }}</h4>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<Child :car="car" :sendToy="getToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue';
import Child from './Child.vue'
const car = ref('benchi')
const toy = ref('')

//子传父函数
const getToy = (value:string)=>{
	console.log('父',value)
	toy.value = value
}

</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>