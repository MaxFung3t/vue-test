<template>
    <div id="app">
        <div>
            <a-button type="primary" @click="showLoading">ant-design-vue button</a-button>
        </div>
        <div>普通用法：</div>
        <div id="nav">
            <router-link to="/home">Home|</router-link>
            <router-link to="/test">Test|</router-link>
            <router-link to="/class">Class|</router-link>
            <router-link to="/click">Click|</router-link>
            <router-link to="/group">Group|</router-link>
            <router-link to="/slot">Slot|</router-link>
            <router-link to="/prop">Prop</router-link>
        </div>
        <div>传递数据：</div>
        <div id="navTwo">
            <!-- <router-link>simple|</router-link>
            <router-link>Vuex|</router-link> -->
            <router-link to="/attrs">Attrs|</router-link>
            <router-link to="/about">Vuex|</router-link>
        </div>
        <router-view />
    </div>
</template>
<script>
export default {
    methods: {
        showLoading() {
            this.$loading.show();
            setTimeout(() => {
                this.$loading.hide();
            }, 3000);
        }
    }
};
</script>
<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top:40px;
}

#nav {
    padding-bottom: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

#navTwo {
    padding-bottom: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>