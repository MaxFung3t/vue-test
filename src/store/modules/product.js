import shop from '../../api/shop'
import {
    GET_PRODUCT
} from '../mutation-types'
const state = {
    productList: []
}
const getters = {

}
const actions = {
    getProduct({
        commit
    }) {
        shop.getProduct().then(product => {
            console.log(product);
            commit(GET_PRODUCT, product)
        })
    }
}
const mutations = {
    [GET_PRODUCT](state, payload) {
        console.log(payload)
        state.productList = payload
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}