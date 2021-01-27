<template>
  <header>
    <div class="container header-container">
      <a class="header__logo">
        <img src='../assets/logo.svg' class="header__img"/>
      </a>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item">
            <a href="" class="header__link">
              Каталог
            </a>
          </li>
           <li class="header__item">
            <a href="" class="header__link">
              Доставка
            </a>
          </li>
           <li class="header__item">
            <a href="" class="header__link">
              Оплата
            </a>
          </li>
           <li class="header__item">
            <a href="" class="header__link">
              Контакты
            </a>
          </li>
           <li class="header__item">
            <a href="" class="header__link">
              О галерее
            </a>
          </li>
        </ul>
      </nav>
      <form action="" class="header__form">
        <input type="text" class="header__input" placeholder="Поиск по названию картины">
        <input type="submit" class="btn header__button" value="Найти">
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">

  header {
    margin: 0;
    padding: 21px 0;
    border-bottom: 1px solid #E1E1E1;
  }

  .container {
    max-width: 1216px;
    margin: 0 auto;
  }

  .header-container {
    display: flex;
    align-items: center;
  }

  .header__nav {
    margin-right: auto;
  }

  .header__list {
    display: flex;

    .header__item {
      margin-left: 48px;
    }
  }
  .header__input {
    width: 293px;
    padding: 16px;
    border: 1px solid #E1E1E1;
    background: transparent;
    color: #343030;
    outline: none;

    &:hover,
    &:focus {
      border: 1px solid #B5B5B5;
    }

    &::placeholder {
      font-size: 14px;
      color: #9F9F9F;
    }
  }

  .header__button {
    padding: 15px 36px;
    font-size: 14px;
    font-weight: 700;

    &:hover,
    &:focus {
      background: #776763;
    }
  }
</style>
