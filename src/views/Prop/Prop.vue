<template>
    <div id="propc">
        <!-- 第一种写法 -->
        <blog-post v-bind="post" class="abc"></blog-post>
        <!-- 第二种写法 -->
        <!-- 当message=1时，传递过去1是string类型,当:messageNum=1时，传递过去是Number类型 -->
        <!-- <blog-post v-bind:post="post" message='1'></blog-post>
        <blog-post v-bind:post="post" :messageNum='1'></blog-post> -->
    </div>
</template>
<script>
export default {
    name: 'propc',
    data() {
        return {
            post: {
                title: '这是XXX',
                likes: 42,
                size: 'ADC',
                published: false,
                commentIds: [234, 266, 273],
                author: { name: 'zhangsan', company: 'Veridian' }
            }
        }
    }
}
</script>
<style>
</style>