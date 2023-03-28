<script setup>
  const props = defineProps({
    pharmacy: {
      id: String,
      title: String,
      locationDescr: String,
      location: [Number],
      workingHourse: String,
      phone: String,
      products: [
          {
              count: Number,
              product: {
                  id: String,
                  title: String,
                  price: Number,
                  image: String
              }
          }
      ]
    }
  })

</script>

<template>
  <div class="pharmacy df df-column">
    <h5 class="pharmacy__title h7">{{ pharmacy?.title }}</h5>
    <p class="pharmacy__location-descr p3">{{ pharmacy?.locationDescr }}</p>
    <div class="pharmacy__info df df-column">
      <a class="pharmacy__link p3 df df-ai-center" href="tell:"
        ><svg width="16" height="16">
          <use href="../../assets/img/sprites.svg#icon-phone"></use>
        </svg>
        {{ pharmacy?.phone }}
      </a>
      <div class="pharmacy__time">
        <a class="pharmacy__link p3 df df-ai-center"
          ><svg width="16" height="16">
            <use href="../../assets/img/sprites.svg#icon-clock"></use>
          </svg>
          {{ pharmacy?.workingHourse }}
        </a>
        <table class="pharmacy__time-table df-column">
          <tr class="pharmacy__time-table-row df df-jc-between">
            <td class="p3">Понедельник</td>
            <td class="p3">09:00-21:00</td>
          </tr>
          <tr class="pharmacy__time-table-row df df-jc-between">
            <td class="p3">Вторник</td>
            <td class="p3">09:00-21:00</td>
          </tr>
          <tr class="pharmacy__time-table-row df df-jc-between">
            <td class="p3">Среда</td>
            <td class="p3">09:00-21:00</td>
          </tr>
          <tr class="pharmacy__time-table-row df df-jc-between">
            <td class="p3">Четверг</td>
            <td class="p3">09:00-21:00</td>
          </tr>
          <tr class="pharmacy__time-table-row df df-jc-between">
            <td class="p3">Пятница</td>
            <td class="p3">09:00-21:00</td>
          </tr>
          <tr class="pharmacy__time-table-row df df-jc-between">
            <td class="p3">Суббота</td>
            <td class="p3">09:00-21:00</td>
          </tr>
          <tr class="pharmacy__time-table-row df df-jc-between">
            <td class="p3">Воскресень</td>
            <td class="p3">09:00-21:00</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="pharmacy__bottom df df-jc-between df-ai-center">
      <div class="df df-ai-center">
        <!-- width="5.33" height="16" -->
        <svg class="pharmacy__dropdown-icon" width="16" height="16">
          <use href="../../assets/img/sprites.svg#arrow-menu"></use>
        </svg>

        <div class="df df-column">
          <span class="pharmacy__price">38.40 р.</span>
          <span class="pharmacy__avaible p3">Есть в наличии</span>
          <!-- <span>2 товара из 3</span> -->
        </div>
      </div>
      <button class="pharmacy__order-button p3 df df-jc-center df-ai-center">Забронировать</button>
    </div>
    <button class="pharmacy__close-button df">
      <svg width="12" height="12">
        <use href="../../assets/img/sprites.svg#icon-close"></use>
      </svg>
    </button>
  </div>
</template>

<style lang="scss">
.pharmacy {
  position: relative;
  background-color: $white;
  width: 100%;
  padding: 12px 10px 16px;
  margin-bottom: 4px;

  &__title {
    color: $blue;
    font-weight: 700;
    margin-bottom: 8px;
  }

  &__location-descr {
    max-width: 220px;
  }

  &__info {
    margin: 16px 0;
    gap: 8px;
  }

  &__link {
    margin-right: auto;

    &:hover {
      @include media('min', 'lg') {
        color: $blue;
      }
    }

    svg {
      color: $blue;
      margin-right: 6px;
    }
  }
  
  &__time {
    position: relative;
    
    &-table {
      position: absolute;
      display: none;
      padding: 8px 8px 10px;
      top: calc(100% + 4px);
      left: 12px;
      background-color: $white;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 0px 3px rgba(0, 0, 0, 0.06);
      border-radius: 6px;

      &-row {
        padding: 2px 0;
        gap: 12px;

        &:first-child {
          padding-top: 0;
        }

        &:last-child {
          padding-bottom: 0;
        }
      }
    }

    &:hover {
      .pharmacy__time-table {
        @include media('min', 'lg') {
          display: flex;
        }

        &:hover {
          @include media('min', 'lg') {
            // display: none;
          }
        }   
      }
    }
  }

  &__dropdown-icon {
    color: $grayIcon;
    cursor: pointer;
    padding: 3.34px 5px;
    rotate: 90deg;
    margin-right: 6px;
  }

  &__price {
    font-size: 16px;
    font-weight: 700;
    line-height: 130%;
  }

  &__avaible {
    color: #929bab;
  }

  &__order-button {
    width: 170px;
    height: 36px;
    font-weight: 700;
    color: $blue;
    background-color: $white;
    border: 1px solid $blue;
    border-radius: 6px;
    transition: 0.1s;

    &:hover {
      @include media('min', 'lg') {
        background-color: $blue;
        color: $white;
      }
    }
  }

  &__close-button {
    position: absolute;
    padding: 2px;
    background: none;
    border: none;
    color: $grayIcon;
    right: 14px;
    top: 14px;
  }
}
</style>
