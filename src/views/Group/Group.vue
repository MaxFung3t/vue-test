<template>
    <div id="blog-posts-events-demo">
        <!-- <div :style="{ fontSize: postFontSize + 'em' }">
            <blog-post v-for="post in posts" :key="post.id" :post="post" @enlarge-text="onEnlargeText"></blog-post>
        </div> -->
        <!-- v-bind:value, v-no:input 等价于v-model ,组件的v-model与.sync修饰符类似-->
        <!-- <custom-input v-bind:value="searchText" v-on:input="searchText = $event"></custom-input> -->
        <custom-input v-model="searchText"></custom-input>
        <div>{{ searchText }}</div>
    </div>
</template>
<script>
export default {
    name: 'blog-posts-events-demo',
    props: ['post'],
    data() {
        return {
            posts: [
                { id: 1, title: 'A', content: 'My journey with Vue' },
                { id: 2, title: 'B', content: 'Blogging with Vue' },
                { id: 3, title: 'C', content: 'Why Vue is so fun' }
            ],
            postFontSize: 1,
            searchText: ''
        }
    },
    mounted() {
        console.log(this.searchText.val)
    },
    methods: {
        onEnlargeText(enlargeAmount) {
            console.log(enlargeAmount)
            this.postFontSize += enlargeAmount;
        }
    }
}
</script>
<style scope lang="scss">
</style>