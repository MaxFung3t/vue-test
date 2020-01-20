<template>
    <div id="click">
        <div>{{ click }}</div>
        <button @click.ctrl="onClick">A</button>
        <button @click="changeValue">toggle</button>
        <!-- <myComponent :show.sync='valueChild' style="width:300px;height:200px;padding: 30px 20px 30px 5px;border:1px solid #ddd;margin: 0 auto;"></myComponent> -->
        <myComponent :show='valueChild' @update:show='change' style="width:300px;height:200px;padding: 30px 20px 30px 5px;border:1px solid #ddd;margin: 0 auto;"></myComponent>
    </div>
</template>
<script>
export default {
    name: 'click',
    data() {
        return {
            click: 'click',
            valueChild: true
        }
    },
    methods: {
        onClick() {
            console.log('111')
        },
        change(val) {
        	this.valueChild = val.aaa;
        },
        changeValue(e) {
            this.valueChild = !this.valueChild;
        }
    }
}
</script>
<style scoped lang="scss">
button {
	width:100px;
	height:50px;
	border:1px solid red;
	line-height:50px;
	display:block;
	margin:0 auto;
}
</style>