<template>
  <van-popup
    v-model:show="showLoginSection"
    position="bottom"
    :style="{ height: '100%' }"
    class="login-section"
  >
    <div class="login-section-wrapper">
      <van-icon
        v-show="loginStatus"
        class="wrapper-close-btn"
        name="cross"
        @click="toHideLoginSection"
      />
      <div class="wrapper-logo">
        <svg-icon name="wangyiyun" />
        <div class="circle"></div>
      </div>
      <div :class="['wrapper-login', { show: !showLoginBtn }]">
        <div v-show="loginStatus" class="wrapper-login-number">
          <span>17863080270</span>
          <svg-icon name="number-pen" @click="showLoginByPhoneSection = true" />
        </div>
        <div class="wrapper-login-btn" @click="showLoginByPhoneSection = true">
          手机号登录
        </div>
      </div>
      <div :class="['wrapper-footer', { show: showLoginBtn }]">
        <span>网易云音乐 · 音乐的力量</span>
        <span>by jonathan</span>
      </div>
    </div>
    <component
      :is="LoginByPhoneComponent"
      v-model:show="showLoginByPhoneSection"
    ></component>
  </van-popup>
</template>

<script lang="ts">
import { Icon } from 'vant'
import { toRefs } from '@vue/runtime-core'
import useLoginSection from '@/hooks/login/useLoginSection'

export default {
  name: 'LoginSection',
  components: {
    [Icon.name]: Icon,
  },
  setup(props) {
    const { state, toHideLoginSection, LoginByPhoneComponent } =
      useLoginSection()

    return {
      props,
      ...toRefs(state),
      toHideLoginSection,
      LoginByPhoneComponent,
    }
  },
}
</script>

<style lang="stylus" scoped>
.login-section-wrapper
  position relative
  height 100%
  bg-color(var(--logo-bgcolor))

  .wrapper-close-btn
    position absolute
    top 16px
    left 16px
    font-size 25px
    color $w
    z-index 1

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
    position relative
    padding 0 20px
    text-align center
    opacity 0
    z-index 0
    transition opacity .5s ease
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

  .wrapper-footer
    display flex
    flex-direction column
    align-items center
    margin-top 20px
    opacity 0
    transition opacity .5s ease
    span:nth-child(1)
      display inline-block
      mixin-font($w, $font-size-lg)
      margin-bottom 10px
      font-family 'Alibaba PuHuiTi'
      font-style normal
    span:nth-child(2)
      display flex
      align-items center
      justify-content space-around
      mixin-font($w, $font-size-sm)
      &:after, &:before
        content ''
        width 45px
        height 1px
        bg-color(#e24b3f)

  .show
    opacity 1
    z-index 1


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
