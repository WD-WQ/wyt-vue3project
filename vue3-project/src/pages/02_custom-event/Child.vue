<template>
	<div class="child">
		<h3>子组件</h3>
		<h4>玩具：{{ toy }}</h4>
		<button @click="emit('send-toy',toy)">测试</button>
	</div>
</template>

<script setup lang="ts" name="Child">
import { ref } from "vue";
// 数据
let toy = ref('奥特曼')
// 声明事件
const emit = defineEmits(['send-toy'])
</script>

<style scoped>
.child {
	margin-top: 10px;
	background-color: rgb(76, 209, 76);
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}
</style>