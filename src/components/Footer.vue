<template>
  <footer class="footer">
    <div class="container footer__container">
      <a class="footer__logo">
        <img src='@/assets/footerLogo.svg' class="footer__img"/>
      </a>
      <nav class="footer__nav">
        <ul class="footer__list">
          <li class="footer__item">
            <a href="" class="footer__link">
              Каталог
            </a>
          </li>
           <li class="footer__item">
            <a href="" class="footer__link">
              Доставка
            </a>
          </li>
           <li class="footer__item">
            <a href="" class="footer__link">
              Оплата
            </a>
          </li>
           <li class="footer__item">
            <a href="" class="footer__link">
              Контакты
            </a>
          </li>
           <li class="footer__item">
            <a href="" class="footer__link">
              О галерее
            </a>
          </li>
        </ul>
      </nav>
      <div class="footer__contact">
        <a href="tel: +74955555555" class="footer__contact__link">
          <img src="@/assets/phone.svg" alt="" class="footer__contact__img">
          +7 (495) 555-55-55
        </a>
        <a href="" class="footer__contact__link">
          <img src="@/assets/adress.svg" alt="" class="footer__contact__img">
          г.Москва, ул. Расплетина, 24
        </a>
    </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
  .footer {
    background: #EAEAEA;
    padding: 20px 0;
  }

  .footer__container {
    display: flex;
    align-items: center;
  }

  .footer__nav {
    margin-right: auto;
  }

  .footer__list {
    display: flex;

    .footer__item {
      margin-left: 48px;
    }
  }

  .footer__contact__link {
    margin-left: 42px;

    .footer__contact__img {
      padding-right: 10px;
    }
  }
</style>
