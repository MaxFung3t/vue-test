<template>
    <div id="blogPost" class="bcd">
        <h3>{{ title }}</h3>
        <h3>{{ likes }}</h3>
        <h3>{{ published }}</h3>
        <h3>{{ commentIds[0] }}</h3>
        <h3>{{ author.name }}</h3>
        <div>{{ linkesChangeEnd }}</div>
        <div>{{ normalizedSize }}</div>
        <!-- <h3>{{ post.title }}</h3>
        <h3>{{ post.likes }}</h3>
        <div>{{ message }}</div>
        <div>{{ messageNum }}</div> -->
    </div>
</template>
<script>
export default {
    name: "blogPost",
    inheritAttrs: false,
    // 第一种写法
    props: {
        title: String,
        likes: Number,
        size: String,
        published: Boolean,
        commentIds: Array,
        author: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function() {
                return { name: 'zhangsan', company: 'Veridian' }
            }
        }
    },
    // 第二种写法
    // props: ['post','message','messageNum'],
    data() {
        return {
            linkesChange: this.likes,
            // 改变一个 prop 的情形：
            // 1.这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。
            //2.这个 prop 以一种原始的值传入且需要进行转换。使用这个 prop 的值来定义一个计算属性computed：{ normalizedSize: XXXXX}
            linkesChangeEnd: Number
        }
    },
    mounted() {
        this.linkesChangeEnd = this.linkesChange + 1;
        // console.log(typeof(this.message))
        // console.log(typeof(this.messageNum))
    },
    computed: {
        normalizedSize: function() {
            return this.size.trim().toLowerCase();
        }
    }
};
</script>
<style scoped lang="scss">
</style>