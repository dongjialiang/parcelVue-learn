import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	count: 0
}

const store = new Vuex.Store({
	state
})

export default store
