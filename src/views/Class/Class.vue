<template>
    <div id="class">
        <!-- 第一种 -->
        <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
        <!-- 第二种 -->
        <div v-bind:class="classObject"></div>
        <!-- 第三种 -->
        <div v-bind:class="classObject1"></div>
        <!-- 第四种 -->
        <div v-bind:class="[activeClass, errorClass]"></div>
        <!-- 第五种 -->
        <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
        <!-- 第六种 -->
        <div v-bind:class="[{ active: isActive }, errorClass]"></div>
        <!-- 绑定内联样式 -->
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
        <div v-bind:style="styleObject"></div>
        <!-- 切换 loginType 将不会清除用户已经输入的内容,因为两个模板使用了相同的元素.想要不一样，
        	只需添加一个具有唯一值的 key 属性即可 -->
        <div>
            <template v-if="loginType === 'username'">
                <label>Username</label>
                <input placeholder="Enter your username" key="username-input">
            </template>
            <template v-else>
                <label>Email</label>
                <input placeholder="Enter your email address" key="email-input">
            </template>
            <button @click="toggle">toggle</button>
        </div>
        <!-- 永远不要把 v-if 和 v-for 同时用在同一个元素上。 -->
        <!-- 哪怕我们只渲染出一小部分用户的元素，也得在每次重渲染的时候遍历整个列表，不论活跃用户是否发生了变化。 -->
        <ul>
        	<li v-for="lis in changeList" :key="lis.id">{{ lis.name }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'class',
    data() {
        return {
            isActive: true,
            hasError: false,
            classObject: {
                active: true,
                'text-danger': false
            },
            error: null,
            activeClass: 'active',
            errorClass: 'text-danger',
            activeColor: 'red',
            fontSize: 30,
            styleObject: {
                color: 'red',
                fontSize: '13px'
            },
            loginType: 'username',
            list: [
                { id: 1, name: 'zs1', show: true },
                { id: 2, name: 'zs2', show: true  },
                { id: 3, name: 'zs3', show: false  },
                { id: 4, name: 'zs4', show: false  }
            ]
        }
    },
    methods: {
        toggle() {
            console.log('1111')
            this.loginType = this.loginType === 'username' ? '' : 'username';
        }
    },
    computed: {
        classObject1: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        },
        changeList: function(){
        	return this.list.filter(item=>{
        		return item.show;
        	})
        }
    }
}
</script>
<style scoped lang="scss">
</style>