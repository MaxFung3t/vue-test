<template>
    <div class="attrs">
        <!-- <childcom :name="name" :age="age" :sex="sex" aaa='123' @grandChangeName='changeName'></childcom> -->
        <childcom :name="name" :age="age" :sex="sex" aaa='123' @click='changeNameTwo'></childcom>
    </div>
</template>
<script>
import ChildCom from '../../components/ChildCom/ChildCom'
export default {
    name: 'attrs',
    data() {
        return {
            'name': '张三',
            'age': '30',
            'sex': '男'
        }
    },
    created(){
    },
    components: {
        'childcom': ChildCom
    },
    methods:{
      changeName(val){
        this.name = val;
      },
      changeNameTwo(e){
        console.log(e)
      }
    }
}
</script>