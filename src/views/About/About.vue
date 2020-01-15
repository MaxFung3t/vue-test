<template>
    <div id="app">
        <Prodcut />
        <Cart />
    </div>
</template>
<script>
import Prodcut from '../../components/Product/Product'
import Cart from '../../components/Cart/Cart'
export default {
    components: {
        Prodcut,
        Cart
    }
}
</script>