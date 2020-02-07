<template>
    <!-- .sync修饰符 -->
    <div v-if="isShow">
        <p>默认初始值是{{isShow}}，所以是显示的</p>
        <button @click.stop="closeDiv">关闭</button>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        isShow: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        closeDiv() {
            this.$emit('update:isShow', false); //触发 input 事件，并传入新值
        }
    }
};
</script>
<style lang="scss" scoped>
</style>