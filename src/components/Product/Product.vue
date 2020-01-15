<template>
    <div>
        <ul>
            <li v-for="product in productList" :key="product.id">
                {{product.title}}
                -
                ${{product.price}}
                <a-button type="primary" @click="addCart(product)">加入购物车</a-button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { ADD_CART } from "../../store/mutation-types";
export default {
  computed: mapState("product", ["productList"]),
  created() {
    this.getProduct();
  },
  methods: {
    ...mapActions("product", ["getProduct"]),
    ...mapMutations("cart", {
      addCart: ADD_CART
    })
  }
};
</script>

<style lang="scss" scoped>
</style>