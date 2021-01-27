<template>
  <main class="main">
    <section  class="section__pain">
      <div class="container section__pain__container">
        <h1 class="section__pain__title">
          Картины эпохи Возрождения
        </h1>
        <ul class="section__pain__list">
          <PainCard v-for="card in uptateCards" :key="card.id" :card="card"/>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import PainCard from '@/components/PainCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Main',
  components: {
    PainCard,
  },
  computed: {
    ...mapGetters(['watchPainCards']),
    uptateCards() {
      return this.watchPainCards;
    },
  },
};
</script>

<style lang="scss">
  .main {
    margin-top: 45px;
    margin-bottom: 17%;
  }

  .section__pain__list {
    margin-top: 39px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }
</style>
