<template>
    <div class="map__header map-header df df-ai-center df-jc-between">
        <div class="map-header__left df df-ai-center">
            <div class="map-header__title h1">Пункты выдачи</div>
            <div class="map-header__filters df df-ai-center">
                <label class="map-header__input p3 df df-ai-center df-jc-center">
                    <input class="" type="checkbox" id="input-open">
                    Открыто сейчас
                </label>
                <label class="map-header__input p3 df df-ai-center df-jc-center">
                    <input class="" type="checkbox" id="input-clock">
                    Круглосуточно
                </label>
                <label class="map-header__input p3 df df-ai-center df-jc-center">
                    <input class="" type="checkbox" id="input-stock">
                    Все в наличии
                </label>
            </div>
        </div>
        <div class="map-header__right df df-ai-center">
            <div class="map-header__buttons df df-ai-center">
                <button class="map-header__btn map-header__btn--list df df-ai-center df-jc-center p3">
                    <!-- <svg width="18" height="18">
                        <use xlink:href="/img/sprites.svg#icon-list"></use>
                    </svg> -->
                    Список
                </button>
                <button class="map-header__btn map-header__btn--map df df-ai-center df-jc-center p3 active">
                    <!-- <svg width="18" height="18">
                        <use xlink:href="/img/sprites.svg#icon-location"></use>
                    </svg> -->
                    Карта
                </button>
            </div>
            <!-- <svg width="18" height="18" class="map-header__close">
                <use xlink:href="/img/sprites.svg#icon-close"></use>
            </svg> -->
        </div>
    </div>
</template>

<style lang="scss">
.map {
  &-header {
    width: 100%;
    background: $white;
    z-index: 100;
    box-shadow: 0px 5px 10px rgba(26, 54, 95, 0.05);
    padding: 15px 20px;

    &__title {
      margin-right: 20px;
    }

    &__input {
      background: $white;
      border: 1px solid $grayLine;
      border-radius: 8px;
      padding: 9px 15px;
      min-width: 130px;
      font-weight: 600;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 12px;
      }

      @include media('min', 'lg') {
        &:hover:not(.active) {
          border: 1px solid $blueHover;
          color: $blueHover;
        }
      }

      input {
        position: absolute;
        left: -9999px;
        opacity: 0;
      }

      &.active {
        border: 1px solid $blue;
        background: $blue;
        color: $white;
      }
    }

    &__buttons {
      border: 1px solid $grayLine;
      border-radius: 8px;
      overflow: hidden;
      margin-right: 18px;
    }

    &__btn {
      background: $white;
      border: none;
      border-radius: 8px;
      padding: 9px 15px;
      font-weight: 600;
      min-width: 90px;

      &.active {
        background: $blue;
        color: $white;
      }
    }

    &__close {
      color: $grayIcon;
    }
  }

  &__wrapper {
    position: relative;
    width: 100%;
    height: calc(100% - 70px);
  }

  &__container {
    width: 100%;
    min-height: 100%;
  }

  &__pharmacy-list {
    max-width: 1400px;
    background: $white;
    margin: 20px auto;
    padding: 20px;
  }

  .checkout-pickup-picker-page__pharmacy {
    position: absolute;
    top: 0;
    right: auto;
    width: 360px;
    height: 100%;
    background: $grayBg;
    box-shadow: 0px 5px 10px rgba(26, 54, 95, 0.05);
    max-height: 100%;
    overflow-y: auto;
  }

  .pickup-picker {
    &-pharmacy-popup {
      border-top: 4px solid $grayBg;
      background: $white;
      box-shadow: 0px 5px 10px rgba(26, 54, 95, 0.02);

      &__close {
        color: $grayIcon;
        cursor: pointer;
      }

      &-info {
        padding: 12px 10px;

        &__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        &__title {
          font-weight: 700;
          color: $blue;
        }

        &__address {
          max-width: 250px;
          margin-bottom: 16px;
        }

        &__contact {
          margin-bottom: 16px;
        }

        &__working-hours {
          margin-top: 8px;
        }

        &__phone,
        &__working-hours {
          display: flex;
          align-items: center;

          svg {
            margin-right: 6px;
            color: $blue;
          }
        }

        &-option {
          &.pickup-picker-pharmacy-popup-info-option--opened {
            .pickup-picker-pharmacy-popup-info-option__arrow {
              transform: rotate(-90deg);
            }
          }

          &__inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          &__toggle {
            display: flex;
            align-items: center;
            cursor: pointer;
          }

          &__arrow {
            color: $grayIcon;
            transform: rotate(90deg);
          }

          &__total {
            margin-left: 10px;

            .status {
              color: $grayText;
            }
          }
        }
      }

      &__options {
        display: none;
        border-top: 4px solid $grayBg;
      }
    }

    &-option-cart {
      &-product {
        display: flex;
        align-items: center;
        padding: 12px 10px;

        &:not(:first-child) {
          border-top: 1px solid $grayLine;
        }

        &__image {
          display: flex;
          align-items: stretch;
          width: 50px;
          height: 50px;
          margin-right: 12px;
          flex-shrink: 0;
        }

        &__info {
          max-width: 190px;
          margin-right: 16px;
        }

        &__total {
          display: flex;
          flex-flow: column;
          align-items: flex-end;
          flex-shrink: 0;

          .sale {
            display: flex;
            align-items: center;
            font-size: 10px;
            line-height: 150%;

            .old-price {
              color: $grayText;
            }

            .percent {
              font-weight: 700;
              background: rgba(255, 60, 107, 0.05);
              border-radius: 4px;
              padding: 0 4px;
              color: $pink;
            }
          }
        }
      }
    }
  }
}
</style>