<template>
  <li
  class="section__pain__item"
  :class="{section__pain__opacity: card.sales }">
    <img :src="card.image" :alt="card.title">
    <div class="section__pain__description">
      <h2>&#171;{{card.title}}&#187;</h2>
      <h2>{{card.name}}</h2>
      <div class="section__pain__sales" v-if="card.sales">
        <h3 class="section__pain__sales__subtitle">
          Продано на аукционе
        </h3>
      </div>
      <div class="section__pain__subtitle" v-else>
        <span class="section__pain__price">
          <strike class="section__pain__sale" v-if="card.sale">
             {{card.sale | numberFormat}} $
          </strike>
          {{card.price | numberFormat}} $
        </span>
        <Loading v-if="load"/>
        <button
        :class="{
        section__pain__btn__basket: card.basket
        }"
        class="btn section__pain__btn"
        @click="addBasket" v-else
        >
          <img src="@/assets/ok.svg" alt="ok" v-if="card.basket">
          {{card.basket ? 'В корзине' : 'Купить'}}
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';
import axios from 'axios';
import { mapMutations } from 'vuex';
import { URL } from '../config';

import Loading from './Loading.vue';

export default {
  name: 'PainCard',
  props: ['card'],
  data() {
    return {
      load: false,
    };
  },
  filters: {
    numberFormat,
  },
  components: {
    Loading,
  },
  methods: {
    ...mapMutations(['updateCards']),
    addBasket() {
      this.load = true;
      const data = axios.get(URL + this.card.id);
      data.then((response) => {
        this.updateCards(response.data.id);
        this.load = false;
      });
    },
  },
};
</script>

<style lang="scss">

.section__pain__item {
  border: 1px solid #E1E1E1;
}

.section__pain__opacity {
  opacity: 0.5;
}

.section__pain__description {
     padding: 18px 26px;
}

.section__pain__sales__subtitle {
  margin-top: 33px;
}

.section__pain__subtitle {
  margin-top: 22px;
  display: flex;
  align-items: center;
}

.section__pain__sale {
  display: block;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 3px;
  color: #A0A0A0;
}
.section__pain__price {
  margin-right: auto;
}

.section__pain__btn {
  padding: 15px 29px;
}

.section__pain__btn:hover,
.section__pain__btn:focus {
  background: #776763;
}

.section__pain__btn__basket {
  padding: 13px 9px;
  display: flex;
  background: #5B3A32 !important;
}

</style>
