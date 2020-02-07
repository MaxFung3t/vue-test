<template>
    <div id="click">
        <h1>{{ click }}</h1>
        <button @click.ctrl="onClick">A</button>

        <div>.sync 修饰符</div>
        <button @click="changeValue">toggle</button>
        <!-- 第一种：原始写法 -->
        <Sync :isShow='valueChild' @update:isShow='val=> valueChild = val' style="width:300px;height:200px;padding: 30px 20px 30px 5px;border:1px solid #ddd;margin: 0 auto;"></Sync>

        <!-- 第二种：v-bind:isShow.sync带参数写法 -->
        <!-- <Sync :isShow.sync='valueChild' style="width:300px;height:200px;padding: 30px 20px 30px 5px;border:1px solid #ddd;margin: 0 auto;"></Sync> -->

        <!-- 当我们用一个对象同时设置多个 prop 的时候，也可以将这个 .sync 修饰符和 v-bind 配合使用： -->
        <!-- 这样会把 doc 对象中的每一个属性 (如 title) 都作为一个独立的 prop 传进去，然后各自添加用于更新的 v-on 监听器。 -->
        <!-- 注意：与组件的v-model类似 -->
        <!-- 第三种：v-bind.sync不带参数写法 -->
        <!-- <Sync v-bind.sync="doc" style="width:300px;height:200px;padding: 30px 20px 30px 5px;border:1px solid #ddd;margin: 0 auto;"></Sync> -->


        <div>.prop 修饰符</div>
        <!--
        在浏览器解析 DOM 树渲染页面后，每个标签都会生成一个对应的 DOM 节点。节点是一个对象，所以会包含一些 properties，attributes 也是其中一个property。 Attribute 对象包含标签里定义的所有属性，Property 只包含 HTML 标准的属性，不包含自定义属性(data-id,myAttr)
        attribute 是 dom 元素在文档中作为 html 标签拥有的属性； 称为：特性，只能是字符串
        property 是 dom 元素在 js 中作为对象拥有的属性。 称为：属性
    	-->
        <input id="input" type="foo" value="11" :data="inputData"></input>
        <!-- HTML渲染后: <input id="input" type="foo" value="11" data="inputData 的值"></input>
		input.data === undefined
		input.attributes.data === this.inputData -->
        <input id="input" type="foo" value="11" :data.prop="inputData"></input>
        <!--
		HTML渲染后: <input id="input" type="foo" value="11"></input>
		input.data === this.inputData
		input.attributes.data === undefined
		-->


        <div>.camel 修饰符</div>
        <!--
		因为html特性不区分大小写，所以:viewBox="viewBox"不加.camel会渲染为 viewbox="viewBox"
		会渲染失败，所以写成下面
		-->
        <svg style="width:300px;height:200px;background-color:blue" :viewBox.camel="viewBox"></svg>
        <div id='example-3'>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br>
            <span>Checked names: {{ checkedNames }}</span>
        </div>
        <div id="example-6">
            <select v-model="selected" multiple style="width: 50px;">
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <br>
            <span>Selected: {{ selected }}</span>
        </div>


        <div>.lazy修饰符</div>
        <!--
        **在输入框中，v-model 默认是同步数据，使用 .lazy 会转变为在 change 事件中同步 ，
		也就是在失去焦点 或者 按下回车键时才更新**
		-->
        <input type="text" v-model.lazy="val">
        <div>{{ val }}</div>
    </div>
</template>
<script>
export default {
    name: 'click',
    data() {
        return {
            click: 'click单元模块',
            valueChild: true,
            title1: '1',
            index: {
                isClosing: true
            },
            viewBox: "0 0 10 10",
            checkedNames: [],
            selected: [],
            val:'',
            inputData:'',
            doc:{
                isShow: true
            }
        }
    },
    mounted() {
        var divId = document.getElementById('divId')
    },
    methods: {
        onClick() {
            console.log('111')
        },
        changeValue() {
            this.valueChild =!this.valueChild;  //v-bind:isShow.sync 带参数进行传递时
            //this.doc.isShow = !this.doc.isShow;   //v-bind.sync  不带参数进行传递时
        }
    }
}
</script>
<style scoped lang="scss">
button {
    width: 100px;
    height: 50px;
    border: 1px solid red;
    line-height: 50px;
    display: block;
    margin: 0 auto;
}

input {
    width: 100px;
    height: 50px;
    border: 1px solid red;
    line-height: 50px;
    display: block;
    margin: 0 auto;
    border-color: blue;
    border-radius: 3px;
}
</style>