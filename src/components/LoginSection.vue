<template>
  <van-popup
    v-model:show="showLoginSection"
    closeable
    close-icon-position="top-left"
    position="bottom"
    :style="{ height: '100%' }"
    class="login-section"
  >
    <div class="login-section-wrapper">
      <div class="wrapper-logo">
        <svg-icon name="wangyiyun" />
        <div class="circle"></div>
      </div>
      <div class="wrapper-login">
        <div class="wrapper-login-number">
          <span>17863080270</span>
          <svg-icon name="number-pen" />
        </div>
        <div class="wrapper-login-btn">注册/登录</div>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts">
import { Popup } from 'vant'
import { PropType } from 'vue'

export default {
  name: 'LoginSection',
  components: {
    [Popup.name]: Popup,
  },
  props: {
    showLoginSection: {
      type: Boolean as PropType<Boolean>,
      default: false,
    },
  },
  setup(props) {
    return {
      props,
    }
  },
}
</script>

<style lang="stylus" scoped>
.login-section-wrapper
  height 100%
  bg-color(var(--logo-bgcolor))
  .wrapper-logo
    position relative
    height 70%
    & > .svg-icon
      z-index 2
      absolute-center()
      width 100px
      height 100px
      fill var(--logo-lighter-bgcolor)
    & > .circle
      absolute-center()
      bd-radius(50%)
      border: 1px solid #f12a24
      animation circle 5s linear infinite
      &:after
        absolute-center()
        content ''
        bd-radius(50%)
        border: 1px solid #f12a24
        animation after 5s linear infinite
  .wrapper-login
    padding 0 20px
    text-align center
    &-number
      height 35px
      line-height 35px
      & > span,.svg-icon
        display inline-block
        vertical-align middle
      & > span
        mixin-font(var(--cell-font-color), $font-size-lg)
      & > .svg-icon
        margin-left 10px
    &-btn
      display inline-block
      mixin-font(#fe5454, $font-size-lg, $font-weight-sm)
      bg-color(var(--btn-bgcolor))
      width 80%
      padding 15px 0
      border-radius 25px
      font-family 'Alibaba PuHuiTi'
      font-style normal
      &:active
        opacity .5


@keyframes circle
  from
    width 100px
    height 100px
  to
    width 350px
    height 350px
    opacity 0

@keyframes after
  from
    width 0px
    height 0px
  to
    width 300px
    height 300px
    opacity 0
</style>
