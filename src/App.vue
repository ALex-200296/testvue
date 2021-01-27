<template>
  <div>
     <Header />
     <Main />
     <Footer />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import painProducts from './painProducts';

import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
  methods: {
    ...mapMutations(['addCards']),
    createCard() {
      if (localStorage.getItem('painCards')) {
        const data = JSON.parse(localStorage.getItem('painCards'));
        this.addCards(data);
      } else {
        localStorage.setItem('painCards', JSON.stringify(painProducts));
        this.addCards(painProducts);
      }
    },
  },
  created() {
    this.createCard();
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');

$color34: #343030;

* {
  box-sizing: border-box;
}

html, body {
  font-family: 'Merriweather', serif;
  margin: 0;
  padding: 0;
  background:#F6F3F3
}

a {
  text-decoration: none;
  font-size: 14px;
  color: #343030;
}

Ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

input,
button,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Merriweather', serif;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
}

h2 {
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
}

h3 {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}

h4 {
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
}

h5 {
  font-size: 14px;
  font-weight: 400;
  line-height: 36px;
}

h6 {
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
}

#app {
  font-family: 'Merriweather', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  cursor: pointer;
  background: #403432;
  color: #fff;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 700;
}
</style>
