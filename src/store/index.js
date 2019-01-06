import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
})

export default store;
