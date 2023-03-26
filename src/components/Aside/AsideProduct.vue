<template>
  <li class="product df df-ai-center">
    <img class="product__img" src="../../assets/img/prodcut-img1.png" alt="" />
    <div class="product__middle df df-column">
      <span class="product__not-avaible">Нет в наличии</span>
      <p class="product__descr p3">Молодежная ул, 10В, Климовск мкр, Подольск, МО</p>
    </div>
    <div class="product__right df df-column">
      <span class="product__price">38.99 р.</span>
      <div class="df">
        <span class="product__initial-price">38.55 р.</span>
        <span class="product__discount df df-jc-center df-ai-center">75%</span>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
.product {
  width: 100%;
  height: 72px;
  padding: 10px;
  margin: 1px 0;
  background-color: $white;
  font-size: 10px;
  font-family: 'SF';

  &__img {
    object-fit: contain;
    width: 48px;
    height: 48px;
    margin-right: 12px;
  }

  &__middle {
    max-width: 191px;
    margin-top: 1px;
  }

  &__not-avaible {
    color: $pink;
  }

  &__descr {
    line-height: 130%;
  }

  &__right {
    margin-left: auto;
  }

  &__price {
    margin-left: auto;
    font-size: 16px;
    font-weight: 700;
    line-height: 130%;
  }

  &__initial-price {
    color: $grayText;
    margin-right: 4px;
    line-height: 150%;
  }

  &__discount {
    padding: 0px 4px;
    width: 29px;
    height: 15px;
    background: rgba(255, 60, 107, 0.05);
    color: $pink;
    border-radius: 4px;
  }
}
</style>
