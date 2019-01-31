import vue from 'vue';
import vuex from 'vuex';
import state from './state.js';
import mutations from './mutations.js';
import actions from './actions.js';

vue.use(vuex);

const store = new vuex.Store({
  state,
  mutations,
  actions,
})

export default store;
