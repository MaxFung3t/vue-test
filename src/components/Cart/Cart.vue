<template>
    <div>
        <ul>
            <li v-for="cart in cartList" :key="cart.id">
                <a-checkbox :checked="cart.checked" @change="changeChecked(cart)">{{cart.title}}</a-checkbox>
                 - ${{cart.price}} -
                <a-button @click="decrease(cart)">-</a-button> {{cart.count}} 
                <a-button @click="increase(cart)">+</a-button>
            </li>
            <li>total: {{total}}</li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { DECREASE, INCREASE, CHANGE_CHECKED } from "../../store/mutation-types";

export default {
  computed: {
    ...mapState("cart", ["cartList"]),
    ...mapGetters("cart", ["checkedCartList"]),
    total() {
      let total = 0;
      this.checkedCartList.forEach(item => {
        total += item.price * item.count;
      });
      return total;
    }
  },
  methods: {
    ...mapMutations("cart", {
      decrease: DECREASE,
      increase: INCREASE,
      changeChecked: CHANGE_CHECKED
    })
  }
};
</script>

<style lang="scss" scoped>
</style>