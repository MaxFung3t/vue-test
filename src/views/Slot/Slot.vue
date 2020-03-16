<template>
	<div id="slotc">
		<SlotContent>注意，这是第一种写法</SlotContent>
		<slot-content>注意，这是第二种写法</slot-content>
	</div>
</template>

<script>
	import SlotContent from '@/components/SlotContent/SlotContent.vue'
	export default{
		name: 'slotc',
		components:{
			SlotContent
		}
	}
</script>

<style>
</style>
