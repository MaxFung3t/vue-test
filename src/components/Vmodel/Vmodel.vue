<template>
    <!-- <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button @click="$emit('enlarge-text', 0.1)">
            Enlarge text
        </button>
        <div v-html="post.content"></div>
    </div> -->
    <div class="vmodel">
        <input class="v_model" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
    </div>
</template>
<script>
export default {
    name: "vmodel",
    // props: ['post']
    props: ['value']
};
</script>
<style scoped lang="scss">
	.v_model{
		border:1px solid red;
	}
</style>