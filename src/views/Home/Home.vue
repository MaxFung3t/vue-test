<template>
    <div class="home">
        <img alt="Vue logo" src="@/assets/images/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <input type="text" v-model.lazy="value"> <!-- //光标离开输入框才会更新视图 -->
        <input type="text" v-model.trim="value1"> <!-- //过滤首尾的空格中间不过滤 -->
        <input type="text" v-model="value2">
        <div>{{ value }}</div>
        <div class="value1">{{ value1 }}</div>
        <div class="value2">{{ value2 }}</div>
    </div>
</template>
<script src="./Home.js"></script>
<style src="./Home.scss" lang="scss"></style>