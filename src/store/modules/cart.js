import {
    CHANGE_CHECKED,
    INCREASE,
    DECREASE,
    ADD_CART
} from '../mutation-types'
const state = {
    cartList: []
}
const getters = {
    checkedCartList: state => {
        return state.cartList.filter(item => item.checked)
    }
}
const actions = {}
const mutations = {
    [ADD_CART](state, payload) {
        const item = state.cartList.find(item => item.id === payload.id);
        if (item) {
            item.count++;
        } else {
            state.cartList.push({ ...payload,
                count: 1,
                checked: true
            })
        }
    },
    [DECREASE](state, payload) {
        const index = state.cartList.findIndex(item => item.id === payload.id);
        state.cartList[index].count--
            if (!state.cartList[index].count) {
                state.cartList.splice(index, 1)
            }
    },
    [INCREASE](state, payload) {
        const item = state.cartList.find(item => item.id === payload.id);
        item.count++
    },
    [CHANGE_CHECKED](state, payload) {
        const item = state.cartList.find(item => item.id === payload.id);
        item.checked = !item.checked
    }
}

export default {
    namespaced: true,
    getters,
    mutations,
    state,
    actions
}