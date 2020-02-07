<template>
    <!-- <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button @click="$emit('enlarge-text', 0.1)">
            Enlarge text
        </button>
        <div v-html="post.content"></div>
    </div> -->
    <div class="blog-post">
        <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
    </div>
</template>
<script>
export default {
    name: "blog-post",
    // props: ['post']
    props: ['value']
};
</script>
<style scoped lang="scss">
</style>