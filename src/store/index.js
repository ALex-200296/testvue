import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    PainCards: [],
  },
  mutations: {
    addCards(state, Cards) {
      state.PainCards = Cards;
    },
    updateCards(state, id) {
      state.PainCards = state.PainCards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            basket: true,
          };
        }
        return {
          ...card,
        };
      });
      localStorage.setItem('painCards', JSON.stringify(state.PainCards));
    },
  },
  getters: {
    watchPainCards(state) {
      return state.PainCards;
    },
  },
});
