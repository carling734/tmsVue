import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isAudit: false
  },
  mutations: {
    auditHandle(state) {
      state.isAudit = !state.isAudit;
    }
  }
})
