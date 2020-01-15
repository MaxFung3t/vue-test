// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'

export default {
    name: 'home',
    data(){
    	return {
    		value:'',
    		value1:'',
    		value2:''
    	}
    },
    components: {
        HelloWorld
    }
}