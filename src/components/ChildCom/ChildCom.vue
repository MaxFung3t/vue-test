<template>
    <div class="childCom">
        <div>我是子组件:</div>
        <div>姓名:{{name}}</div>
        <!-- 子组件绑定了"$attrs"，孙子组件就能获取到除了name属性外所有由父组件传递下来的属性。 -->
        <!-- 如果孙子组件也想获取到name属性那么，在绑定个name如下 -->
        <br/>
        <grandcom v-bind="$attrs" v-on='$listeners' :name="name"></grandcom>
    </div>
</template>
<script>
import GrandCom from '../../components/ChildCom/GrandCom/GrandCom'
export default {
    name: 'childCom',
    props: ['name'],
    // 默认情况下vue会把父作用域的不被认作 props 的特性绑定 且作为普通的 HTML 特性应用在子组件的根元素上。
    //关于inheritAttrs这个属性跟获取到$attrs的值没有关系
    //设置后Attrs传递过来的name='张三'不显示。注意：这个选项不影响 class 和 style 绑定。
    // inheritAttrs:false,
    data() {
        return {}
    },
    created: function() {
        console.log(this.$attrs) //注意这里
    },
    components: {
        'grandcom': GrandCom
    }
}
</script>