<template>
    <div class="grandCom" >
        <div>我是孙子组件:</div>
        <div>年龄：{{$attrs.age}}</div>
        <div>姓名：{{name}}</div>
        <!-- 事件通过孙子组件传到父组件方法一: -->
        <!-- <button style="height:50px;border-radius:10px" @click='grandChangeName'>修改名字按钮</button> -->
        <!-- 这个{{$attrs}}的值是父组件中传递下来的props（除了子组件childcom组件中props声明的）。
        记住孙子组件grandcom里获取到this.$attrs的值是除了子组件childcom声明的元素！
        记住是除了子组件childcom声明的元素！ -->
        <!-- 事件通过孙组件传到父组件方法二: （直接在孙组件和子组件设置v-on="$listeners"）-->
        <button style="height:50px;border-radius:10px" v-on='$listeners'>修改名字按钮</button>
        <!-- 利用v-on=$listeners 监听把孙子组件的click事件，传递到子组件，子组件设置v-on=$listeners，再传到父组件，父组件再通过@click='changeNameTwo'输出 -->
    </div>
</template>
<script>
export default {
    name: 'grandCom',
    props:['name'],
    inheritAttrs:false,
    data() {
        return {
        }
    },
    created() {
        console.log(this.$attrs)
    },
    methods:{
        // grandChangeName(){
        //     this.$emit('grandChangeName','kkk')
        // }
    }
}
</script>
